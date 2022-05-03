import Title from 'antd/lib/typography/Title'
import TableComponent from '../../../components/TableComponent'

const data = [
  {
    key: '1',
    element: 'list-style',
    styles:
      'disc | circle | square | decimal | lower-roman | upper-roman | lower-alpha | upper-alpha | none',
    fundamentals: 'Establece el estilo de la lista.',
  },
  {
    key: '2',
    element: 'padding',
    styles: 'length | porcentaje',
    fundamentals:
      'Establece el espacio de relleno indicado por todos los lados de un elemento. El área de padding es el espacio entre el contenido del elemento y su borde (border)',
  },
]

const ListPage = () => {
  return (
    <>
      <Title level={2}>Listas</Title>
      <TableComponent data={data} />
    </>
  )
}
export default ListPage
