import React from 'react'
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import {
  Form,
  Typography,
  Button,
  Input,
  Checkbox,
  AutoComplete,
  Row,
  Col,
} from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const LocationForm = ({ onNext, initialValues, loading }) => {
  const [form] = Form.useForm()

  const {
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = useGoogle({
    apiKey: process.env.GOOGLE_MAP_API,
    options: {
      types: ["(regions)"]
    },
  });

  const onFinish = ({ location, isHybridRole }) => {
    setTimeout(function() {
      onNext({location: {name: location, isHybridRole}})
    }, 500)
  }

  const getPlaceOptions = () => {
    if(isPlacePredictionsLoading) return []

    return placePredictions.map((item, i) => ({
      value: item.description,
      key: i,
      label: item.description
    }))
  }

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
          location: initialValues.name,
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
              style={{marginBottom: 10}}
            >
              <AutoComplete options={getPlaceOptions()} onSearch={(val) => getPlacePredictions({input: val})} autoFocus>
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

export default LocationForm
