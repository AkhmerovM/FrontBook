import React, { Component } from 'react';
import './style.less';
import { MenuContainer } from 'modules/menu/containers/MenuContainer';
import { HeaderContainer } from 'modules/header/containers/HeaderContainer';
import { BodyContainer } from 'modules/body/containers/BodyContainer';

class MainContainer extends Component {
    render () {
        return (
            <div className='main'>
                <div className="main__container">
                    <div className="main__header">
                        <HeaderContainer />
                    </div>
                    <div className="main__content">
                        <div className="main__menu">
                            <MenuContainer />
                        </div>
                        <div className="main__body">
                            <BodyContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export { MainContainer };
