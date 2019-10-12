import React from 'react';
import './style.less';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Wysiwyg ({ onChange, value = '', name }) {
  console.log('1232132131')
  return <Editor
        onChange={onChange}
        name={name}
        defaultEditorState={value}
        toolbarClassName="wysiwyg__toolbar"
        wrapperClassName="wysiwyg__wrapper"
        editorClassName="wysiwyg__editor"
    />;
}

export { Wysiwyg };
