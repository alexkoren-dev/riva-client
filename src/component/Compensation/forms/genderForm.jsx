import React from 'react'
import { Form, Typography, Button, Select, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const GENDER_OPTIONS = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Non-binary', value: 'Non-binary' },
  { label: 'Transgender', value: 'Transgender' },
  { label: 'Intersex', value: 'Intersex' },
  { label: 'Other', value: 'Other' },
  { label: 'I prefer not to say', value: 'I prefer not to say' }
]

const GenderForm = ({ onNext, initialValues, loading }) => {
  const [form] = Form.useForm()

  const onFinish = ({ gender }) => {
    onNext({ gender })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">13 ➔ </span>Gender
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ gender: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="gender"
              label={'Gender'}
              required={false}
              rules={[{ required: true }]}
            >
              <Select size="large" className="no-border" autoFocus>
                {GENDER_OPTIONS.map((co) => (
                  <Select.Option value={co.value} key={co.value}>
                    {co.label}
                  </Select.Option>
                ))}
              </Select>
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

export default GenderForm
