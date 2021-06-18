import React, { useMemo, Fragment } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Layout, Menu } from 'antd'
import router from '@/router'

const { SubMenu } = Menu
const { Sider } = Layout

const SideBar = () => {
  const history = useHistory()
  const location = useLocation()

  const routers = useMemo(() => {
    return router()
  }, [])

  const renderNavigation = (
    { navigation = null, routes = null, path = '/' },
    key
  ) => {
    if (!navigation) return null

    const Icon = navigation.Icon || Fragment
    const title = navigation.title || ''

    return (
      <Fragment key={key}>
        {routes ? (
          <SubMenu
            key={path}
            icon={<Icon />}
            title={title}
            className="menu__item"
          >
            {routes.map(renderNavigation)}
          </SubMenu>
        ) : (
          <Menu.Item key={path} icon={<Icon />} className="menu__item">
            {title}
          </Menu.Item>
        )}
      </Fragment>
    )
  }

  return (
    <Sider collapsible width={280} theme="light" className="sidebar">
      <Menu
        onClick={({ key }) => history.push(key)}
        theme="light"
        selectedKeys={[location.pathname]}
        className="sidebar__menu"
        mode="inline"
      >
        {routers.map(renderNavigation)}
      </Menu>
    </Sider>
  )
}

export default SideBar
