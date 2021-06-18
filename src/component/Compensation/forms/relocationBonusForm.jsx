import React from 'react'
import { Form, Typography, Button, InputNumber, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const RelocationBonusForm = ({ onNext, onPrev = null, initialValues }) => {
  const [form] = Form.useForm()

  const onFinish = ({ relocationBonus }) => {
    onNext({ relocationBonus })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">12 ➔ </span>Relocation Bonus?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ relocationBonus: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="relocationBonus"
              label={'Relocation Bonus'}
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

export default RelocationBonusForm
