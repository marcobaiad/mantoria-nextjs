import Paragraph from 'antd/lib/typography/Paragraph'
import Title from 'antd/lib/typography/Title'
import TableComponent from '../../../components/TableComponent'

const data = [
  {
    key: '1',
    element: 'background-color',
    styles: 'color | transparent | inherit',
    fundamentals: 'Color de fondo',
  },
  {
    key: '2',
    element: 'padding',
    styles: 'length | porcentaje',
    fundamentals:
      'Establece el espacio de relleno indicado por todos los lados de un elemento. El área de padding es el espacio entre el contenido del elemento y su borde (border)',
  },
  {
    key: '3',
    element: 'margin',
    styles: 'auto | length | porcentaje',
    fundamentals: 'Establece el margen para los cuatro lados.',
  },
  {
    key: '4',
    element: 'width',
    styles:
      'auto | length | porcentaje | min-content | max-content | fit-content | fit-content(<length-percentage>)',
    fundamentals: 'Establece el ancho del elemento.',
  },
  {
    key: '5',
    element: 'height',
    styles:
      'auto | length | porcentaje | border-box | content-box | min-content | max-content | fit-content',
    fundamentals: 'Especifica la altura del area de contenido de un elemento.',
  },
]

const CommonStylesPage = () => {
  return (
    <>
      <Title>Estilos Cómunes</Title>
      <Paragraph>
        Existen estilos comunes que se pueden aplicar a cualquier elemento:
      </Paragraph>
      <div>
        <TableComponent data={data} />
      </div>
    </>
  )
}
export default CommonStylesPage
