import React from 'react'
import { LinkedIn } from 'react-linkedin-login-oauth2'
import { Button } from 'antd'

import linkedinImg from '@/assets/images/linkedIn.png'

const LinkedInAuthButton = (props) => {
  const responseLinkedIn = async (authResult) => {
    await props.onResponse(authResult)
  }

  return (
    <LinkedIn
      clientId={process.env.LINKEDIN_CLIENT_ID}
      state={process.env.LINKEDIN_STATE}
      onFailure={responseLinkedIn}
      onSuccess={responseLinkedIn}
      redirectUri={`${window.location.origin}/linkedin`}
      scope="r_liteprofile r_emailaddress"
      supportIE
      redirectPath="/linkedin"
      renderElement={(renderProps) => (
        <Button
          default
          block
          onClick={renderProps.onClick}
          disabled={renderProps.disabled || props.loading}
          size="large"
          style={{ fontSize: 14 }}
        >
          <span>{props.buttonText}</span>
          <img src={linkedinImg} style={{ marginLeft: 10, marginRight: 10 }} />
          <span>account</span>
        </Button>
      )}
    />
  )
}

export default LinkedInAuthButton
