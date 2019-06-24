import React, { Component } from 'react';
import './style.less';

class CourseListContainer extends Component {
    componentDidMount () {
        // const response = menuApi.getMenu();
    }
    // data = menuApi.getPost();
    renderCourseList () {
        const { list, data } = this.props;
        list.map((id) => {
            return <Course id={id} course={data[id]} />;
        });
    }
    render () {
        if (!this.data) {
            return null;
        }
        const { title, text } = this.data;
        return (
            <div className='course-list-container'>
                {this.renderCourseList()}
            </div>
        );
    }
}
export { CourseListContainer };
