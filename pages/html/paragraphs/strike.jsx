import { Divider } from 'antd'
import Title from 'antd/lib/typography/Title'
import PreCode from '../../../components/PreCode'

const StrikePage = () => {
  return (
    <>
      <Title level={2}>Strike</Title>
      <p>
        El elemento strike es usado situaciones específicas. Por ejemplo, cuando
        necesitamos informar a un usuario que lo que habíamos escrito no es
        correcto, ya sea porque cambió recientemente o porque encontramos un
        error.
      </p>
      <PreCode
        element="strike"
        value="Este es un texto en un elemento Strike"
      />
      <Divider />
      <Title level={3}>Resultado</Title>
      <strike>Este es un texto en un elemento strike</strike>
    </>
  )
}

export default StrikePage
