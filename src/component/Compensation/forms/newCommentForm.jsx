import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Input } from 'antd'
import actions from '@/services/compensation'
import authActions from '@/services/auth'
import { getRandomId } from '@/utils'

const NewCommentForm = ({ compensationId }) => {
  const dispatch = useDispatch()
  const { id, is_authed } = useSelector((state) => state.auth)
  const { userCompensation } = useSelector((state) => state.compensation)
  const [loading, setLoading] = useState(false)

  const [form] = Form.useForm()

  const onFinish = async (values) => {
    if (is_authed) {
      const commentData = {
        comment: values.comment,
        userId: id,
        company:
          (userCompensation.company && userCompensation.company.name) || ''
      }

      try {
        setLoading(true)
        await dispatch(actions.postComment(compensationId, commentData))
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    } else {
      dispatch(authActions.openLoginModal())
    }
  }

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
          id={getRandomId()}
          placeholder="Add your comment"
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
        <Button htmlType="submit" type="primary" loading={loading}>
          Post
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewCommentForm
