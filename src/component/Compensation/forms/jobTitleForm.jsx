import React from 'react'
import { Form, Typography, Button, Input, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const JobTitleForm = ({ onNext, initialValues, loading }) => {
  const [form] = Form.useForm()

  const onFinish = ({ jobTitle }) => {
    onNext({ jobTitle })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">3 ➔ </span>Job Title?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ jobTitle: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="jobTitle"
              label={'Job title'}
              required={false}
              rules={[{ required: true }]}
            >
              <Input size="large" className="form-control" />
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

export default JobTitleForm
