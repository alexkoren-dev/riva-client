import React, { useState, useMemo } from 'react'
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
import { publicApi } from '@/utils/request'

const LOCATION_SEARCH_API = 'https://api.levels.fyi/geo/autocompleteCity'

const LocationForm = ({ onNext, initialValues, loading }) => {
  const [form] = Form.useForm()
  const [options, setOptions] = useState([])
  const [suggestedCities, setSuggestedCities] = useState([])

  const onFinish = ({ location, isHybridRole }) => {
    const searched_cities = suggestedCities.filter((lo) => lo.name === location)
    onNext({
      location:
        searched_cities.length > 0
          ? { ...searched_cities[0], isHybridRole }
          : {
              name: location,
              isHybridRole
            }
    })
  }

  const onSearch = async (searchText) => {
    //TODO:  Replace an API with public one
    // try {
    //   const cities = await publicApi.get(
    //     `${LOCATION_SEARCH_API}?q=${searchText}`
    //   )
    //   setSuggestedCities(cities)
    //   setOptions(
    //     cities.map((data, i) => ({
    //       value: data.name,
    //       key: i,
    //       label: data.name
    //     }))
    //   )
    // } catch (e) {
    //   setOptions([])
    //   setSuggestedCities([])
    // }
  }

  useMemo(() => {
    if (initialValues && initialValues.countryId) {
      setSuggestedCities([initialValues])
    }
  }, [initialValues])

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
            >
              <AutoComplete options={options} onSearch={onSearch} autoFocus>
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
