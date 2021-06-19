import React from 'react'
import { Form, Typography, Button, InputNumber, Col, Row } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const BaseSalaryForm = ({ onNext, initialValues }) => {
  const [form] = Form.useForm()

  const onFinish = ({ baseSalary }) => {
    onNext({ baseSalary })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">8 ➔ </span>Base Salary (Yearly)
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ baseSalary: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="baseSalary"
              label={'Base Salary'}
              required={false}
              rules={[{ required: true }]}
            >
              <InputNumber
                min={0}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                size="large"
                className="form-control"
                style={{ width: '100%' }}
              />
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

export default BaseSalaryForm
