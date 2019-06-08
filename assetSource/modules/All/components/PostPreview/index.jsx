import React, { Component } from 'react';
import './style.less';

class PostPreview extends Component {
    render () {
        const { title } = this.props.post;
        return (
            <div className='post-preview'>
                <div className="post-preview__header">
                    {title}
                </div>
            </div>
        );
    }
}
export { PostPreview };
