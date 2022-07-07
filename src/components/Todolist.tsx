import React, {KeyboardEvent, useState} from 'react';
import {CheckType, StudentsType} from "../App";
import Input from "./Input/Input";
import Button from "./Button/Button";

type TodolistPropsType = {
    checkedButton: (filter: CheckType) => void
    students: StudentsType[]
    addTask: (value: string) => void
    deleteTask: (sID: string) => void
}

const Todolist = (props: TodolistPropsType) => {
    const [value, setValue] = useState('')

    const onClickDeteleHandler = (sID: string) => {
        props.deleteTask(sID)
    }
    const stackInfo = props.students.map(s =>
        <li key={s.id}>
            <span>{s.stack}</span>
            <button onClick={() => onClickDeteleHandler(s.id)}>x</button>
        </li>)

    const OnClickFilterButton = (filter: CheckType) => {
        props.checkedButton(filter)
    }

    const onChangeValue = (e: string) => {
        setValue(e)
    }

    const onClickAdd = () => {
        props.addTask(value)
        setValue('')
    }

    const onClickKeyboard = (e:KeyboardEvent<HTMLInputElement>)=> {
        if(e.key==="Enter" && e.ctrlKey) {
            props.addTask(value)
            setValue('')
        }
    }
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <Input value={value} onChangeValue={onChangeValue} onClickKeyboard={onClickKeyboard}/>
                <Button onClickAdd={onClickAdd}/>
            </div>
            <ul>
                {stackInfo}
            </ul>
            <div>
                <button onClick={() => OnClickFilterButton("all")}>All</button>
                <button onClick={() => OnClickFilterButton("active")}>Active</button>
                <button onClick={() => OnClickFilterButton("completed")}>Completed</button>
            </div>
        </div>
    );
}

export default Todolist;
