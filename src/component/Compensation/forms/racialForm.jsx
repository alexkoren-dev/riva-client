import React from 'react'
import { Form, Typography, Button, Select, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const RACIAL_OPTIONS = [
  {
    label: 'American Indian or Alaska Native',
    value: 'American Indian or Alaska Native'
  },
  { label: 'Asian', value: 'Asian' },
  { label: 'Black or African American', value: 'Black or African American' },
  { label: 'Hispanic or Latino', value: 'Hispanic or Latino' },
  {
    label: 'Native Hawaiian or Other Pacific Islander',
    value: 'Native Hawaiian or Other Pacific Islander'
  },
  { label: 'White', value: 'White' }
]

const RacialForm = ({ onNext, initialValues, loading }) => {
  const [form] = Form.useForm()

  const onFinish = ({ racial }) => {
    onNext({ racial })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">15 ➔ </span>Racial and Ethnic Categories
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ racial: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="racial"
              label={'Racial and Ethnic Categories'}
              required={false}
              rules={[{ required: true }]}
            >
              <Select size="large" className="no-border">
                {RACIAL_OPTIONS.map((co) => (
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

export default RacialForm
