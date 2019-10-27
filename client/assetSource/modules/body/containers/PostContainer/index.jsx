import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectCurrentPost } from 'modules/body/selectors';
import { Button } from 'modules/common/components/Button'
import { Link } from 'react-router-dom'
import { removePost } from 'modules/body/actions'
import { Author } from 'modules/body/components/Author'

function mapStateToProps (state, props) {
    const { match } = props;
    return {
        post: selectCurrentPost(state, match.params.id)
    };
}
function mapDispatchToProps () {
    return {
      removePost
    };
}
class PostContainerWrapper extends Component {
    goBack = () => {
        this.props.history.goBack();
    };
    removePost = () => {
      const { match, removePost } = this.props;
      removePost(match.params.id);
    }
    EditPost = () => {
      const { match } = this.props;
      console.log(match.params.id)
    }
    render () {
        const { post } = this.props;
        if (!post) {
            return null;
        }
        const { title = '', content = '', id, author} = post;
        return (
            <div className='post'>
                <div className="post__buttons">
                    <div className="post__back"><Button onClick={this.goBack}>Back</Button></div>
                    <div className="post__edit">
                      <Link to={`/post/edit/${id}`}>
                        <Button color='orange' onClick={this.EditPost}>
                          Edit
                        </Button>
                      </Link></div>
                    <div className="post__remove">
                      <Button color='red' onClick={this.removePost}>Remove</Button>
                    </div>
                </div>
                <div className="post__header">{title}</div>
                <div className="post__author">
                  <Author author={author} />
                </div>
                <div className="post__body" dangerouslySetInnerHTML={{__html: content}} />
            </div>
        );
    }
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps())(PostContainerWrapper);
export { PostContainer };
