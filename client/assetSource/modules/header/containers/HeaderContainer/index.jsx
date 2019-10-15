import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';

const config = [
    { id: '1', name: 'Статьи', url: 'post' },
    { id: '2', name: 'Курсы', url: 'course' },
    { id: '3', name: 'Написать статью', url: 'new-post' }
];

class HeaderContainer extends Component {
    render () {
        return (
            <div className='header-container'>
                <div className="header-container__logo">
                    <Link to={'/'}>
                        Front<b>Book</b>
                    </Link>
                </div>
                <div className="menu">
                    {config.map((item) => {
                        return (
                            <Link key={item.id} to={`/${item.url}`}>
                                <div className="menu__item">
                                    {item.name}
                                </div>
                            </Link>
                        );
                    })}
                </div></div>
        );
    }
}
export { HeaderContainer };
