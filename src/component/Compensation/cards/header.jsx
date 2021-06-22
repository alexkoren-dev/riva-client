import React from 'react'
import { useDispatch } from 'react-redux'
import { HeartOutlined, HeartFilled, MessageOutlined } from '@ant-design/icons'
import actions from '@/services/compensation'

const CompensationHeader = ({ likeCount, isLike, commentsCount, id }) => {
  const dispatch = useDispatch()

  const likeOrDislike = async (like) => {
    dispatch(await actions.likeOrDislike(id, { like }))
  }

  return (
    <div className="compensation-header">
      <span className="like-dislike" onClick={() => likeOrDislike(!isLike)}>
        {isLike ? (
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
