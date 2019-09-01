import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectPostData } from 'modules/body/selectors';
import { Link } from 'react-router-dom';
import { PostPreview } from 'modules/body/components/PostPreview';
import { Box } from 'modules/common/components/Box';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
                <Link key={post.id} to={`/post/${post.id}`}>
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
            <Box>
                <div className='post-list-container'>
                    <Box.Header>Статьи</Box.Header>
                    <div className="post-list-container__list">
                        {this.renderPostList(postList)}
                    </div>
                </div>
                <Editor
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                />
            </Box>
        );
    }
}
const PostListContainer = connect(mapStateToProps, mapDispatchToProps())(PostListContainerWrapper);
export { PostListContainer };
