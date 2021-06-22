import React from 'react'
import { Comment, Tooltip, Button } from 'antd'
import moment from 'moment'
import { NewCommentForm } from './forms'

const CompensationComments = ({ comments }) => {
  console.log(comments)
  return (
    <div className="compensation-comments">
      <NewCommentForm />
      {comments.map((comment, key) => (
        <Comment
          key={key}
          author={<a className="comment-author">Google</a>}
          content={<p>Looks pretty good to me! You should take it.</p>}
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      ))}
      {comments.length > 1 && (
        <Button type="link" className="view-all">
          <u>View all 49 comments</u>
        </Button>
      )}
    </div>
  )
}

export default CompensationComments
