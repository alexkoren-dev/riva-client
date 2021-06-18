import React from 'react'
import {
  Form,
  Typography,
  Button,
  Input,
  AutoComplete,
  Checkbox,
  Row,
  Col
} from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const LocationForm = ({ onNext, onPrev = null, initialValues }) => {
  const [form] = Form.useForm()

  const onFinish = ({ location, isHybridRole }) => {
    onNext({ location: { location, isHybridRole } })
  }

  console.log(initialValues)
  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">7 ➔ </span>Location or Full Remote?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          location: initialValues.location,
          isHybridRole: initialValues.isHybridRole
        }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="location"
              label={'Location'}
              required={false}
              rules={[{ required: true }]}
            >
              <AutoComplete>
                <Input size="large" className="form-control" />
              </AutoComplete>
            </Form.Item>
            <Form.Item
              shouldUpdate={true}
              name="isHybridRole"
              valuePropName="checked"
            >
              <div className="checkbox-wrapper">
                <Checkbox defaultChecked={initialValues.isHybridRole}>
                  This is a hybrid role
                </Checkbox>
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

export default LocationForm
