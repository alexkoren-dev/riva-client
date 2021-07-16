import React from 'react'
import { Form, Typography, Button, Input, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'
import './style.less'

const NegotiationQuestion = ({
  visible,
  onNext,
  initialValue,
  loading,
  question
}) => {
  const [form] = Form.useForm()

  const onFinish = ({ value }) => {
    onNext(question.fieldName, value)
  }

  if (!visible) return null

  return (
    <div className="negotiation-ask-form">
      <Typography.Text className="negotiation-ask-title">
        <span className="text-info">{question.no && `${question.no} ➔ `} </span>
        <span dangerouslySetInnerHTML={{ __html: question.title }}></span>
      </Typography.Text>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ [question.fieldName]: initialValue }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="value"
              label={''}
              required={false}
              rules={[{ required: true, message: 'Please type your answer!' }]}
            >
              <Input size="large" className="form-control" autoFocus />
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

export default NegotiationQuestion
