import React, { useState } from 'react'
import { Form, Button, Input, Rate } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'
import { formatNumber } from '@/utils'

const OfferReviewForm = () => {
  const [form] = Form.useForm()
  let currentValue = ''

  const onFinish = (values) => {
    console.log(values)
  }

  const onChange = (e) => {
    const value = e.target.value.replace(/,/g, '')
    const reg = /^-?\d*(\.\d*)?$/

    if ((!isNaN(value) && reg.test(value)) || value === '') {
      currentValue = formatNumber(value)
      form.setFieldsValue({
        fairCompensation: formatNumber(value)
      })
    } else {
      form.setFieldsValue({
        fairCompensation: currentValue
      })
    }
  }

  return (
    <div className="offer-review-form">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <p className="text-info" style={{ marginBottom: 0 }}>
          How would you rate this offer overall?
        </p>
        <Form.Item
          name="rate"
          label={'Rate'}
          required={false}
          rules={[{ required: true, message: 'Please rate this offer.' }]}
        >
          <Rate style={{ fontSize: 35 }} />
        </Form.Item>

        <p className="text-info" style={{ marginBottom: 5 }}>
          What do you think would be a fair total <br />
          compensation for this role?
        </p>
        <Form.Item
          name="fairCompensation"
          label={'Fair Compensation'}
          required={false}
          rules={[
            { required: true, message: 'Please enter compensation value.' }
          ]}
          style={{ marginBottom: 15 }}
        >
          <Input
            min={0}
            maxLength={25}
            addonBefore="$"
            onChange={onChange}
            size="large"
            style={{ maxWidth: 325 }}
            className="form-control"
          />
        </Form.Item>
        <Form.Item shouldUpdate={true} style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit"
            type="primary"
            size="middle"
            style={{ minWidth: 165 }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default OfferReviewForm
