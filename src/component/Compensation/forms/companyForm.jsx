import React, { useState, useEffect } from 'react'
import { Form, Typography, AutoComplete, Button, Input, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'
import { publicApi } from '@/utils/request'

const COMPANY_SEARCH_API =
  'https://autocomplete.clearbit.com/v1/companies/suggest'

const renderLabel = (data) => (
  <div className="company-auto-item">
    <span>
      <img src={data.logo} />
      <span>{data.name}</span>
    </span>
    <Typography.Text type="secondary">{data.domain}</Typography.Text>
  </div>
)

const CompanyForm = ({ onNext, initialValues = null }) => {
  const [form] = Form.useForm()
  const [options, setOptions] = useState([])
  const [suggestedCompanies, setSuggestedCompanies] = useState([])

  const onFinish = async ({ company }) => {
    const searched_company = suggestedCompanies.filter(
      (comp) => comp.name === company
    )
    onNext({
      company:
        searched_company.length > 0
          ? searched_company[0]
          : {
              name: company
            }
    })
  }

  const onSearch = async (searchText) => {
    try {
      const companies = await publicApi.get(
        `${COMPANY_SEARCH_API}?query=${searchText}`
      )
      setSuggestedCompanies(companies)
      setOptions(
        companies.map((data, i) => ({
          value: data.name,
          key: i,
          label: renderLabel(data)
        }))
      )
    } catch (e) {
      setOptions([])
      setSuggestedCompanies([])
    }
  }

  useEffect(() => {
    if (initialValues && initialValues.name) {
      onSearch(initialValues.name)
    }
  }, [initialValues])

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">1 ➔ </span>Name of the company?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ company: initialValues.name }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="company"
              label={'Company'}
              required={false}
              rules={[{ required: true }]}
            >
              <AutoComplete options={options} onSearch={onSearch}>
                <Input size="large" className="form-control" />
              </AutoComplete>
            </Form.Item>
          </Col>
        </Row>
        <div className="form__footer">
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

export default CompanyForm
