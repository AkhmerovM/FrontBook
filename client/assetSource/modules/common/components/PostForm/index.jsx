import React from 'react';
import './style.less';
import { Wysiwyg } from 'modules/common/components/Wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { connect } from 'react-redux'
import { addPost } from 'modules/body/actions'
import { Input } from 'modules/common/components/Input'
import { Button } from 'modules/common/components/Button'
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import { SuccesfullySendPost } from 'modules/body/components/SuccesfullySendPost'

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
          content: localStorage.getItem('content') ? localStorage.getItem('content') : '',
          error: '',
          title: '',
          success: false,
        };
    }
    onChangeWisywig = (rawContent) => {
      const content = draftToHtml(rawContent);
      console.log(content)
      this.setState({
        content: content,
        error: ''
      });
      localStorage.setItem('content', content);
    };
  onChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
      error: '',
    });
  };
  handleSendPost = () => {
    const {content, title} = this.state;
    if (content.length <= 8 || !title) {
      this.setState({
        error: 'content is empty'
      })
    } else {
      this.sendPost();
    }
  }
  sendPost = () => {
    const {error, content, title} = this.state;
    console.log('sfdgdfgfdg')
    if(!error) {
      this.props.addPost({title, content});
      this.setState({
        content: '',
        error: '',
        title: '',
        success: true,
      });
      localStorage.removeItem('content');
    }
  }
  checkContent = (rawContent) => {
    const contentState = ContentState.createFromBlockArray(convertFromHTML(rawContent));
    if (contentState.getBlockMap().count()) {
      return  EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  }
    render () {
    const {error, title, content: rawContent, success} = this.state;
      let content = this.checkContent(rawContent);
      if (success) {
        return <SuccesfullySendPost />
      }
      return (
            <div className="post-form">

              <div className="post-form__wysiwyg">
                <Input type="text" placeholder='Название' label='Название статьи' name='title' value={title} onChange={this.onChange}/>
              </div>
              <div className="post-form__wysiwyg">
                  <Wysiwyg value={content} onChange={this.onChangeWisywig} />
              </div>
              <div className="post-form__send">
                <Button disabled={Boolean(error)} onClick={this.handleSendPost} >Отправить</Button>
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
