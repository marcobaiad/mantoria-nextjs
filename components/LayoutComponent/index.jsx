import { useState } from 'react'
import SidebarComponent from './SidebarComponent'
import HeaderComponent from './HeaderComponent'
import ContentBoxComponent from './ContentBoxComponent'

import { Layout } from 'antd'
import Script from 'next/Script'

const LayoutComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => setCollapsed(!collapsed)

  return (
    <Layout>
      <Script src="https://kit.fontawesome.com/8103fe7802.js" />
      <SidebarComponent collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderComponent toggle={toggle} collapsed={collapsed} />
        <ContentBoxComponent content={children} />
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
