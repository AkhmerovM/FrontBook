import React from 'react';
import './style.less';
import { Wysiwyg } from 'modules/common/components/Wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { connect } from 'react-redux'
import { addPost } from 'modules/body/actions'

function mapStateToProps() {
return {}
}
function mapDispatchToProps() {
  return {
    addPost,
  }
}

class PostFormWrapper extends React.Component {
  constructor () {
        super();
        this.state = {
            content: '',
          error: '',
        };
    }
    onChange = (content) => {
      let text = draftToHtml(content);
      this.setState({
        content: text,
        error: ''
      })
    };
  handleSendPost = () => {
    const {error, content} = this.state;
    if (content.length <= 8) {
      this.setState({
        error: 'content is empty'
      })
    }
    if(!error) {
      this.props.addPost(content);
    }
  }
    render () {
    const {error} = this.state;
        return (
            <div className="post-form">
              <div className="post-form__wysiwyg">
                  <Wysiwyg onChange={this.onChange}/>
              </div>
              <div className="post-form__send">
                <div className={`post-form__btn-send post-form__btn-send_${error.length ? 'disabled' : ''}`} onClick={this.handleSendPost}>Send</div>
              </div>
              <div className="post-form__error">
                {error}
              </div>
            </div>
        );
    }
}
const PostForm = connect(mapStateToProps, mapDispatchToProps())(PostFormWrapper);
export { PostForm };
