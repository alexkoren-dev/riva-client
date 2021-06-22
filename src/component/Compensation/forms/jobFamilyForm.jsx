import React from 'react'
import { Form, Typography, Button, Input, AutoComplete, Row, Col } from 'antd'
import { COMMON_VALIDATE_MESSAGES } from '@/constants'

const OPTIONS = [
  {
    label: 'Software Engineer',
    value: 'Software Engineer'
  },
  {
    label: 'Software Engineering Manager',
    value: 'Software Engineering Manager'
  },
  {
    label: 'Data Scientist',
    value: 'Data Scientist'
  },
  {
    label: 'Product Designer',
    value: 'Product Designer'
  },
  {
    label: 'Product Manager',
    value: 'Product Manager'
  },
  {
    label: 'Technical Program Manger',
    value: 'Technical Program Manger'
  },
  {
    label: 'Operations',
    options: [
      {
        label: 'Accountant',
        value: 'Accountant'
      },
      {
        label: 'Human Resources',
        value: 'Human Resources'
      },
      {
        label: 'Marketing',
        value: 'Marketing'
      },
      {
        label: 'Recruiter',
        value: 'Recruiter'
      },
      {
        label: 'Information Technologist',
        value: 'Information Technologist'
      }
    ]
  },
  {
    label: 'Other Engineering',
    options: [
      {
        label: 'Biomedical Engineer',
        value: 'Biomedical Engineer'
      },
      {
        label: 'Civil Engineer',
        value: 'Civil Engineer'
      },
      {
        label: 'Hardware Engineer',
        value: 'Hardware Engineer'
      },
      {
        label: 'Mechanical Engineer',
        value: 'Mechanical Engineer'
      },
      {
        label: 'Solution Architect',
        value: 'Solution Architect'
      }
    ]
  },
  {
    label: 'Business',
    options: [
      {
        label: 'Business Analyst',
        value: 'Business Analyst'
      },
      {
        label: 'Investment Banker',
        value: 'Investment Banker'
      },
      {
        label: 'Management Consultant',
        value: 'Management Consultant'
      }
    ]
  },
  {
    label: 'Other',
    options: [
      {
        label: 'Other',
        value: 'Other'
      }
    ]
  }
]

const JobFamilyForm = ({ onNext, initialValues, loading }) => {
  const [form] = Form.useForm()

  const onFinish = ({ jobFamily }) => {
    onNext({ jobFamily })
  }

  return (
    <div className="compensation-form">
      <Typography.Title level={3}>
        <span className="text-info">4 ➔ </span>Job Family?
      </Typography.Title>
      <Form
        form={form}
        style={{ flex: 1 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ jobFamily: initialValues }}
        validateMessages={COMMON_VALIDATE_MESSAGES}
      >
        <Row>
          <Col span={18}>
            <Form.Item
              name="jobFamily"
              label={'Job Family'}
              required={false}
              rules={[{ required: true }]}
            >
              <AutoComplete options={OPTIONS} autoFocus>
                <Input size="large" className="form-control" />
              </AutoComplete>
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

export default JobFamilyForm
