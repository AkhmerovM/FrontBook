import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectCurrentPost } from 'modules/body/selectors';
import { PostForm } from 'modules/common/components/PostForm'

function mapStateToProps (state, props) {
    const { match } = props;
    return {
        post: selectCurrentPost(state, match.params.id)
    };
}
function mapDispatchToProps () {
    return {
    };
}
class NewPostWrapper extends Component {
    goBack = () => {
        this.props.history.goBack();
    };
    render () {
        return (
            <div className='post'>
                <div onClick={this.goBack} className="post__back">Back</div>
                <PostForm />
            </div>
        );
    }
}
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps())(NewPostWrapper);
export { NewPostContainer };
