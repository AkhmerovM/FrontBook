import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectCurrentPost } from 'modules/body/selectors';
import { PostForm } from 'modules/common/components/PostForm'
import block from 'bem-cn';
import { Button } from 'modules/common/components/Button'

const b = block('create-post');

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
            <div className={b()}>
                <Button onClick={this.goBack} >Back</Button>
                <PostForm />
            </div>
        );
    }
}
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps())(NewPostWrapper);
export { NewPostContainer };
