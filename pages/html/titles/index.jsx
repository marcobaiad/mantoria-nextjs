import Paragraph from 'antd/lib/typography/Paragraph'
import Text from 'antd/lib/typography/Text'
import PreCode from '../../../components/PreCode'

const TitlesPage = () => {
  return (
    <>
      <h2>Títulos en HTML</h2>
      <Paragraph>Existen 6 tipos de titulos en HTML:</Paragraph>
      <PreCode element="h1" value="Este es un título principal" />
      <PreCode element="h2" value="Este es un subtítulo de nivel 2" />
      <PreCode element="h3" value="Este es un subtítulo de nivel 3" />
      <PreCode element="h4" value="Este es un subtitulo de nivel 4" />
      <PreCode element="h5" value="Este es un subtítulo de nivel 5" />
      <PreCode element="h6" value="Este es un subtítulo de nivel 6" />
      <Paragraph>
        Se debe tener en cuenta que una página web solo debe contener{' '}
        <Text strong>UN</Text> titulo primario <Text strong>h1</Text>, y el
        resto debería ser escrito en subtitulos
      </Paragraph>
    </>
  )
}

export default TitlesPage
