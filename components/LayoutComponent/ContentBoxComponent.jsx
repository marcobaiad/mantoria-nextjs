import { Layout } from 'antd'
const { Content } = Layout

const ContentBoxComponent = ({ content }) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        height: 'calc(100vh - 64px)',
        overflowY: 'scroll',
      }}
    >
      {content}
    </Content>
  )
}

export default ContentBoxComponent
