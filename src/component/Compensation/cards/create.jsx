import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Card, Row, Col, Typography, Progress, Button, Result } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
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
import actions from '@/services/compensation'
import {
  isObjectEquivalent,
  totalCompensation,
  compensationString,
  kFormatter
} from '@/utils'

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

const CompensationCreateCard = () => {
  const dispatch = useDispatch()
  const { userCompensation } = useSelector((state) => state.compensation)
  const [loading, setLoading] = useState(false)
  const [compensationData, setCompensationData] = useState({
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
    needVisa: '',
    racial: '',
    checkAll: [],
    ...userCompensation
  })
  const [step, setStep] = useState(0)

  const onNext = async (newData) => {
    if (step < 16) {
      setLoading(true)

      try {
        const newCompensation = { ...compensationData, ...newData }
        const res = isObjectEquivalent(newCompensation, compensationData)
          ? {}
          : await dispatch(
              step === 0 && !compensationData.id
                ? actions.createCompensation({
                    ...newCompensation,
                    total: totalCompensation(newCompensation)
                  })
                : actions.updateCompensation({
                    ...newCompensation,
                    total: totalCompensation(newCompensation)
                  })
            )

        setLoading(false)
        setStep(step + 1)
        setCompensationData({ ...newCompensation, ...res })
      } catch (err) {
        setLoading(false)
      }
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
            <img
              src={compensationData.company.logo}
              style={{ marginBottom: 20 }}
            />
          )}
          <Typography.Title level={1}>
            $
            {totalCompensation(compensationData)
              ? kFormatter(totalCompensation(compensationData))
              : '-'}
          </Typography.Title>
          <p className="text-info" style={{ maxWidth: 400, marginBottom: 50 }}>
            {compensationString(compensationData)}
          </p>
          {step === 16 ? (
            <Result
              status="success"
              title="Your compensation is completed!"
              extra={[
                <NavLink to={'/news-feed'} className="redirect-link" key="feed">
                  <Button type="primary">Go News Feed</Button>
                </NavLink>
              ]}
            />
          ) : (
            <CurrentForm
              onNext={onNext}
              initialValues={getInitialValues()}
              loading={loading}
            />
          )}
        </Col>
        <Col span={24}>
          <div className="compensation-card__footer">
            {step > 0 && (
              <Button type="default" className="btn-back" onClick={onPrev}>
                <ArrowLeftOutlined /> Back
              </Button>
            )}
            {step < 16 && (
              <div className="inline-progress">
                <Progress
                  strokeLinecap="square"
                  percent={Math.ceil((100 / 16) * step)}
                />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default CompensationCreateCard
