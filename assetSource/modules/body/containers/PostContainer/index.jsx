import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { loadPostList } from 'modules/body/actions';

function mapStateToProps () {
    return {

    };
}
function mapDispatchToProps () {
    return {
        loadPostList
    };
}
class PostContainerWrapper extends Component {
    constructor (props) {
        super();
      props.loadPostList();
    }
    render () {
      const title = '';
        const text = '';
        return (
            <div className='post'>
                <div className="post__header">{title}</div>
                <div className="post__body">
                    {text}
                </div>
            </div>
        );
    }
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps())(PostContainerWrapper);
export { PostContainer };
