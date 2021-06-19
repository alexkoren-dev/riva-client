import React, { useState } from 'react'
import { HeartOutlined, HeartFilled, MessageOutlined } from '@ant-design/icons'

const CompensationHeader = ({ likeCount, commentsCount }) => {
  const [liked, setLiked] = useState(false)

  return (
    <div className="compensation-header">
      <span className="like-dislike" onClick={() => setLiked(!liked)}>
        {liked ? (
          <HeartFilled style={{ color: '#ff4d4f', fontSize: 17 }} />
        ) : (
          <HeartOutlined style={{ color: '#D0CFD4', fontSize: 17 }} />
        )}
        {likeCount}
      </span>
      <span>
        <MessageOutlined style={{ color: '#D0CFD4', fontSize: 15 }} />{' '}
        {commentsCount}
      </span>
    </div>
  )
}

export default CompensationHeader
