import React, { Component } from 'react';
import './style.less';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { selectPostData } from 'modules/body/selectors';
import { Link } from 'react-router-dom';
import { PostPreview } from 'modules/body/components/PostPreview';

function mapStateToProps (state) {
    return {
        postList: selectPostData(state)
    };
}
function mapDispatchToProps () {
    return {
    };
}

class PostListContainerWrapper extends Component {
    renderPostList (list) {
      return Object.values(list).map((post) => {
            return (
                <Link to={`${this.props.match.path}/${post.id}`}>
                    <PostPreview post={post} />
                </Link>
            );
        });
    }
    render () {
        const { postList } = this.props;
        if (!postList) {
            return null;
        }
        return (
            <div className='post-list-container'>
                <h1>PostList</h1>
                {this.renderPostList(postList)}
            </div>
        );
    }
}
const PostListContainer = connect(mapStateToProps, mapDispatchToProps())(PostListContainerWrapper);
export { PostListContainer };
