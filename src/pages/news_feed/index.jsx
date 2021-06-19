import React from 'react'
import { Typography } from 'antd'
import {
  CompensationViewCard,
  CompensationOfferCard,
  CompensationList
} from '@/component/Compensation'
import './style.less'

const NewsFeed = () => {
  return (
    <div className="news-feed">
      <CompensationViewCard />

      <>
        <Typography.Title level={2} style={{ marginTop: 90, marginBottom: 30 }}>
          Review an offer for good karma 😊
        </Typography.Title>
        <CompensationOfferCard />
      </>

      <>
        <Typography.Title level={2} style={{ marginTop: 90, marginBottom: 5 }}>
          Your news feed 🎉
        </Typography.Title>
        <Typography.Text
          type="secondary"
          style={{ display: 'block', fontSize: 18 }}
        >
          Congratulate these folks on their new offers
        </Typography.Text>
        <CompensationList />
      </>
    </div>
  )
}

export default NewsFeed
