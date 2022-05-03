import { createElement } from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Header } = Layout

const HeaderComponent = ({ collapsed, toggle }) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        style: { color: 'white', fontSize: '18px', marginLeft: '30px' },
        onClick: toggle,
      })}
    </Header>
  )
}

export default HeaderComponent
