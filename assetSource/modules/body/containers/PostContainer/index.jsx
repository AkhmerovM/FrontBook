import React, { Component } from 'react';
import './style.less';
import { menuApi } from 'api/menu-api';
import { connect } from 'react-redux';

function mapStateToProps () {
    return {

    }
}
function mapDispatchToProps () {
    return {

    };
}
class PostContainerWrapper extends Component {
    componentDidMount () {
        const response = menuApi.getMenu();
        console.log(response);
    }
    // data = menuApi.getPost();
    render () {
        // if (!this.data) {
        //     return null;
        // }
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
const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostContainerWrapper);
export { PostContainer };
