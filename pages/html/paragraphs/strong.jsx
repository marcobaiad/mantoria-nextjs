import Title from 'antd/lib/typography/Title'
import PreCode from '../../../components/PreCode'

const StrongPage = () => {
  return (
    <>
      <Title level={2}>Span</Title>
      <p>
        El elemento span es muy utilizado en situaciones específicas. A simple
        vista un texto escrito en este tipo de elemento es ve exactamente igual
        a uno escrito en un parrafo, pero existe una pequeña diferencia. Veamos
        la estructura y cuando usarlo.
      </p>
      <PreCode element="span" value="Este es un texto en un elemento span" />
    </>
  )
}

export default StrongPage
