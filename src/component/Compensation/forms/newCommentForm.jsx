import React from 'react'
import { Form, Button, Input } from 'antd'

const NewCommentForm = () => {
  const [form] = Form.useForm()

  const onFinish = () => {}

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="comment"
        label={'Comment'}
        required={false}
        style={{ marginBottom: 0 }}
        rules={[{ required: true, message: 'Please type your comment!' }]}
      >
        <Input.TextArea
          placeholder="Add your comment"
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
        <Button htmlType="submit" type="primary">
          Post
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewCommentForm
