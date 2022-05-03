import Title from 'antd/lib/typography/Title'
import PreCode from '../../../components/PreCode'

const AttributesPage = () => {
  return (
    <>
      <Title level={2}>Atributos HTML</Title>
      <p>
        Los elementos en HTML tienen atributos; estos son valores adicionales
        que configuran los elementos o ajustan su comportamiento de diversas
        formas para cumplir los criterios de los usuarios.
      </p>
      <p>
        Página de referencia:{' '}
        <a
          href="https://developer.mozilla.org/es/docs/Web/HTML/Attributes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Referencia de Atributos HTML
        </a>
      </p>
      <PreCode
        element="p"
        value="Este es un texto con atributo 'title'"
        attributes={'title="Texto con atributo tilte"'}
      />
    </>
  )
}
export default AttributesPage
