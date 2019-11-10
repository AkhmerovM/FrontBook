import React, { Component } from 'react';
import './style.less';
import { Comment } from 'modules/body/components/Comment'

class Author extends Component {
  renderComment = ({comment, userId}) => {
    const {userList} = this.props;
    return <Comment comment={comment} author={userList[userId]} />
  }
  renderCommentList () {
    const { commentList } = this.props;
return commentList.map(this.renderComment)
  }
    render () {
        return (
            <div className='comment-list'>
              {this.renderCommentList()}
            </div>
        );
    }
}
export { Author };
