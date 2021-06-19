import React from 'react'
import { Form, Typography, Button, InputNumber, Row, Col, Select } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const UNIT_OPTIONS = [
  { label: 'Dollars', value: 'dollar' },
  { label: 'Shares', value: 'shares' }
]

const DURATION_OPTIONS = [
  { label: '1 years', value: 1 },
  { label: '2 years', value: 2 },
  { label: '3 years', value: 3 },
  { label: '4 years', value: 4 },
  { label: '5 years', value: 5 },
  { label: '6+ years', value: 6 }
]

const EquityForm = ({ onNext, initialValues }) => {
  const [form] = Form.useForm()

  const onFinish = ({ equity, unit, duration }) => {
    onNext({
      equity: {
        value: equity,
        unit,
        duration
      }
    })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">10 ➔ </span>Equity
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          equity: initialValues.value,
          unit: initialValues.unit ? initialValues.unit : UNIT_OPTIONS[0].value,
          duration: initialValues.duration
            ? initialValues.duration
            : DURATION_OPTIONS[0].value
        }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row gutter="20">
          <Col span={18}>
            <Form.Item
              name="equity"
              label={'Equity'}
              required={false}
              rules={[{ required: true }]}
            >
              <InputNumber
                min={0}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                size="large"
                className="form-control"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Row gutter="10">
              <Col span={12}>
                <Form.Item
                  name="unit"
                  label={'Unit'}
                  required={false}
                  rules={[{ required: true }]}
                  style={{ marginBottom: 0 }}
                >
                  <Select size="large">
                    {UNIT_OPTIONS.map((co) => (
                      <Select.Option value={co.value} key={co.value}>
                        {co.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="duration"
                  label={'Duration'}
                  required={false}
                  rules={[{ required: true }]}
                  style={{ marginBottom: 0 }}
                >
                  <Select size="large">
                    {DURATION_OPTIONS.map((co) => (
                      <Select.Option value={co.value} key={co.value}>
                        {co.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
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

export default EquityForm
