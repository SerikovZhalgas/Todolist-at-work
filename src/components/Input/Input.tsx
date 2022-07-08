import React from 'react';
import {KeyboardEvent} from 'react'
import s from "./Input.module.css"

type InputType = {
    onChangeValue: (e: string) => void
    value: string
    onClickKeyboard:(e:KeyboardEvent<HTMLInputElement> )=>void
}

const Input = (props: InputType) => {
    const onChangeValue = (e: string) => {
        props.onChangeValue(e)
    }

    return (
        <span>
            <input className={s.input}
                value={props.value}
                onChange={(e) => onChangeValue(e.currentTarget.value)}
                onKeyDown={(e)=>props.onClickKeyboard(e)}/>
        </span>
    );
}

export default Input;