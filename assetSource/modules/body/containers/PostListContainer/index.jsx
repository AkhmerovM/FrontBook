import React, { Component } from 'react';
import './style.less';
import { Switch, Route } from 'react-router';

class PostListContainer extends Component {
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
            <div className='post-list-container'>
                <div className="post-list-container__header">{title}</div>
                <div className="post-list-container__body">
                    {text}
                </div>
            </div>
        );
    }
}
export { PostListContainer };
