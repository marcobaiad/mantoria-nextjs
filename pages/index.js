import Row from 'antd/lib/row'
import Divider from 'antd/lib/divider'
import Paragraph from 'antd/lib/typography/Paragraph'
import Title from 'antd/lib/typography/Title'
import Image from 'next/image'

const HomePage = () => {
  return (
    <>
      <Title style={{ textAlign: 'center' }}>
        Glosario - Teoría - Fundamentos
      </Title>
      <Row justify="center">
        <Image
          width={'500px'}
          height={'300px'}
          objectFit="contain"
          src="/../public/assets/images/html-css.png"
        />
      </Row>
      <Divider />
      <Paragraph style={{ paddingInline: '1rem' }}>
        En esta web podrás encontrar todo el contenido necesario para repasar
        conceptos vistos durante las clases y repasar los temas que te hayan
        resultado interesantes/complicados.
      </Paragraph>
    </>
  )
}
export default HomePage
