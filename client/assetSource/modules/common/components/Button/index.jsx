import React from 'react';
import './style.less';
import block from 'bem-cn';

const b = block('common-button');

function Button ({ disabled = false, children = '', ...rest }) {
    return <div className={b({ disabled })} {...rest} >{children}</div>;
}

export { Button };
