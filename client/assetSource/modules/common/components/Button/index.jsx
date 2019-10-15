import React from 'react';
import './style.less';
import block from 'bem-cn';

const b = block('common-button');

function Button ({ disabled = false, color = 'green', children = '', ...rest }) {
    return <div className={b({ disabled }).mix(`common-button_${color}`)} {...rest} >{children}</div>;
}

export { Button };
