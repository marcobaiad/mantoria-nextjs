import { useRef } from 'react'
import Paragraph from 'antd/lib/typography/Paragraph'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import Table from 'antd/lib/table'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import Space from 'antd/lib/space'
import { SearchOutlined } from '@ant-design/icons'

const data = [
  {
    key: '1',
    element: 'font-size',
    styles:
      'xx-small | x-small | small | medium | large | x-large | xx-large | número | longitud | porcentaje | inherit',
    fundamentals: 'Define el tamaño de la fuente.',
  },
  {
    key: '2',
    element: 'font-weight',
    styles:
      'normal | lighter | bold | bolder | 100, 200, 300, 400, 500, 600, 700, 800, 900',
    fundamentals: 'Define el grosor de la fuente.',
  },
  {
    key: '3',
    element: 'font-family',
    styles: 'Arial',
    fundamentals: 'Define la familia de fuentes.',
  },
  {
    key: '4',
    element: 'line-height',
    styles: 'normal | número | longitud | porcentaje',
    fundamentals: 'Define el alto de la línea.',
  },
  {
    key: '5',
    element: 'white-space',
    styles: 'normal | pre | nowrap | pre-wrap | pre-line | break-spaces',
    fundamentals: 'El texto no tiene salto de línea.',
  },
  {
    key: '6',
    element: 'text-align',
    styles: 'left | center | right',
    fundamentals: 'Define la alineación de un texto.',
  },
  {
    key: '7',
    element: 'vertical-align',
    styles:
      'baseline | sub | super | text-top | text-bottom | middle | top | bottom | porcentaje | <length>',
    fundamentals: 'Define la alineación de un texto.',
  },
]

const TextsPage = () => {
  const searchInput = useRef(null)

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder="Buscar"
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : [])
            if (e.target.value) {
              // eslint-disable-next-line prefer-const
              let timeout
              if (timeout) clearTimeout(timeout)
              timeout = setTimeout(() => confirm({ closeDropdown: false }), 500)
            } else {
              clearFilters()
              confirm({ closeDropdown: false })
            }
          }}
          onPressEnter={() => confirm({ closeDropdown: false })}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            onClick={() => clearFilters()}
            size="small"
            style={{ width: 90 }}
          >
            Limpiar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) setTimeout(() => searchInput.current.select(), 100)
    },
    render: (text) => text,
  })

  const columns = [
    {
      title: 'Elemento',
      dataIndex: 'element',
      key: 'element',
      width: '30%',
      ...getColumnSearchProps('element'),
      sorter: (a, b) => a.element.localeCompare(b.element),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Estilos',
      dataIndex: 'styles',
      key: 'styles',
      width: '20%',
      ...getColumnSearchProps('styles'),
      sorter: (a, b) => a.styles.localeCompare(b.styles),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Fundamentos',
      dataIndex: 'fundamentals',
      key: 'fundamentals',
      ...getColumnSearchProps('fundamentals'),
    },
  ]

  return (
    <>
      <Title>Estilos Comúnes Textos</Title>
      <Paragraph>
        Estilos comúnes aplicables a todos los tipos de textos:{' '}
        <Text strong>Títulos - Parrafos - Negrita - Expandido - Tachado</Text>,
        etc.
      </Paragraph>
      <div style={{ paddingBlock: 30 }}>
        <Table dataSource={data} columns={columns} />
      </div>
    </>
  )
}
export default TextsPage
