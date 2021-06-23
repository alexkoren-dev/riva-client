import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Row, Col, Typography, Tag, Skeleton } from 'antd'
import CompensationHeader from './header'
import CompensationComments from '../comments'
import { totalCompensation, compensationString, kFormatter } from '@/utils'

const CompensationItemCard = ({ compensation }) => {
  const { userInfo } = useSelector((state) => state.auth)

  if (!compensation)
    return (
      <Card className="compensation-card" style={{ marginBottom: 30 }}>
        <Row gutter={[30, 30]} style={{ padding: '2% 4%' }}>
          <Skeleton active />
        </Row>
      </Card>
    )

  return (
    <Card
      className="compensation-card"
      style={{ padding: '30px 2% 2% 2%', marginBottom: 30 }}
    >
      <CompensationHeader
        likeCount={compensation.like.length}
        isLike={compensation.like.includes(userInfo.id)}
        commentsCount={compensation.comments.length}
        id={compensation.id}
      />
      <Row gutter={[30, 0]}>
        <Col span={24}>
          {compensation.company && compensation.company.logo && (
            <img src={compensation.company.logo} style={{ marginBottom: 20 }} />
          )}
          <Typography.Title level={2}>
            $
            {totalCompensation(compensation)
              ? kFormatter(totalCompensation(compensation))
              : '-'}
          </Typography.Title>
        </Col>
        <Col span={24} lg={12}>
          <div style={{ maxWidth: 415 }}>
            <p className="text-info">{compensationString(compensation)}</p>
          </div>
        </Col>
        <Col span={24} lg={12}>
          <p className="text-info">
            {compensation.location && compensation.location.name}
            <br />
            {compensation.level && `${compensation.level}, `}
            {compensation.jobTitle}
          </p>
        </Col>
        <Col span={24}>
          <div>
            {compensation.yearsOfExperience || compensation.yearsAtCompany ? (
              <Tag>
                {compensation.yearsOfExperience || '-'}/
                {compensation.yearsAtCompany || '-'}
              </Tag>
            ) : (
              ''
            )}
            {compensation.gender && <Tag>{compensation.gender}</Tag>}
            {compensation.needVisa && <Tag>{compensation.needVisa}</Tag>}
            {compensation.racial && <Tag>{compensation.racial}</Tag>}
          </div>
        </Col>
        <Col span={24} style={{ paddingTop: 25 }}>
          <CompensationComments
            data={compensation}
            key={compensation.comments}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default React.memo(CompensationItemCard)
