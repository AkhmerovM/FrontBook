import React, { Component } from 'react';
import './style.less';
import block from 'bem-cn';

const b = block('success-send-post');

function SuccesfullySendPost ({ text }) {
    return (
		  <div className={b()}>
			  <div className={b('title')}>
                {text}
			  </div>
		  </div>
    );
}
export { SuccesfullySendPost };
