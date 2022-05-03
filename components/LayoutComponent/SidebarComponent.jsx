import { useState } from 'react'
import { useRouter } from 'next/router'
import { Html5Outlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { getThree } from './helper/getThree'
import Title from 'antd/lib/typography/Title'
import Link from 'next/link'
const { Sider } = Layout
const { SubMenu } = Menu

const SidebarComponent = ({ collapsed }) => {
  const { pathname, push } = useRouter()

  const [selectedMenu, setSelectedMenu] = useState(() => getThree(pathname))

  const getThreeHandler = (path) => {
    if (typeof path === 'string') return setSelectedMenu(getThree(path))
    setSelectedMenu(path)
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Link href="/" onClick={() => setSelectedMenu('/')}>
        <Title
          level={4}
          ellipsis={true}
          style={{
            paddingInline: '16px',
            color: 'white',
            marginTop: '20px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          MB Coder
        </Title>
      </Link>
      <Menu
        onClick={(e) => getThreeHandler(e.keyPath)}
        theme="dark"
        mode="vertical"
        selectedKeys={selectedMenu}
        defaultSelectedKeys={['/html/fundamentos']}
      >
        <SubMenu
          key="/html"
          onTitleClick={() => push('/html/fundamentos')}
          icon={<Html5Outlined />}
          title="HTML"
        >
          <Menu.Item key="/html/fundamentos">
            <Link href="/html/fundamentos">
              <a>Fundamentos HTML</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/html/attributes">
            <Link href="/html/attributes">
              <a>Atributos</a>
            </Link>
          </Menu.Item>
          <SubMenu key="/html/paragraphs" title="Párrafos">
            <Menu.Item key="/html/paragraphs/paragraph">
              <Link href="/html/paragraphs/paragraph">
                <a>Párrafo</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/html/paragraphs/strong">
              <Link href="/html/paragraphs/strong">
                <a>Negrita</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/html/paragraphs/strike">
              <Link href="/html/paragraphs/strike">
                <a>Tachado</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/html/paragraphs/span">
              <Link href="/html/paragraphs/span">
                <a>Extendido</a>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="/html/tables">
            <Link href="/html/tables">
              <a>Tablas</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/html/anchors">
            <Link href="/html/anchors">
              <a>Anclas/Links</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/html/image">
            <Link href="/html/image">
              <a>Imágenes</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/html/form">
            <Link href="/html/form">
              <a>Formularios</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="/css"
          title="CSS"
          onTitleClick={() => push('/css/fundamentos')}
          icon={
            <i
              className="fab fa-css3-alt"
              style={{
                fontSize: '18px',
                paddingInline: '2px',
              }}
            />
          }
        >
          <Menu.Item>
            <Link href="/css/fundamentos">
              <a>Fundamentos</a>
            </Link>
          </Menu.Item>
          <SubMenu
            title="Estilos Comúnes"
            key="/css/common-styles"
            onTitleClick={() => push('/css/common-styles')}
          >
            <Menu.Item key="/css/common-styles/texts">
              <Link href="/css/common-styles/texts">
                <a>Textos</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/css/common-styles/lists">
              <Link href="/css/common-styles/lists">
                <a>Listas</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/css/common-styles/img">
              <Link href="/css/common-styles/img">
                <a>Imágenes</a>
              </Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="/javascript" title="JavaScript">
          <Menu.Item
            icon={
              <i
                className="fab fa-js-square"
                style={{
                  fontSize: '16px',
                  paddingInline: '2px',
                }}
              />
            }
          >
            <Link href="/javascript">
              <a>Javascript</a>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SidebarComponent
