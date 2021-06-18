import React from 'react'
import { Form, Typography, Button, Input, AutoComplete, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const JobFamilyForm = ({ onNext, onPrev = null, initialValues }) => {
  const [form] = Form.useForm()

  const onFinish = ({ jobFamily }) => {
    onNext({ jobFamily })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">4 ➔ </span>Job Family?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ jobFamily: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="jobFamily"
              label={'Job Family'}
              required={false}
              rules={[{ required: true }]}
            >
              <AutoComplete>
                <Input size="large" className="form-control" />
              </AutoComplete>
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

export default JobFamilyForm
