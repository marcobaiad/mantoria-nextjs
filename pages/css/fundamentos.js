import Paragraph from 'antd/lib/typography/Paragraph'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import PreCode from '../../components/PreCode'
import { Divider } from 'antd'
import style from './indexStyle.module.css'

const CSSPage = () => {
  return (
    <>
      <Title level={2}>Fundamentos CSS</Title>
      <Paragraph>
        Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS.
        <br />
        CSS describe como debe ser renderizado el elemento estructurado en la
        pantalla, en papel, en el habla o en otros medios
      </Paragraph>
      <Title level={3}>Sintaxis</Title>
      <PreCode
        value={'ul { \n   background-color: lightblue; \n}'}
        closingTag={false}
      />
      <Paragraph>
        Como vemos en el ejemplo de arriba, la sintaxis es muy simple, ya que se
        debe escribir un selector (<Text strong>clase</Text> o{' '}
        <Text strong>id</Text>) más una propiedad (<Text strong>color</Text>,{' '}
        <Text strong>background-color</Text>, <Text strong>font-size</Text>,
        etc.) y un valor (<Text strong>red</Text>, <Text strong>lightblue</Text>
        , <Text strong>20px</Text>, etc.). <br />
        En CSS los selectores se utilizan para delimitar los elementos HTML de
        nuestra página web a los que queremos aplicar estilo. Hay una amplia
        variedad de selectores CSS, lo que permite una gran precisión a la hora
        de seleccionar elementos a los que aplicar estilo. En este artículo y
        sus subartículos veremos con detalle todos los tipos y el modo como
        funcionan.
      </Paragraph>
      <Title level={3}>Selectores</Title>
      <Paragraph>
        Existen varios tipos de selectores y a su vez, los mismos se pueden
        utilizar de manera conjunta.
      </Paragraph>
      <Title level={4}>De tipo</Title>
      <Paragraph>
        Este grupo incluye selectores que delimitan un elemento HTML, como por
        ejemplo un &lt;ul&gt;
      </Paragraph>
      <PreCode value={`ul {\n  font-weight: bold; \n}`} closingTag={false} />
      <Divider />
      <Title level={4}>De Clase</Title>
      <Paragraph>
        Los selectores también admiten clases y se los identifican con un{' '}
        <Text strong>.</Text> más el nombre de la clase de un elemento HTML.
      </Paragraph>
      <PreCode
        value={`.mi-ul {\n  background-color: blue; \n  color: black; \n  font-weight: bold; \n}`}
        closingTag={false}
      />
      <Divider />
      <Title level={4}>De tipo ID</Title>
      <Paragraph>
        Por último los selectores también admiten un <Text strong>id</Text> de
        un elemento HTML y se los identifica con el simbolo{' '}
        <Text strong>#</Text>.
      </Paragraph>
      <PreCode
        value={`#id-de-mi-ul {\n  list-style: none; \n}`}
        closingTag={false}
      />
      <Divider />
      <Title level={4}>Pseudoclases</Title>
      <Paragraph>
        Este grupo de selectores incluye pseudoclases, que aplican estilo a
        ciertos estados de un elemento. La pseudoclase{' '}
        <Text strong>:hover</Text>, por ejemplo, selecciona un elemento solo
        cuando se le pasa el ratón por encima.
      </Paragraph>
      <PreCode
        value={`.mi-ul:hover {\n  color: purple; \n}`}
        closingTag={false}
      />
      <Divider />
      <Title level={4}>Pseudoelementos</Title>
      <Paragraph>
        También incluye pseudoelementos, que seleccionan una parte determinada
        de un elemento en vez del elemento en sí. Por ejemplo,{' '}
        <Text strong>::first-line</Text> siempre selecciona la primera línea del
        texto que se encuentra dentro de un elemento (
        <Text strong>&lt;p&gt;</Text>, en el ejemplo siguiente), y actúa como si
        un elemento <Text strong>&lt;span&gt;</Text> hubiera delimitado la
        primera línea, seleccionado y aplicado estilo.
      </Paragraph>
      <PreCode
        value={`.mi-ul li::selection {\n  background-color: white; \n  color: green; \n}`}
        closingTag={false}
      />
      <Divider />
      <Title level={3}>Resultado</Title>
      <section className={style['seccion-ul']}>
        <ul className={style['mi-ul']} id={style['id-de-mi-ul']}>
          <li>Primer Elemento</li>
          <li>Segundo Elemento</li>
        </ul>
      </section>
    </>
  )
}

export default CSSPage
