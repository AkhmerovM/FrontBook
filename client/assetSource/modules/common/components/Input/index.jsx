import React from 'react';
import './style.less';
import block from 'bem-cn';

const b = block('common-input');

function Input ({ placeholder = '', name = '', type = 'text', label = '', value = '', ...rest }) {
    return <div className={b()}>
        <label>
            <span className={b('label')}> {label}</span>
            <input {...rest} name={name} type={type} className={b('input')} placeholder={placeholder} value={value} />
        </label>
    </div>;
}

export { Input };
