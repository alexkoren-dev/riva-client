import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Row, Col, Typography, Progress } from 'antd'

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

export default CompensationViewCard
