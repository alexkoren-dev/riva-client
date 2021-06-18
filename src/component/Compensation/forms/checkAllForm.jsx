import React, { useState } from 'react'
import { Form, Typography, Button, Checkbox, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const CheckboxGroup = Checkbox.Group

const plainOptions = ['Queer', 'Lesbian', 'Veteran', 'Immigrant']

const CheckAllForm = ({ onNext, onPrev = null, initialValues }) => {
  const [form] = Form.useForm()
  const [checkedList, setCheckedList] = useState(
    initialValues ? initialValues : []
  )

  const onFinish = () => {
    onNext({ checkAll: checkedList })
  }

  const onChange = (list) => {
    setCheckedList(list)
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">16 ➔ </span>Check all that apply
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              shouldUpdate={true}
              name="checkAll"
              style={{ marginTop: 10 }}
            >
              <div className="checkbox-wrapper">
                <CheckboxGroup
                  options={plainOptions}
                  value={checkedList}
                  onChange={onChange}
                />
              </div>
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

export default CheckAllForm
