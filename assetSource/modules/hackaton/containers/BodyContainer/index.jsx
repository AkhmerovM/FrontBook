import React, { Component } from 'react';
import './style.less';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { RegistrationContainer } from 'modules/hackaton/containers/RegistrationContainer';

function mapStateToProps (state) {
    return {
        // postData: selectPostData(state)
    };
}
function mapDispatchToProps () {
    return {
    };
}
class BodyContainerWrapper extends Component {
    componentDidMount () {
    }
    render () {
        return (
            <div className='body-container'>
                <Switch>
                    <Route component={RegistrationContainer} exact path='/info/registration' />
                </Switch>
            </div>
        );
    }
}
const BodyContainer = connect(mapStateToProps, mapDispatchToProps())(BodyContainerWrapper);
export { BodyContainer };
