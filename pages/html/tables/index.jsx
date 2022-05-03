import { Divider, Table } from 'antd'
import PreCode from '../../../components/PreCode'
import Title from 'antd/lib/typography/Title'

const columns = [
  {
    title: 'Titulo de mi primer columna',
    dataIndex: 'value1',
    align: 'center',
    width: '33.33%',
  },
  {
    title: 'Titulo de mi segunda columna',
    dataIndex: 'value2',
    align: 'center',
    width: '33.33%',
  },
  {
    title: 'Titulo de mi tercera columna',
    dataIndex: 'value3',
    align: 'center',
    width: '33.33%',
  },
]

const data = [
  {
    key: '1',
    value1: 'Texto de mi primera celda',
    value2: 'Texto de mi segunda celda',
    value3: 'Texto de mi tercera celda',
  },
]

const TablesPage = () => {
  return (
    <>
      <Title level={2}>Tablas HTML</Title>
      <p>
        Las tablas HTML son impresindibles cuando queremos mostrar muchos datos
        de manera ordenada. Una tabla HTML usualmente está compuesta por 3
        secciones: cabecera <strong>(thead)</strong>, cuerpo{' '}
        <strong>(tbody)</strong> y pie <strong>(tfoot)</strong>, pero se debe
        tener en cuenta que las secciones mencionadas no son necesariamente
        requeridas. Además estas secciones tienen filas <strong>(tr)</strong>,
        las cuales a su vez tienen celdas <strong>(td/th)</strong>.
        <br />
        La diferencia entre td/th es que <strong>td</strong> es para celdas de
        datos y <strong>th</strong> es para cabeceras.
      </p>
      <Title level={2}>Estructura de una tabla</Title>
      <PreCode
        element="table"
        direction="column"
        stylesPre={{ marginBottom: '0px' }}
        value={
          <>
            <PreCode
              element="thead"
              direction="column"
              stylesPre={{ marginBottom: '0px' }}
              comment="el elemento tr hace referencia a una fila"
              value={
                <PreCode
                  element="tr"
                  direction="column"
                  stylesPre={{ marginBottom: '0px' }}
                  value={
                    <>
                      <PreCode
                        element="th"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Titulo de mi primer columna"
                      />
                      <PreCode
                        element="th"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Titulo de mi segunda columna"
                      />
                      <PreCode
                        element="th"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Titulo de mi tercer columna"
                      />
                    </>
                  }
                />
              }
            />
            <PreCode
              element="tbody"
              direction="column"
              stylesPre={{ marginBottom: '0px' }}
              value={
                <PreCode
                  element="tr"
                  direction="column"
                  stylesPre={{ marginBottom: '0px' }}
                  value={
                    <>
                      <PreCode
                        element="td"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Texto de mi primer celda"
                      />
                      <PreCode
                        element="td"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Texto de mi segunda celda"
                      />
                      <PreCode
                        element="td"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Texto de mi tercer celda"
                      />
                    </>
                  }
                />
              }
            />
            <PreCode
              element="tfoot"
              direction="column"
              stylesPre={{ marginBottom: '0px' }}
              breakLine={true}
              value={
                <PreCode
                  element="tr"
                  direction="column"
                  stylesPre={{ marginBottom: '0px' }}
                  value={
                    <>
                      <PreCode
                        element="td"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Texto de mi primer celda"
                      />
                      <PreCode
                        element="td"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Texto de mi segunda celda"
                      />
                      <PreCode
                        element="td"
                        stylesPre={{ marginBottom: '0px' }}
                        value="Texto de mi tercer celda"
                      />
                    </>
                  }
                />
              }
            />
          </>
        }
      />
      <Divider />
      <Title level={3}>Resultado</Title>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        pagination={{ position: ['none'] }}
        footer={() => (
          <Table
            dataSource={data}
            columns={columns}
            bordered
            showHeader={false}
            pagination={{ position: ['none'] }}
          />
        )}
      />
    </>
  )
}

export default TablesPage
