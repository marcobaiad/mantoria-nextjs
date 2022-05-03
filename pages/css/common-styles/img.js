import Paragraph from 'antd/lib/typography/Paragraph'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import TableComponent from '../../../components/TableComponent'

const data = [
  {
    key: '1',
    element: 'object-fit',
    styles: 'fill | contain | cover | none | scale-down',
    fundamentals:
      'Como debería redimensionarse una imágen para ajustarse a su contenedor',
  },
  {
    key: '2',
    element: 'max-width',
    styles: 'auto | px | % | em | rem',
    fundamentals: 'Ancho máximo del elemento',
  },
  {
    key: '3',
    element: 'max-height',
    styles: 'auto | px | % | em | rem',
    fundamentals: 'La altura máxima del elemento',
  },
]

const imagesPage = () => {
  return (
    <>
      <Title level={2}>Imágenes</Title>
      <Paragraph>
        Las imágenes (<Text strong>&lt;image&gt;</Text>) son una parte muy
        importante en una página web. Por eso debemos saber como optimizarlas
        para que se vean y adapten a su contenedor de manera correcta.
      </Paragraph>
      <TableComponent data={data} />
    </>
  )
}
export default imagesPage
