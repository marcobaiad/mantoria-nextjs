import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import Paragraph from 'antd/lib/typography/Paragraph'
import PreCode from '../../../components/PreCode'
import Form from 'antd/lib/Form'
import Input from 'antd/lib/Input'
import Button from 'antd/lib/Button'
import Row from 'antd/lib/Row'

const FormPage = () => {
  return (
    <>
      <Title>Formularios</Title>
      <Paragraph>
        Los formularios son sumamente importantes cuando queremos recibir
        feeback de nuestros usuarios o queremos brindar una manera rápida de
        contactarnos directamente desde nuestro sitio web.
      </Paragraph>
      <PreCode
        element="form"
        direction="column"
        value={
          <>
            <PreCode
              element="label"
              stylesPre={{ marginBottom: 0 }}
              attributes='for="nombreID"'
              value="Nombre"
            />
            <PreCode
              element="input"
              stylesPre={{ marginBottom: 0 }}
              closingTag={false}
              attributes='id="nombreID" name="nombre" placeholder="Ej: Marco"'
            />
            <PreCode
              element="label"
              stylesPre={{ marginBottom: 0 }}
              attributes='for="apellidoID"'
              value="Apellido"
            />
            <PreCode
              element="input"
              stylesPre={{ marginBottom: 0 }}
              closingTag={false}
              attributes='id="apellidoID" name="apellido" placeholder="Ej: Baiad"'
            />
            <PreCode
              element="button"
              stylesPre={{ marginBottom: 0 }}
              attributes='type="submit"'
              value="Enviar"
            />
          </>
        }
      />
      <Title level={3}>Resultado</Title>
      <Form
        layout="vertical"
        wrapperCol={{ sm: { span: 22 }, md: { span: 6 } }}
        onFinish={(e) => {
          alert(`Datos del formulario: \n${JSON.stringify(e)}`)
        }}
      >
        <Form.Item label="Nombre" name="Nombre">
          <Input placeholder="Ej: Marco" />
        </Form.Item>
        <Form.Item label="Apellido" name="Apellido">
          <Input placeholder="Ej: Baiad" />
        </Form.Item>
        <Form.Item>
          <Row justify="center">
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Row>
        </Form.Item>
      </Form>
      <br />
      <Paragraph>
        Es una buena práctica utilizar el elemento <Text strong>label</Text> en
        los formularios para indicar que dato se está solicitando en cada campo,
        como buena práctica, también agregamos el hecho de utilizar un atributo{' '}
        <Text strong>for</Text> para indicar el id del input al que está
        relacionado. Esto permite al usuario hacer click en el{' '}
        <Text strong>label</Text> y se posicionarse en el{' '}
        <Text strong>input</Text>.
      </Paragraph>
    </>
  )
}
export default FormPage
