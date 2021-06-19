import React, { useState } from 'react'
import { Card, Row, Col, Typography, Tag } from 'antd'
import CompensationHeader from './header'
import CompensationComments from '../comments'

const CompensationItemCard = (data) => {
  return (
    <Card
      className="compensation-card"
      style={{ padding: '30px 2% 2% 2%', marginBottom: 30 }}
    >
      <CompensationHeader likeCount={45} commentsCount={3} />
      <Row gutter={[30, 0]}>
        <Col span={24}>
          <img
            src="//logo.clearbit.com/autodisk.com"
            style={{ marginBottom: 20 }}
          />
          <Typography.Title level={2}>$- 352K</Typography.Title>
        </Col>
        <Col span={24} lg={12}>
          <div style={{ maxWidth: 415 }}>
            <p className="text-info">
              $-K base | $-K bonus | $-K equity | $-K signing bonus | $-K
              relocation bonus
            </p>
          </div>
        </Col>
        <Col span={24} lg={12}>
          <p className="text-info">
            San Francisco, CA <br />
            L5, Senior Software Engineer
          </p>
        </Col>
        <Col span={24}>
          <div>
            <Tag>1/6</Tag>
            <Tag>US Citizied</Tag>
            <Tag>Female</Tag>
            <Tag>Asian</Tag>
          </div>
        </Col>
        <Col span={24} style={{ paddingTop: 25 }}>
          <CompensationComments />
        </Col>
      </Row>
    </Card>
  )
}

export default CompensationItemCard
