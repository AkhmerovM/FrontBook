import React from 'react';
import './style.less';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Wysiwyg ({ onChange, name }) {
    return <Editor
        onChange={onChange}
        name={name}
        value='djfgsdh jdfkh jkdfh dfkjl fdkjl gdflsdfgh dfjkgdfkjhg dfkj'
        toolbarClassName="wysiwyg__toolbar"
        wrapperClassName="wysiwyg__wrapper"
        editorClassName="wysiwyg__editor"
    />;
}

export { Wysiwyg };