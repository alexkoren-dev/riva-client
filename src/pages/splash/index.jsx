import React, { useEffect } from 'react'
import { Typography } from 'antd'
import './style.less'

import LogoImage from '@/assets/logo.svg'
import FirstTipImage from '@/assets/images/tip-1.png'
import SecondTipImage from '@/assets/images/tip-2.png'
import ThirdTipImage from '@/assets/images/tip-3.png'

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.history.push('/signup')
    }, 15000)
  }, [])

  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <img src={LogoImage} />
      </div>
      <div className="splash-tips">
        <div className="tip tip-1">
          <div className="tip__header">
            <div className="tip__number">
              <Typography.Title level={1}>1</Typography.Title>
            </div>
            <Typography.Title level={1} className="tip__title">
              Compensation
              <br />
              Transparency
            </Typography.Title>
          </div>
          <div className="tip-image">
            <img src={FirstTipImage} />
          </div>
        </div>
        <div className="tip tip-2">
          <div className="tip__header">
            <div className="tip__number">
              <Typography.Title level={1}>2</Typography.Title>
            </div>
            <Typography.Title level={1} className="tip__title">
              A social experience to <br />
              empower others
            </Typography.Title>
          </div>
          <div className="tip-image">
            <img src={SecondTipImage} />
          </div>
        </div>
        <div className="tip tip-3">
          <div className="tip__header">
            <div className="tip__number">
              <Typography.Title level={1}>3</Typography.Title>
            </div>
            <Typography.Title level={1} className="tip__title">
              Track your impact
            </Typography.Title>
          </div>
          <div className="tip-image">
            <img src={ThirdTipImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash
