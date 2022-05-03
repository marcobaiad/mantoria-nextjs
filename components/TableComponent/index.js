import { useRef } from 'react'
import Input from 'antd/lib/input'
import Table from 'antd/lib/Table'
import Button from 'antd/lib/button'
import Space from 'antd/lib/space'
import { SearchOutlined } from '@ant-design/icons'

const TableComponent = ({ data }) => {
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

  return <Table columns={columns} dataSource={data} />
}
export default TableComponent
