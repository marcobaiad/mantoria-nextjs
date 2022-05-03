import { Divider } from 'antd'
import Title from 'antd/lib/typography/Title'
import PreCode from '../../../components/PreCode'

const ListsPage = () => {
  return (
    <>
      <Title level={2}>Listas HTML</Title>
      <p>
        Se debe tener en cuenta que una lista está compuesta por al menos 2
        elementos HTML: ul/ol y un li como hijo para referenciar al elemento de
        dicha lista. Como habrás notado, existen 2 tipos de listas en HTML.
      </p>
      <Title level={3}>Lista Ordenada</Title>
      <p>
        Una lista ordenada es aquella que enúmera cada uno de elementos en la
        lista y tiene la siguiente estructura
      </p>
      <PreCode
        element="ol"
        direction="column"
        value={
          <>
            <PreCode
              element="li"
              value={'Este es el primer elemento de la lista'}
              stylesPre={{ marginBottom: '0px' }}
            />
            <PreCode
              element="li"
              value={'Este es el segundo elemento de la lista'}
              stylesPre={{ marginBottom: '0px' }}
            />
            <PreCode
              element="li"
              value={'Este es el tercer elemento de la lista'}
              stylesPre={{ marginBottom: '0px' }}
            />
          </>
        }
      />
      <Title level={4}>Resultado</Title>
      <ol>
        <li>Este es el primer elemento de la lista</li>
        <li>Este es el segundo elemento de la lista</li>
        <li>Este es el tercer elemento de la lista</li>
      </ol>
      <Divider />
      <Title level={3}>Lista Desordenada</Title>
      <p>
        Una lista desordenada es muy similar a una ordenada y tiene la siguiente
        estructura
      </p>
      <PreCode
        element="ul"
        direction="column"
        value={
          <>
            <PreCode
              element="li"
              value={'Este es el primer elemento de la lista'}
              stylesPre={{ marginBottom: '0px' }}
            />
            <PreCode
              element="li"
              value={'Este es el segundo elemento de la lista'}
              stylesPre={{ marginBottom: '0px' }}
            />
            <PreCode
              element="li"
              value={'Este es el tercer elemento de la lista'}
              stylesPre={{ marginBottom: '0px' }}
            />
          </>
        }
      />
      <Title level={4}>Resultado</Title>
      <ul>
        <li>Este es el primer elemento de la lista</li>
        <li>Este es el segundo elemento de la lista</li>
        <li>Este es el tercer elemento de la lista</li>
      </ul>
    </>
  )
}

export default ListsPage
