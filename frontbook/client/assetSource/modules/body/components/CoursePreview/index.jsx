import React, { Component } from 'react';
import './style.less';
import { Switch, Route } from 'react-router';

class PostContainer extends Component {
    componentDidMount () {
        // const response = menuApi.getMenu();
    }
    // data = menuApi.getPost();
    render () {
        if (!this.data) {
            return null;
        }
        const { title, text } = this.data;
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
export { PostContainer };
