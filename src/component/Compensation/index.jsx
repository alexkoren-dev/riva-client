import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Row, Col, Typography, Progress } from 'antd'
import {
  CompanyForm,
  LevelForm,
  JobTitleForm,
  JobFamilyForm,
  YearsOfExperienceForm,
  YearsAtCompanyForm,
  LocationForm,
  BaseSalaryForm,
  TargetBonusForm,
  EquityForm,
  SiningBonusForm,
  RelocationBonusForm,
  GenderForm,
  NeedVisaForm,
  RacialForm,
  CheckAllForm
} from './forms'

import './style.less'

const CompensationViewCard = (data) => {
  return (
    <Card className="compensation-card">
      <Row gutter={[30, 30]} style={{ padding: '2% 4%' }}>
        <Col span={24} lg={13} className="border-right">
          <img src="//logo.clearbit.com/autodisk.com" />
          <Typography.Title level={1} style={{ paddingTop: 20 }}>
            $-
          </Typography.Title>
          <p className="text-info" style={{ marginBottom: 80 }}>
            $-K base | $-K bonus | $-K equity | $-K signing bonus | $-K
            relocation bonus
          </p>
          <NavLink to="/compensation" className="text-info">
            Add your compensation ➔
          </NavLink>
        </Col>
        <Col span={24} lg={11}>
          <div className="compensation-progress">
            <Progress type="circle" percent={0} width={200} />
            <p className="text-info">
              You are in the 0th percentile for compensation
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

const Forms = [
  CompanyForm,
  LevelForm,
  JobTitleForm,
  JobFamilyForm,
  YearsOfExperienceForm,
  YearsAtCompanyForm,
  LocationForm,
  BaseSalaryForm,
  TargetBonusForm,
  EquityForm,
  SiningBonusForm,
  RelocationBonusForm,
  GenderForm,
  NeedVisaForm,
  RacialForm,
  CheckAllForm
]

const CompensationCreateCard = ({ data = null }) => {
  const [compensationData, setCompensationData] = useState(
    data
      ? data
      : {
          company: {},
          level: '',
          jobTitle: '',
          jobFamily: '',
          yearsOfExperience: null,
          yearsAtCompany: null,
          location: {},
          baseSalary: null,
          targetBonus: {},
          equity: {},
          signingBonus: null,
          relocationBonus: null,
          gender: '',
          needVisa: false,
          racial: '',
          checkAll: []
        }
  )
  const [step, setStep] = useState(0)

  const onNext = (newData) => {
    if (step >= 15) {
      console.log({ ...compensationData, ...newData })
    }

    if (step < 16) {
      setStep(step + 1)
      setCompensationData({ ...compensationData, ...newData })
    }
  }

  const onPrev = () => {
    setStep(step - 1)
  }

  const getInitialValues = () => {
    return compensationData[Object.keys(compensationData)[step]]
  }

  const CurrentForm = step === 16 ? Forms[15] : Forms[step]

  return (
    <Card className="compensation-card">
      <Row gutter={[30, 30]} style={{ padding: '2% 4%' }}>
        <Col span={24}>
          {compensationData.company.logo && (
            <img src={compensationData.company.logo} />
          )}
          <Typography.Title level={1} style={{ paddingTop: 20 }}>
            $-
          </Typography.Title>
          <p className="text-info" style={{ maxWidth: 400, marginBottom: 50 }}>
            $-K base | $-K bonus | $-K equity | $-K signing bonus | $-K
            relocation bonus
          </p>
          <CurrentForm
            onNext={onNext}
            onPrev={step > 0 ? onPrev : null}
            initialValues={getInitialValues()}
          />
        </Col>
        <div className="inline-progress">
          <Progress
            strokeLinecap="square"
            percent={Math.ceil((100 / 16) * step)}
          />
        </div>
      </Row>
    </Card>
  )
}

export { CompensationViewCard, CompensationCreateCard }
