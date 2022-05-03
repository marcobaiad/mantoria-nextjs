import { Divider } from 'antd'
import Title from 'antd/lib/typography/Title'
import Paragraph from 'antd/lib/typography/Paragraph'
import Text from 'antd/lib/typography/Text'
import PreCode from '../../../components/PreCode'

const SpanPage = () => {
  return (
    <>
      <Title level={2}>Span</Title>
      <Paragraph>
        El elemento span es muy utilizado en situaciones específicas. A simple
        vista un texto escrito en este tipo de elemento se ve exactamente igual
        a uno escrito en un parrafo, pero existe una pequeña diferencia. Veamos
        la estructura y cuando usarlo.
      </Paragraph>
      <PreCode
        element="p"
        value='Este es un parrafo normal <span style="background-color: blue; color: white; font-weight: bold">y este parrafo en un span</span>'
      />
      <Divider />
      <Title level={3}>Resultado</Title>
      <Paragraph>
        Este es un parrafo normal{' '}
        <Text
          span
          style={{
            backgroundColor: 'grey',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          y este es un parrafo en un span
        </Text>
        .
      </Paragraph>
      <Divider />
      <Title level={3}>Conclusión</Title>
      <p>
        Como podrán observar, al span lo usamos cuando queremos extender un
        texto, y a su vez, queremos poder identificarlo. Ocurrirá en ocasiones
        que necesitemos dar styles a una porción de texto dentro de un parrafo,
        y para eso podemos usar un span para no crear un elemento p anidado
        dentro de otro elemento p.
      </p>
    </>
  )
}

export default SpanPage
