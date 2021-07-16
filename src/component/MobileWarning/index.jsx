import React from 'react'
import { Result, Typography, Button } from 'antd'
import LogoIcon from '@/assets/logo.svg'
import BirdDown from '@/assets/images/birdDown.png'

const MobileWarning = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 30px'
      }}
    >
      <a href="/" className="header__logo">
        <img src={LogoIcon} />
      </a>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1
        }}
      >
        <Typography.Title level={3}>It’s not you, it’s us...</Typography.Title>
        <img
          src={BirdDown}
          style={{
            width: '60%',
            margin: '15px auto'
          }}
        />
        <p>
          Our mobile version is under construction. <br />
          <br />
          Please navigate to our site on desktop where you’ll be able to access
          our app and full functionality
        </p>

        <a href="/" style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            size="large"
            style={{ marginTop: 40, width: 170 }}
          >
            Home page
          </Button>
        </a>
      </div>
    </div>
  )
}

export default MobileWarning
