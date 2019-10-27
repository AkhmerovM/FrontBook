import React, { Component } from 'react';
import './style.less';

class Author extends Component {
    render () {
        const { author: { firstname, lastname, avatar } } = this.props;
        return (
            <div className='author'>
                <img className="author__avatar" src={avatar} />
                <div className="author__name">
                    {firstname}{' '}{lastname}
                </div>
            </div>
        );
    }
}
export { Author };
