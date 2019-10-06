import React, { Component } from 'react';
import './style.less';
import { Switch, Route } from 'react-router';
import { Course } from 'modules/body/components/Course';
import { CourseContainer } from 'modules/body/containers/CourseContainer';
import { PostContainer } from 'modules/body/containers/PostContainer';
import { PostListContainer } from 'modules/body/containers/PostListContainer';
import { loadPostList } from 'modules/body/actions';
import { connect } from 'react-redux';
import { NewPostContainer } from 'modules/body/containers/NewPostContainer'

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
class BodyContainerWrapper extends Component {
    componentDidMount () {
        this.props.loadPostList();
    }
    render () {
        return (
            <div className='body-container'>
                <Switch>
                    <Route component={CourseContainer} exact path='/course' />
                    <Route component={PostListContainer} exact path='/post' />
                    <Route component={Course} exact path='/course/:id' />
                    <Route component={PostContainer} exact path='/post/:id' />
                    <Route component={NewPostContainer} exact path='/new-course' />
                    <Route component={PostListContainer} exact path='/' />
                </Switch>
            </div>
        );
    }
}
const BodyContainer = connect(mapStateToProps, mapDispatchToProps())(BodyContainerWrapper);
export { BodyContainer };
