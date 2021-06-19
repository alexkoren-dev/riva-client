import React from 'react'
import { Comment, Tooltip, Button } from 'antd'
import moment from 'moment'
import { NewCommentForm } from './forms'

const CompensationComments = () => {
  return (
    <div className="compensation-comments">
      <NewCommentForm />
      <Comment
        author={<a className="comment-author">Google</a>}
        content={<p>Looks pretty good to me! You should take it.</p>}
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
      <Button type="link" className="view-all">
        <u>View all 49 comments</u>
      </Button>
    </div>
  )
}

export default CompensationComments
