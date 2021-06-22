import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Card, Row, Col, Typography, Progress, Skeleton } from 'antd'
import { totalCompensation, compensationString, kFormatter } from '@/utils'
import actions from '@/services/compensation'

const CompensationViewCard = (data) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const mountedRef = useRef(true)
  const { userCompensation, userCompensationPercentile } = useSelector(
    (state) => state.compensation
  )

  const getCompensationPercentile = useCallback(async () => {
    try {
      setLoading(true)
      await dispatch(actions.getUserCompensationPercentile())
      if (!mountedRef.current) return null
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }, [userCompensationPercentile])

  useEffect(() => {
    if (!userCompensationPercentile) {
      getCompensationPercentile()
      return () => {
        mountedRef.current = false
      }
    }
  }, [])

  if (loading)
    return (
      <Card className="compensation-card">
        <Row gutter={[30, 30]} style={{ padding: '2% 4%' }}>
          <Skeleton active />
        </Row>
      </Card>
    )

  return (
    <Card className="compensation-card">
      <Row gutter={[30, 30]} style={{ padding: '2% 4%' }}>
        <Col span={24} lg={13} className="border-right">
          {userCompensation.company && userCompensation.company.logo && (
            <img
              src={userCompensation.company.logo}
              style={{ marginBottom: 20 }}
            />
          )}
          <Typography.Title level={1}>
            $
            {totalCompensation(userCompensation)
              ? kFormatter(totalCompensation(userCompensation))
              : '-'}
          </Typography.Title>
          <p className="text-info" style={{ marginBottom: 80 }}>
            {compensationString(userCompensation)}
          </p>
          <NavLink to="/compensation" className="text-info">
            {userCompensation && userCompensation.id
              ? 'Update your compensation ➔'
              : 'Add your compensation ➔'}
          </NavLink>
        </Col>
        <Col
          span={24}
          lg={11}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div className="compensation-progress">
            <Progress
              type="circle"
              percent={userCompensationPercentile || 0}
              format={(percent) => `${percent}%`}
              strokeWidth={7}
              width={200}
            />
            <p className="text-info">
              You are in the {userCompensationPercentile || 0}th percentile for
              compensation
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default CompensationViewCard
