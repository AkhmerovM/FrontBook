import React, { Component } from 'react';
import './style.less';
import { Switch, Route } from 'react-router';
import { Course } from 'modules/body/components/Course';
import { CourseContainer } from 'modules/body/containers/CourseContainer';
import { PostContainer } from 'modules/body/containers/PostContainer';
import { PostListContainer } from 'modules/body/containers/PostListContainer';
import { loadPostList } from 'modules/body/actions';
import { connect } from 'react-redux';
import { PostForm } from 'modules/common/components/PostForm'
import { CreatePostContainer } from 'modules/body/containers/CreatePostContainer'
import { UpdatePostContainer } from 'modules/body/containers/UpdatePostContainer'

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
                    <Route component={UpdatePostContainer} exact path='/post/edit/:id' />
                    <Route component={CreatePostContainer} exact path='/new-post' />
                    <Route component={PostListContainer} exact path='/' />
                </Switch>
            </div>
        );
    }
}
const BodyContainer = connect(mapStateToProps, mapDispatchToProps())(BodyContainerWrapper);
export { BodyContainer };
