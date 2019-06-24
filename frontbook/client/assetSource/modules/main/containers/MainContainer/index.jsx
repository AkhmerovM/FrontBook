import React, { Component } from 'react';
import './style.less';
import { MenuContainer } from 'modules/menu/containers/MenuContainer/index.jsx';
import { HeaderContainer } from 'modules/header/containers/HeaderContainer/index.jsx';
import { BodyContainer } from 'modules/body/containers/BodyContainer/index.jsx';

class MainContainer extends Component {
    render () {
        return (
            <div className='main'>
                <div className="main__container">
                    <div className="main__header">
                        <HeaderContainer/>
                    </div>
                    <div className="main__body">
                        <MenuContainer/>
                        <BodyContainer/>
                    </div>
                </div>
            </div>
        );
    }
}
export { MainContainer };
