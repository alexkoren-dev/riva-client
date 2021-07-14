import React, { Suspense, Fragment, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { BrowserView, MobileView } from 'react-device-detect'
import { createBrowserHistory } from 'history'
import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'

import router from '@/router'
import Auth from '@/component/AuthWrap'
import TopAlert from '@/component/TopAlert'
import ScrollReset from '@/component/ScrollReset'
import LoadingScreen from '@/component/LoadingScreen'

import LoginPopup from '@/pages/auth/login/loginPopup'
import MobileWarning from '@/component/MobileWarning'

const history = createBrowserHistory()

const App = () => {
  const { openAuthPopup } = useSelector((state) => state.auth)

  const routers = useMemo(() => {
    return router()
  }, [])

  const renderRoutes = (routes) =>
    routes ? (
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          {routes.map((route, i) => {
            const Guard = route.guard || Fragment
            const Layout = route.layout || Fragment
            const Component = route.component
            const ComponentProps = route.props || {}

            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <Guard>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component {...props} {...ComponentProps} />
                      )}
                    </Layout>
                  </Guard>
                )}
              />
            )
          })}
        </Switch>
      </Suspense>
    ) : null

  return (
    <ConfigProvider locale={enUS}>
      <BrowserView>
        <TopAlert />
        <Router history={history}>
          <LoginPopup visible={openAuthPopup} />
          <Auth>
            <ScrollReset />
            {renderRoutes(routers)}
          </Auth>
        </Router>
      </BrowserView>
      <MobileView>
        <MobileWarning />
      </MobileView>
    </ConfigProvider>
  )
}

export default hot(App)
