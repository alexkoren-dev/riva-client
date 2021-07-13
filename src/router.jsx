import React from 'react'
import { Redirect } from 'react-router-dom'
import { LinkedInPopUp } from 'react-linkedin-login-oauth2'
import { WalletOutlined } from '@ant-design/icons'

// Layouts
import { AppLayout, BasicLayout } from '@/layouts'

// Guards
import GuestGuard from '@/component/GuestGuard'
import AuthGuard from '@/component/AuthGuard'

// Components
import Login from '@/pages/auth/login'
import SignUp from '@/pages/auth/signup'
import ResetPwd from '@/pages/auth/reset_pwd'
import ForgotPwd from '@/pages/auth/forgot_pwd'
import Splash from '@/pages/splash'
import Home from '@/pages/home'
import Compensation from '@/pages/compensation'
import NewsFeed from '@/pages/news_feed'

export default () => {
  return [
    {
      path: '/news-feed',
      exact: true,
      layout: AppLayout,
      component: NewsFeed,
      navigation: {
        title: 'News Feed',
        Icon: WalletOutlined
      }
    },
    {
      path: '/compensation',
      exact: true,
      layout: AppLayout,
      component: Compensation
    },
    {
      path: '/signin',
      guard: GuestGuard,
      exact: true,
      layout: BasicLayout,
      component: Login
    },
    {
      path: '/signup',
      guard: GuestGuard,
      exact: true,
      layout: BasicLayout,
      component: SignUp
    },
    {
      path: '/linkedin',
      guard: GuestGuard,
      exact: true,
      layout: BasicLayout,
      component: LinkedInPopUp
    },
    {
      path: '/forgot-pwd',
      guard: GuestGuard,
      exact: true,
      layout: BasicLayout,
      component: ForgotPwd
    },
    {
      path: '/reset-pwd',
      guard: GuestGuard,
      exact: true,
      layout: BasicLayout,
      component: ResetPwd
    },
    {
      path: '/',
      exact: true,
      component: () => <Redirect to="/news-feed" />
    },
    // {
    //   path: '/',
    //   layout: BasicLayout,
    //   exact: true,
    //   component: Splash
    // }
  ]
}
