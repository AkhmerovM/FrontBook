import React from 'react';
import './style.less';
import { Wysiwyg } from 'modules/common/components/Wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { Input } from 'modules/common/components/Input'
import { Button } from 'modules/common/components/Button'
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import { SuccesfullySendPost } from 'modules/body/components/SuccesfullySendPost'

class PostForm extends React.Component {
  constructor (props) {
    console.log(props)
    super(props);
        this.state = {
          content: props.post.content,
          error: '',
          title: props.post.title,
          success: false,
        };
    }
  static defaultProps = {
    type: 'create',
    post: {
      id: null,
      title: null,
      content: localStorage.getItem('content') ? localStorage.getItem('content') : '',
    },
  };
  onChangeWisywig = (rawContent) => {
      const content = draftToHtml(rawContent);
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
  handleValidation = () => {
    const {onSubmit} = this.props;
    const {content, title} = this.state;
    if (content.length <= 8 || !title) {
      this.setState({
        error: 'content is empty'
      })
    } else {
      onSubmit({
        content: content,
        title: title,
      });
      this.setState({
        content: '',
        error: '',
        title: '',
        success: true,
      });
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
    const {type} = this.props;
    const {error, title, content: rawContent, success} = this.state;
      let content = this.checkContent(rawContent);
      if (success) {
        return <SuccesfullySendPost text={successConfig[type]} />
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
                <Button disabled={Boolean(error)} onClick={this.handleValidation} >{buttonConfig[type]}</Button>
              </div>
              <div className="post-form__error">
                {error}
              </div>
            </div>
        );
    }
}
const buttonConfig = {
  create: 'Отправить',
  update: 'Сохранить',
}
const successConfig = {
  create: 'Ваша статья успешно добавлена',
  update: 'Ваша статья успешно обновлена',
}
export { PostForm };
