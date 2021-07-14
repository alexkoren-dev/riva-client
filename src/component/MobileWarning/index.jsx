import React from 'react'
import { Result } from 'antd'

const MobileWarning = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Result status="warning" title="Please use this page on desktop." />
    </div>
  )
}

export default MobileWarning
