import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectCurrentPost } from 'modules/body/selectors';

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
class PostContainerWrapper extends Component {
    goBack = () => {
        this.props.history.goBack();
    };
    render () {
        const { post } = this.props;
        if (!post) {
            return null;
        }
        const { title = '', text = '' } = post;
        return (
            <div className='post'>
                <div onClick={this.goBack} className="post__back">Back</div>
                <div className="post__header">{title}</div>
                <div className="post__body" dangerouslySetInnerHTML={{__html: text}} />
            </div>
        );
    }
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps())(PostContainerWrapper);
export { PostContainer };
