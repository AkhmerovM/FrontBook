import React, { Component } from 'react';
import './style.less';
import { menuApi } from 'api/menu-api';

class Post extends Component {
    componentDidMount () {
        const response = menuApi.getMenu();
        console.log(response);
    }
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
export { Post };
