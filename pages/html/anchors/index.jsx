import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import Paragraph from 'antd/lib/typography/Paragraph'
import { Divider } from 'antd'
import PreCode from '../../../components/PreCode'

const AnchorsPage = () => {
  return (
    <>
      <Title level={2} id="title">
        Link - Anchor - Ancla HTML
      </Title>
      <Paragraph>
        El elemento HTML <Text strong>Anchor</Text> se puede utilizar de muchas
        maneras:
      </Paragraph>
      <ul>
        <li>Crea un enlace a otras páginas de internet</li>
        <li>Crea un enlace a un archivo</li>
        <li>Referencia ubicaciones dentro de la misma página</li>
        <li>Direcciones de Correo</li>
        <li>Teléfonos</li>
      </ul>
      <Divider />
      <Title level={3}>Estructura básica de un anchor</Title>
      <PreCode
        element="a"
        attributes="href=https://www.google.com"
        value="Abrir Google"
      />
      <Paragraph>
        Como vemos, el elemento anchor tiene un atributo obligatorio:{' '}
        <Text strong>href</Text>, el valor de este puede ser una dirección de
        internet, una dirección de correo, una dirección de teléfono, una
        dirección de archivo, o una dirección de ubicación dentro de la misma
        página.
        <br />
        Para indicar el tipo de enlace, se deben utilizar otros atributos o un
        valor diferente en href.
      </Paragraph>
      <Title level={3}>Link a otra web en otra Pestaña</Title>
      <PreCode
        element="a"
        attributes='href="https://www.google.com" target="_blank" rel="noopener noreferrer"'
        value="Abrir Google"
      />
      <Title level={4}>Resultado</Title>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir Google
      </a>
      <Divider />
      <Title level={3}>Link a un archivo</Title>
      <PreCode
        element="a"
        attributes='href="https://www.google.com/robots.txt"'
        value="Abrir robots.txt de Google"
      />
      <Title level={4}>Resultado</Title>
      <a href="https://www.google.com/robots.txt">Abrir robots.txt de Google</a>
      <Divider />
      <Title level={3}>Link a una ubicación dentro de la misma página</Title>
      <PreCode
        element="a"
        attributes='href="#title"'
        value="Ir al primer título"
      />
      <Title level={4}>Resultado</Title>
      <a href="#title">Ir al primer título</a>
      <br />
      <br />
      <Paragraph>
        Es necesario entender que para navegar dentro de nuestra página con un{' '}
        <Text strong>anchor</Text>, se debe agregar el atributo{' '}
        <Text strong>id</Text> al elemento que se quiere referenciar y luego
        utilizar el valor de ése <Text strong>id</Text> (ejemplo
        id=&quot;title&quot;) dentro del atributo <Text strong>href</Text> más
        un signo <Text strong>#</Text> (ejemplo href=&quot;title&quot;)
      </Paragraph>
      <Divider />
      <Title level={3}>Link a una dirección de correo</Title>
      <PreCode
        element="a"
        value="marcobaiad@gmail.com"
        attributes='href="mailto:marcobaiad@gmail.com"'
      />
      <Title level={4}>Resultado</Title>
      <a href="mailto:marcobaiad@gmail.com">marcobaiad@gmail.com</a>
      <Divider />
      <Title level={3}>Link a un de teléfono</Title>
      <PreCode
        element="a"
        value="3816261384"
        attributes={'href="tel:+543816261384"'}
      />
      <Title level={4}>Resultado</Title>
      <a href="tel:+543816261384">3816261384</a>
    </>
  )
}
export default AnchorsPage
