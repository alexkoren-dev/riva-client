import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Card, Col, Input, Row, Form, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import { COMMON_VALIDATE_MESSAGES } from '@/constants'
import AuthActions from '@/services/auth'

import authPoster from '@/assets/images/authPoster.png'
import '../style.less'

const ForgotPwd = () => {
  const dispatch = useDispatch()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      await dispatch(
        AuthActions.resetPwdRequest({
          email: values.email
        })
      )
      setLoading(false)
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
              <Typography.Title level={1}>Password recovery</Typography.Title>
              <Typography.Text type="secondary">
                Enter in your email to reset your password
              </Typography.Text>
              <Form
                form={form}
                name="forgotPwd"
                layout="vertical"
                onFinish={onFinish}
                validateMessages={COMMON_VALIDATE_MESSAGES}
              >
                <Form.Item
                  name="email"
                  label={'Email'}
                  required={false}
                  rules={[{ required: true }, { type: 'email' }]}
                >
                  <Input
                    placeholder="Email"
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
                        Send
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

export default ForgotPwd
