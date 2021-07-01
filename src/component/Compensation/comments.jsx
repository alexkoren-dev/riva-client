import React, { useState } from 'react'
import { Comment, Tooltip, Button } from 'antd'
import ReadMoreReact from 'read-more-react'
import moment from 'moment'
import { NewCommentForm } from './forms'

const CompensationComments = ({ data }) => {
  const [collapseComment, setCollapseComment] = useState(false)
  const comments = (data.comments || []).sort(function (a, b) {
    return new Date(b.createdDate) - new Date(a.createdDate)
  })

  return (
    <div className="compensation-comments" key={comments}>
      <NewCommentForm compensationId={data.id} />
      {comments.length > 0 &&
        (collapseComment ? comments : [comments[0]]).map((comment, key) => (
          <Comment
            key={key}
            author={
              <a className="comment-author">{comment.company || 'Unknown'}</a>
            }
            content={
              <ReadMoreReact 
                text={comment.comment}
                min={200}
                ideal={250}
                max={300}
                readMoreText="read more"/>
            }
            datetime={
              <Tooltip
                title={moment(new Date(comment.createdDate)).format(
                  'YYYY-MM-DD HH:mm:ss'
                )}
              >
                <span>{moment(new Date(comment.createdDate)).fromNow()}</span>
              </Tooltip>
            }
          />
        ))}
      {comments.length > 1 && (
        <Button
          type="link"
          className="view-all"
          onClick={() => setCollapseComment(!collapseComment)}
        >
          <u>
            {collapseComment
              ? 'Close comments'
              : `View all ${comments.length} comments`}
          </u>
        </Button>
      )}
    </div>
  )
}

export default CompensationComments
