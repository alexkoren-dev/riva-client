import React from 'react'
import { Layout } from 'antd'
import SideBar from './sidebar'
import Header from './header'

const AppLayout = (props) => {
  return (
    <Layout className="app-layout">
      <Header />
      <Layout style={{ marginTop: 78 }}>
        <SideBar />
        <Layout.Content>{props.children}</Layout.Content>
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
