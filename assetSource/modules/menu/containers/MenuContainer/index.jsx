import React, { Component } from 'react';
import './style.less';
import { loadPostList } from 'modules/body/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

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
const config = [
    { name: 'postList', url: 'post' },
    { name: 'courseList', url: 'course' }
];
class MenuContainerWrapper extends Component {
    render () {
        return (
            <div className='menu-container'>
                <div className="menu__list">
                    {config.map((item) => {
                        return (
                            <Link to={`/${item.url}`}>
                                <div className="menu__item">
                                    {item.name}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}
const MenuContainer = connect(mapStateToProps, mapDispatchToProps())(MenuContainerWrapper);
export { MenuContainer };
