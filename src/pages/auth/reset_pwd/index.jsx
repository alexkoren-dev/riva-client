import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Card, Col, Input, Row, Form, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import { COMMON_VALIDATE_MESSAGES } from '@/constants'
import AuthActions from '@/services/auth'

import authPoster from '@/assets/images/authPoster.png'
import '../style.less'

const ResetPwd = (props) => {
  const dispatch = useDispatch()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const token = new URLSearchParams(props.location.search).get('token')

  const onFinish = async (values) => {
    setLoading(true)
    try {
      await dispatch(
        AuthActions.changePassword({ password: values.password }, token)
      )
      setLoading(false)
      props.history.push('/signin')
    } catch (err) {
      setLoading(false)
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
              <Typography.Title level={1}>Password reset</Typography.Title>
              <Typography.Text type="secondary">
                Enter in a new password to reset your
                <br /> password
              </Typography.Text>
              <Form
                form={form}
                name="forgotPwd"
                layout="vertical"
                onFinish={onFinish}
                validateMessages={COMMON_VALIDATE_MESSAGES}
              >
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
                <Form.Item
                  name="confirm"
                  label={'Confirm Password'}
                  required={false}
                  dependencies={['password']}
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
                <Row gutter="25" style={{ marginBottom: 20 }}>
                  <Col span={24}>
                    <Form.Item shouldUpdate={true}>
                      <Button
                        htmlType="submit"
                        type="primary"
                        block
                        loading={loading}
                        size="large"
                      >
                        Update Password
                      </Button>
                      <p style={{ marginBottom: 0, marginTop: 20 }}>
                        <NavLink to="/signin">
                          <ArrowLeftOutlined /> Back to Login
                        </NavLink>
                      </p>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default ResetPwd
