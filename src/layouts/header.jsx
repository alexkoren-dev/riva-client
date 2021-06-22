import React, { useEffect } from 'react'
import { Layout, Avatar, Dropdown, Menu } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import AuthActions from '@/services/auth'

import LogoIcon from '@/assets/logo.svg'

const Header = () => {
  const { userInfo, is_authed } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {}, [userInfo])

  const logout = () => {
    dispatch(AuthActions.logOut())
  }

  return (
    <Layout.Header className="header">
      <a href="/" className="header__logo">
        <img src={LogoIcon} />
      </a>
      {userInfo && (
        <div className="header__user">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="logout">
                  <a onClick={logout}>Log Out</a>
                </Menu.Item>
              </Menu>
            }
            placement="bottomRight"
          >
            {userInfo.avatar ? (
              <img src={userInfo.avatar} />
            ) : (
              <Avatar size={50} />
            )}
          </Dropdown>
        </div>
      )}
    </Layout.Header>
  )
}

export default Header
