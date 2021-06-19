import React, { useState } from 'react'
import { Layout } from 'antd'
import SideBar from './sidebar'
import Header from './header'

const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(
    (window.localStorage.getItem('sidebarCollapsed') === 'true'
      ? true
      : false) || false
  )

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
    window.localStorage.setItem('sidebarCollapsed', collapsed)
  }

  return (
    <Layout className="app-layout">
      <Header />
      <Layout style={{ marginTop: 78 }}>
        <SideBar collapsed={collapsed} onCollapse={onCollapse} />
        <Layout.Content style={{ marginLeft: collapsed ? 80 : 280 }}>
          <div className="container">{props.children}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

const BasicLayout = (props) => {
  return (
    <Layout className="basic-layout">
      <Layout.Content>{props.children}</Layout.Content>
    </Layout>
  )
}

export { AppLayout, BasicLayout }
