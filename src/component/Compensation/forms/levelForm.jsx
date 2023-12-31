import React from 'react'
import { Form, Typography, Button, Input, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const LevelForm = ({ onNext, initialValues, loading }) => {
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
              <Input size="large" className="form-control" autoFocus />
            </Form.Item>
          </Col>
        </Row>
        <div className="form__footer">
          <Form.Item shouldUpdate={true} style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              loading={loading}
            >
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
