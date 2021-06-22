import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Card, Col, Input, Row, Form, Typography } from 'antd'

import { COMMON_VALIDATE_MESSAGES } from '@/constants'
import LinkedInAuthButton from '@/component/LinkedinAuth'
import AuthActions from '@/services/auth'

import authPoster from '@/assets/images/authPoster.png'
import '../style.less'

const Login = (props) => {
  const dispatch = useDispatch()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      await dispatch(
        AuthActions.login({
          email: values.email,
          password: values.password
        })
      )
      await dispatch(AuthActions.getCurrentUser())
      props.history.push('/news-feed')
    } catch (err) {
      setLoading(false)
    }
  }

  const onResponse = async (authResult) => {
    try {
      if (authResult['code']) {
        setLoading(true)
        await dispatch(AuthActions.linkedinAuthentication(authResult['code']))
        await dispatch(AuthActions.getCurrentUser())
        props.history.push('/news-feed')
      } else {
        throw new Error(authResult)
      }
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  return (
    <div className="auth-view">
      <Card bordered={false} className="auth-view__card">
        <Row>
          <Col md={10} span={0}>
            <div className="auth-view__left">
              <img src={authPoster} />
            </div>
          </Col>
          <Col md={14} span={24}>
            <div className="auth-view__form">
              <Typography.Title level={1}>Hello 👋</Typography.Title>
              <Typography.Text type="secondary">
                Welcome to Riva! We’re excited to welcome <br />
                you back
              </Typography.Text>
              <div style={{ marginTop: 20 }}>
                <LinkedInAuthButton
                  onResponse={onResponse}
                  buttonText="Sign in With"
                  loading={loading}
                />
              </div>
              <div className="divider">
                <hr />
                <span>or</span>
                <hr />
              </div>
              <Form
                form={form}
                style={{ flex: 1 }}
                name="Login"
                layout="vertical"
                onFinish={onFinish}
                validateMessages={COMMON_VALIDATE_MESSAGES}
              >
                <Form.Item
                  name="email"
                  label={'Email'}
                  required={false}
                  rules={[{ required: true }, { type: 'email' }]}
                  style={{ marginBottom: 10 }}
                >
                  <Input
                    placeholder="Email"
                    className="form-control"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label={'Password'}
                  required={false}
                  rules={[{ required: true }]}
                  style={{ marginBottom: 10 }}
                >
                  <Input.Password
                    placeholder="Password"
                    className="form-control"
                    size="large"
                  />
                </Form.Item>
                <p style={{ marginBottom: 40 }}>
                  <NavLink to={'/auth/forgot-pwd'} className="redirect-link">
                    Forgot your password?
                  </NavLink>
                </p>
                <Row gutter="25" className="form__footer">
                  <Col span={24}>
                    <Form.Item shouldUpdate={true}>
                      <Button
                        htmlType="submit"
                        type="primary"
                        block
                        loading={loading}
                        size="large"
                      >
                        Log In
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <p style={{ marginBottom: 0 }}>
                {`Don't have an account? `}
                <Button type="link">
                  <NavLink to="/signup">Sign Up</NavLink>
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Login
