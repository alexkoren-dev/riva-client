import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingScreen from '../LoadingScreen'
import AuthActions from '@/services/auth'

function Auth({ children }) {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      const token = window.localStorage.getItem('accessToken')
      if (token) {
        await dispatch(AuthActions.getCurrentUser()).catch(() => {
          dispatch(AuthActions.logOut())
        })
      }

      setLoading(false)
    }

    initAuth()
  }, [dispatch])

  if (isLoading) {
    return <LoadingScreen />
  }

  return children
}

Auth.propTypes = {
  children: PropTypes.any
}

export default Auth
