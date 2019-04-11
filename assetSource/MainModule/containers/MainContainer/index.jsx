import React, { Component } from 'react'
import './style.less'
import { MenuContainer } from 'MenuModule/containers/MenuContainer/index.jsx'
import { HeaderContainer } from 'HeaderModule/containers/HeaderContainer/index.jsx'
import { BodyContainer } from 'BodyModule/containers/BodyContainer/index.jsx'

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
    )
  }
}
export { MainContainer }
