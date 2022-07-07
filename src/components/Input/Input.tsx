import React, {useState} from 'react';
import {KeyboardEvent} from 'react'
import {StudentsType} from "../../App";

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
        <div>
            <input
                value={props.value}
                onChange={(e) => onChangeValue(e.currentTarget.value)}
                onKeyDown={(e)=>props.onClickKeyboard(e)}/>
        </div>
    );
}

export default Input;