import React, { Component } from 'react';
import './style.less';
import block from 'bem-cn';

const b = block('success-send-post');

function SuccesfullySendPost() {
		return (
		  <div className={b()}>
			  <div className={b('title')}>
				  Ваша статья успешно добавлена
			  </div>
		  </div>
		);
}
export { SuccesfullySendPost };
