import React from 'react'
import { Form, Typography, Button, Input, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const LevelForm = ({ onNext, onPrev = null, initialValues }) => {
  const [form] = Form.useForm()

  const onFinish = ({ level }) => {
    onNext({ level })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">2 ➔ </span>What is your level?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ level: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="level"
              label={'Level'}
              required={false}
              rules={[{ required: true }]}
            >
              <Input size="large" className="form-control" />
            </Form.Item>
          </Col>
        </Row>
        <div className="form__footer">
          {onPrev && (
            <Form.Item shouldUpdate={true} style={{ marginBottom: 0 }}>
              <Button type="default" size="large" onClick={onPrev}>
                Back
              </Button>
            </Form.Item>
          )}
          <Form.Item shouldUpdate={true} style={{ marginBottom: 0 }}>
            <Button htmlType="submit" type="primary" size="large">
              OK
            </Button>
          </Form.Item>
          <p style={{ marginBottom: 0 }}>Or press Enter</p>
        </div>
      </Form>
    </div>
  )
}

export default LevelForm
