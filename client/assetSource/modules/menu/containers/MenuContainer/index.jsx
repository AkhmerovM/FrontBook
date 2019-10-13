import React, { Component } from 'react';
import './style.less';
import { loadPostList } from 'modules/body/actions';
import { connect } from 'react-redux';

function mapStateToProps (state) {
    return {
        // postData: selectPostData(state)
    };
}
function mapDispatchToProps () {
    return {
        loadPostList
    };
}
class MenuContainerWrapper extends Component {
    render () {
        return (
            <div className='menu-container'>
                    Сейчас читают:
            </div>
        );
    }
}
const MenuContainer = connect(mapStateToProps, mapDispatchToProps())(MenuContainerWrapper);
export { MenuContainer };
