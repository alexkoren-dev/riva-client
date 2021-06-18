import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

function GuestGuard({ children }) {
  const auth = useSelector((state) => state.auth)

  if (auth.is_authed) {
    return <Redirect to="/home" />
  }

  return children
}

GuestGuard.propTypes = {
  children: PropTypes.any
}

export default GuestGuard
