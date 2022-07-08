import React from 'react';
import s from "./Button.module.css"

export type ButtonType = {
    onClickAdd: () => void
}

const Button = (props: ButtonType) => {
    return (
        <span>
            <button className={s.button} onClick={props.onClickAdd}>+</button>
        </span>
    );
}

export default Button;
