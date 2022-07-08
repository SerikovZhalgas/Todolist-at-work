import React, {KeyboardEvent, useState} from 'react';
import {CheckType, StudentsType} from "../App";
import Input from "./Input/Input";
import Button from "./Button/Button";
import s from "./Todolist.module.css"

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
    const stackInfo = props.students.map(st =>
        <li className={s.todolistItem} key={st.id}>
            <span className={s.todolistItemText}>{st.stack}</span>
            <button className={s.todolistItemButton} onClick={() => onClickDeteleHandler(st.id)}>x</button>
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
        <div className={s.todolist}>
            <h3 className={s.todolistTitle}>What to learn</h3>
            <div className={s.todolistUnput}>
                <Input value={value} onChangeValue={onChangeValue} onClickKeyboard={onClickKeyboard}/>
                <Button onClickAdd={onClickAdd}/>
            </div>
            <ul className={s.todoListItems}>
                {stackInfo}
            </ul>
            <div className={s.todolistFilter}>
                <button className={s.todolistFilterButton} onClick={() => OnClickFilterButton("all")}>All</button>
                <button className={s.todolistFilterButton} onClick={() => OnClickFilterButton("active")}>Active</button>
                <button className={s.todolistFilterButton} onClick={() => OnClickFilterButton("completed")}>Completed</button>
            </div>
        </div>
    );
}

export default Todolist;
