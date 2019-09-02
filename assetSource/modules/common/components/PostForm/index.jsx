import React from 'react';
import './style.less';
import { Wysiwyg } from 'modules/common/components/Wysiwyg';
import {convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class PostForm extends React.Component {
    constructor () {
        super();
        this.state = {
            content: ''
        };
    }
    onChange = (content) => {
      console.log(this.state.content)
      this.setState({
        content: draftToHtml(content)
      })
    };
    render () {
        return (
            <div className="post-form">
              <div className="post-form__wysiwyg">
                  <Wysiwyg onChange={this.onChange}/>
              </div>
              <div className="post-form__send">
                <button>Send</button>
              </div>
            </div>
        );
    }
}
export { PostForm };
