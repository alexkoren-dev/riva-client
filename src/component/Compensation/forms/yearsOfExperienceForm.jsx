import React from 'react'
import { Form, Typography, Button, InputNumber, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const YearsOfExperience = ({ onNext, initialValues, loading }) => {
  const [form] = Form.useForm()

  const onFinish = ({ yearsOfExperience }) => {
    onNext({ yearsOfExperience })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">5 ➔ </span>Years of experience total?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ yearsOfExperience: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="yearsOfExperience"
              label={'Years of Experience'}
              required={false}
              rules={[{ required: true }]}
            >
              <InputNumber
                min={0}
                max={100}
                autoFocus
                size="large"
                className="form-control"
                style={{ width: '100%' }}
              />
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

export default YearsOfExperience
