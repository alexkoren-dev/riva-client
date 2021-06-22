import React from 'react'
import { Form, Typography, Button, InputNumber, Row, Col, Select } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const UNIT_OPTIONS = [
  { label: 'Dollar', value: '$' },
  { label: 'Percent', value: '%' }
]

const TargetBonusForm = ({ onNext, initialValues, loading }) => {
  const [form] = Form.useForm()

  const onFinish = ({ targetBonus, unit }) => {
    onNext({
      targetBonus: {
        value: targetBonus,
        unit
      }
    })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">9 ➔ </span>On Target Bonus (Yearly)
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          targetBonus: initialValues.value,
          unit: initialValues.unit ? initialValues.unit : UNIT_OPTIONS[0].value
        }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row gutter="20">
          <Col span={18}>
            <Form.Item
              name="targetBonus"
              label={'Target Bonus'}
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
          <Col span={4}>
            <Form.Item
              name="unit"
              label={'Unit'}
              required={false}
              rules={[{ required: true }]}
            >
              <Select style={{ width: 120 }} size="large">
                {UNIT_OPTIONS.map((co) => (
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

export default TargetBonusForm
