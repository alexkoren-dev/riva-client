import React, { useState } from 'react'
import { Card, Row, Col, Typography, Tag } from 'antd'
import { OfferReviewForm } from '../forms'
import CompensationHeader from './header'
import CompensationComments from '../comments'

const CompensationOfferCard = (data) => {
  return (
    <Card
      className="compensation-card bordered"
      style={{ padding: '40px 2% 2% 2%' }}
    >
      <CompensationHeader likeCount={45} commentsCount={3} />
      <Row gutter={[30, 30]}>
        <Col span={24} lg={12} className="border-right">
          <div style={{ maxWidth: 415 }}>
            <img
              src="//logo.clearbit.com/autodisk.com"
              style={{ marginBottom: 20 }}
            />
            <Typography.Title level={2}>$-</Typography.Title>
            <p className="text-info" style={{ marginBottom: 50 }}>
              $-K base | $-K bonus | $-K equity | $-K signing bonus | $-K
              relocation bonus
            </p>
            <p className="text-info">
              San Francisco, CA <br />
              L5, Senior Software Engineer
            </p>
            <div>
              <Tag>1/6</Tag>
              <Tag>US Citizied</Tag>
              <Tag>Female</Tag>
              <Tag>Asian</Tag>
            </div>
          </div>
        </Col>
        <Col span={24} lg={12}>
          <OfferReviewForm />
        </Col>
        <Col span={24}>
          <CompensationComments />
        </Col>
      </Row>
    </Card>
  )
}

export default CompensationOfferCard
