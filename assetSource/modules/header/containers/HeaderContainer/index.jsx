import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';

const config = [
    { id: '1', name: 'Потеряшки', url: 'lose' },
    { id: '2', name: 'Поисковики', url: 'search' }
];

class HeaderContainer extends Component {
    render () {
        return (
            <div className='header-container'>
                <div className='header-container__left'>
                    <div className="header-container__logo">Жди меня</div>
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
                    </div>
                </div>
                <div className='menu__registration'>
                    <Link key={3} to={`registration`}>
                        <div className="menu__item">
                                    Регистрация
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
export { HeaderContainer };
