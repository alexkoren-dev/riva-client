import React from 'react'
import { Form, Typography, Button, Select, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const VISA_OPTIONS = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' }
]

const NeedVisaForm = ({ onNext, initialValues }) => {
  const [form] = Form.useForm()

  const onFinish = ({ needVisa }) => {
    onNext({ needVisa })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">14 ➔ </span>Need Visa sponsorship?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ needVisa: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="needVisa"
              label={'Need Visa sponsorship'}
              required={false}
              rules={[{ required: true }]}
            >
              <Select size="large" className="no-border">
                {VISA_OPTIONS.map((co) => (
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

export default NeedVisaForm
