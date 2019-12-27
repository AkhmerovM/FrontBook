import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectCurrentPost } from 'modules/body/selectors';
import { PostForm } from 'modules/common/components/PostForm'
import block from 'bem-cn';
import { Button } from 'modules/common/components/Button'
import { addPost } from 'modules/body/actions'

const b = block('create-post');

function mapStateToProps (state, props) {
    const { match } = props;
    return {
        post: selectCurrentPost(state, match.params.id)
    };
}
function mapDispatchToProps () {
    return {
      addPost
    };
}
class CreatePostWrapper extends Component {
    goBack = () => {
        this.props.history.goBack();
    };
      sendPost = (post) => {
          this.props.addPost(post);
          localStorage.removeItem('content');
      }
    render () {
      return (
            <div className={b()}>
                <Button onClick={this.goBack} >Back</Button>
                <PostForm writeToLocalStorage={true} onSubmit={this.sendPost} />
            </div>
        );
    }
}
const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps())(CreatePostWrapper);
export { CreatePostContainer };
