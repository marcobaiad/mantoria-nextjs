import Title from 'antd/lib/typography/Title'
import Paragraph from 'antd/lib/typography/Paragraph'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head></Head>
      <Title
        style={{
          hyphens: 'auto',
          '-webkit-hyphens': 'auto',
          '-moz-hyphens': 'auto',
          '-ms-hyphens': 'auto',
        }}
      >
        Fundamentos HTML
      </Title>
      <Paragraph>
        Del inglés HyperText Markup Language. Define el significado y la
        estructura del contenido web.
      </Paragraph>
      <Paragraph>
        Un elemento HTML se distingue de otro texto en un documento mediante
        &quot;etiquetas&quot;, que consisten en el nombre del elemento rodeado
        por &lt;elemento&gt;. El nombre de un elemento dentro de una etiqueta no
        distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en
        mayúsculas, minúsculas o una mezcla. Por ejemplo, la etiqueta
        &lt;title&gt; se puede escribir como &lt;Title&gt;, &lt;TITLE&gt; o de
        cualquier otra forma.
      </Paragraph>
    </>
  )
}
