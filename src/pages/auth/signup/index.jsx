import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Card, Col, Input, Row, Form, message, Typography } from 'antd'

import { COMMON_VALIDATE_MESSAGES } from '@/constants'
import LinkedInAuthButton from '@/component/LinkedinAuth'
import AuthActions from '@/services/auth'

import authPoster from '@/assets/images/authPoster.png'
import '../style.less'

const SignUp = (props) => {
  const dispatch = useDispatch()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      await dispatch(
        AuthActions.register({
          email: values.email,
          password: values.password,
          linkedInUrl: values.linkedin
        })
      )
      await dispatch(AuthActions.getCurrentUser())
      props.history.push('/')
      setLoading(false)
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
        setLoading(false)
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
                Welcome to Riva! We’re excited for you to be <br />
                here
              </Typography.Text>
              <div style={{ marginTop: 20 }}>
                <LinkedInAuthButton
                  onResponse={onResponse}
                  buttonText="Sign up With"
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
                name="signup"
                layout="vertical"
                onFinish={onFinish}
                validateMessages={COMMON_VALIDATE_MESSAGES}
                style={{ flex: 1 }}
              >
                <Row gutter="15">
                  <Col md={12}>
                    <Form.Item
                      name="email"
                      label={'Email'}
                      hasFeedback
                      rules={[{ required: true }, { type: 'email' }]}
                      style={{ marginBottom: 10 }}
                    >
                      <Input
                        placeholder="Email"
                        className="form-control"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item
                      name="linkedin"
                      label={'LinkedIn Profile'}
                      required={false}
                      hasFeedback
                      style={{ marginBottom: 10 }}
                    >
                      <Input
                        placeholder="LinkedIn Profile"
                        className="form-control"
                        suffix={
                          <Typography.Text
                            type="secondary"
                            style={{ fontSize: 12 }}
                          >
                            Optional
                          </Typography.Text>
                        }
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item
                      name="password"
                      label={'Password'}
                      required={false}
                      rules={[{ required: true }, { type: 'string', min: 6 }]}
                    >
                      <Input.Password
                        placeholder="Password"
                        className="form-control"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item
                      name="confirm"
                      label={'Confirm Password'}
                      required={false}
                      dependencies={['password']}
                      style={{ marginBottom: 10 }}
                      rules={[
                        { required: true },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve()
                            }
                            return Promise.reject(
                              new Error(
                                'The two passwords that you entered do not match!'
                              )
                            )
                          }
                        })
                      ]}
                    >
                      <Input.Password
                        placeholder="Confirm Password"
                        className="form-control"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>

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
                        Sign Up
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <p style={{ marginBottom: 0 }}>
                {`Already have an account? `}
                <Button type="link">
                  <NavLink to="/signin">Sign In</NavLink>
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default SignUp
