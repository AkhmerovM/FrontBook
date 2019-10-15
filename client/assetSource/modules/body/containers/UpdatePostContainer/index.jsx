import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectCurrentPost } from 'modules/body/selectors';
import { PostForm } from 'modules/common/components/PostForm'
import block from 'bem-cn';
import { Button } from 'modules/common/components/Button'
import { updatePost } from 'modules/body/actions'

const b = block('create-post');

function mapStateToProps (state, props) {
    const { match } = props;
  return {
        post: selectCurrentPost(state, match.params.id)
    };
}
function mapDispatchToProps () {
    return {
      updatePost
    };
}
class UpdatePostWrapper extends Component {
    goBack = () => {
        this.props.history.goBack();
    };
    updatePost = (newPost) => {
      const {updatePost, post} = this.props;
      console.log(post)
      console.log(newPost)
      updatePost({
          ...post,
          ...newPost
        }
      )
    }
    render () {
      const {post} = this.props;
      if (!post) {
        return 'статья не найдена';
      }
      return (
            <div className={b()}>
                <Button onClick={this.goBack} >Back</Button>
                <PostForm post={post} onSubmit={this.updatePost} type='update' />
            </div>
        );
    }
}
const UpdatePostContainer = connect(mapStateToProps, mapDispatchToProps())(UpdatePostWrapper);
export { UpdatePostContainer };
