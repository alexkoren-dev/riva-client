import React, { Suspense, Fragment, useMemo } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { createBrowserHistory } from 'history'
import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'

import router from '@/router'
import Auth from '@/component/AuthWrap'
import TopAlert from '@/component/TopAlert'
import ScrollReset from '@/component/ScrollReset'
import LoadingScreen from '@/component/LoadingScreen'

const history = createBrowserHistory()

const App = () => {
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
                        <Component {...props} />
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
      <TopAlert />
      <Router history={history}>
        <Auth>
          <ScrollReset />
          {renderRoutes(routers)}
        </Auth>
      </Router>
    </ConfigProvider>
  )
}

export default hot(App)
