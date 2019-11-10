import React, { Component } from 'react';
import './style.less';

class Comment extends Component {
    render () {
        const { author: { firstname, lastname, avatar } } = this.props;
        return (
            <div className='comment'>

            </div>
        );
    }
}
export { Comment };
