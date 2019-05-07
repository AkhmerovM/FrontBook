import React, { Component } from 'react';
import './style.less';
import { Switch, Route } from 'react-router';
import { Post } from 'modules/body/components/Post';
import { Course } from 'modules/body/components/Course';
import { CourseContainer } from 'modules/body/containers/CourseContainer';
import { PostContainer } from 'modules/body/containers/PostContainer';

class BodyContainer extends Component {
    componentDidMount () {
        // const response = menuApi.getMenu();
    }
    render () {
        return (
            <div className='body-container'>
                <Switch>
                    <Route component={CourseContainer} path='/courses' />
                    <Route component={PostContainer} path='/posts' />
                    <Route component={Course} path='/courses/:id' />
                    <Route component={Post} exact path='/posts/:id' />
                    <Route component={PostContainer} exact path='/' />
                </Switch>
            </div>
        );
    }
}
export { BodyContainer };
