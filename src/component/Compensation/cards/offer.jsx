import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Row, Col, Typography, Tag, Skeleton } from 'antd'
import { OfferReviewForm } from '../forms'
import CompensationHeader from './header'
import CompensationComments from '../comments'
import { totalCompensation, compensationString, kFormatter } from '@/utils'
import actions from '@/services/compensation'
import authActions from '@/services/auth'

const CompensationOfferCard = () => {
  const dispatch = useDispatch()
  const mountedRef = useRef(true)

  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [offer, setOffer] = useState(null)

  const { userInfo, is_authed } = useSelector((state) => state.auth)
  const { compensationOffers, allCompensations } = useSelector(
    (state) => state.compensation
  )

  const getCompensationOffer = useCallback(async () => {
    if (userInfo && is_authed) {
      try {
        setLoading(true)
        await dispatch(actions.getCompensationOffer())
        if (!mountedRef.current) return null
        setLoading(false)
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    setOffer(
      userInfo && is_authed
        ? compensationOffers.length > 0
          ? compensationOffers[0]
          : null
        : allCompensations.length > 0
        ? allCompensations[0]
        : null
    )
  }, [compensationOffers, allCompensations])

  const giveOfferFeedback = async (formdata) => {
    if (userInfo && is_authed) {
      try {
        setSubmitting(true)
        await dispatch(actions.giveOfferFeedback(offer.id, formdata))
        setSubmitting(false)
      } catch (e) {
        console.log(e)
        setSubmitting(false)
      }
    } else {
      dispatch(authActions.openLoginModal())
    }
  }

  useEffect(() => {
    if (compensationOffers.length === 0) {
      getCompensationOffer()
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

  if (!offer)
    return <Typography.Text type="secondary">No data found</Typography.Text>

  const compensation = offer

  return (
    <Card
      className="compensation-card bordered"
      style={{ padding: '40px 2% 2% 2%' }}
    >
      <CompensationHeader
        likeCount={compensation.like.length}
        isLike={compensation.like.includes(userInfo ? userInfo.id : null)}
        commentsCount={compensation.comments.length}
        id={compensation.id}
      />
      <Row gutter={[30, 30]}>
        <Col span={24} lg={12} className="border-right">
          <div style={{ maxWidth: 415 }}>
            {compensation.company &&
              (compensation.company.logo ? (
                <img
                  src={compensation.company.logo}
                  style={{ marginBottom: 20 }}
                />
              ) : (
                <Typography.Title level={2} style={{ color: '#AEB9D0' }}>
                  {compensation.company.name}
                </Typography.Title>
              ))}
            <Typography.Title level={2}>
              $
              {totalCompensation(compensation)
                ? kFormatter(totalCompensation(compensation))
                : '-'}
            </Typography.Title>
            <p className="text-info" style={{ marginBottom: 50 }}>
              {compensationString(compensation)}
            </p>
            <p className="text-info">
              {compensation.location && compensation.location.name}
              <br />
              {compensation.level && `${compensation.level}, `}
              {compensation.jobTitle}
            </p>
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
          </div>
        </Col>
        <Col
          span={24}
          lg={12}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <OfferReviewForm
            giveOfferFeedback={giveOfferFeedback}
            loading={submitting}
          />
        </Col>
        <Col span={24}>
          <CompensationComments data={compensation} />
        </Col>
      </Row>
    </Card>
  )
}

export default CompensationOfferCard
