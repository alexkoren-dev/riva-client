import React, { useState } from 'react'
import { Card, Row, Col, Typography, Progress, Button } from 'antd'
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
} from '../forms'

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
          <CurrentForm onNext={onNext} initialValues={getInitialValues()} />
        </Col>
        <Col span={24}>
          <div className="compensation-card__footer">
            {step > 0 && (
              <Button type="default" className="btn-back" onClick={onPrev}>
                🠔 Back
              </Button>
            )}
            <div className="inline-progress">
              <Progress
                strokeLinecap="square"
                percent={Math.ceil((100 / 16) * step)}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default CompensationCreateCard
