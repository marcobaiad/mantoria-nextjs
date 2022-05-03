import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import Paragraph from 'antd/lib/typography/Paragraph'
import PreCode from '../../../components/PreCode'
import ejemploIMG from '../../../public/assets/images/ejemplo.jpg'
import { Divider } from 'antd'

const ImagePage = () => {
  return (
    <>
      <Title level={2}>Imágenes</Title>
      <Paragraph>
        Las imagenes en un sitio web son sumamente importante si queremos dar
        mejor experiencia de usuario. Dicho lo anterior, es más que evidente que
        las imagenes son muy utilizadas y a día de hoy es prácticamente
        imposible visitar una web sin una imagen.
        <br />
        Debemos saber que una imagen puede ser montada desde una url externa a
        nuestro sitio web o directamente desde un directorio en local
      </Paragraph>
      <Title level={3}>Imagen Local</Title>
      <PreCode
        element="img"
        closingTag={false}
        attributes='src="./images/logo.png" alt="Logo" width="200px" height="200px"'
      />
      <Paragraph>
        Tener en cuenta que el valor del atributo <Text strong>src</Text> hace
        referencia a <Text strong>.</Text> (el directorio donde estoy parado
        actualmente) <Text strong>/</Text> (listar los archivos en este
        directorio) <Text strong>images</Text> (nombre de la carpeta donde está
        mi imagen) <Text strong>/</Text> (listar los archivos en este
        directorio) <Text strong>logo.png</Text> (nombre exacto de mi imagen,
        respestando mayúsculas y minúsculas).
      </Paragraph>
      <Title level={3}>Resultado</Title>
      <img src={ejemploIMG} alt="Ejemplo Local" width="200px" height="200px" />
      <Divider />
      <Title level={3}>Imagen desde URL externa</Title>
      <PreCode
        element="img"
        closingTag={false}
        attributes='src="https://pbs.twimg.com/profile_images/1312063891069972480/DlNHL3w7_400x400.jpg" alt="Logo de Google" width="200px" height="200px"'
      />
      <Title level={3}>Resultado</Title>
      <img
        src="https://pbs.twimg.com/profile_images/1312063891069972480/DlNHL3w7_400x400.jpg"
        alt="Logo de Google"
        width="200px"
        height="200px"
      />
      <br />
      <br />
      <Paragraph>
        En el ejemplo, podemos ver que el elemento <Text strong>img</Text>{' '}
        contiene varios <Text strong>atributos</Text>, pero es importante saber
        que no todos son estrictamente necesarios. Para poder cargar una imagen,
        si o si necesitamos indicar correctamente cual es la url de la misma en
        el atributo <Text strong>src</Text>. Tambien es importante el atributo{' '}
        <Text strong>alt</Text>, ya que este texto es el que se mostrará en caso
        de que la imagen no se pueda cargar. Además, es una buena práctica
        añadir los atributos <Text strong>width</Text> y{' '}
        <Text strong>height</Text>, ya que con estos podemos indicarle a los
        crawlers (rastreadores) saber el tamaño de la imagen.
      </Paragraph>
      <Title level={3}>Ejemplo de Imagen con url erronea</Title>
      <img src="./images/logo.png" alt="Logo" />
      <br />
      <br />
      <Paragraph>
        Como vemos, el navegador no pudo cargar la imágen, pero como usamos
        correctamente el atributo <Text strong>alt</Text> podemos saber sobre
        que trata la imágen.
      </Paragraph>
    </>
  )
}

export default ImagePage
