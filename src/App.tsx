import React from 'react';
import './App.css';
import Todolist from "./components/Todolist";
import {v1} from "uuid"
import {useState} from 'react';


export type StudentsType = {
    id: string
    stack: string
    isDone: boolean
}
export type CheckType = "all" | "active" | "completed"

const App = () => {
    const [students, setStudents] = useState<Array<StudentsType>>( [
        {id: v1(), stack: "React", isDone: true},
        {id: v1(), stack: "HTML&CSS", isDone: false},
        {id: v1(), stack: "JS", isDone: true},
        {id: v1(), stack: "TypeScript", isDone: false},
        {id: v1(), stack: "Angular", isDone: true},
        {id: v1(), stack: "ReactNative", isDone: false},
        {id: v1(), stack: "Vue", isDone: true}
    ])
    const [check, setCheck] = useState<CheckType>("all")

    let filteredStudents;

    switch (check) {
        case 'all':
            filteredStudents= students
            break
        case 'active':
            filteredStudents= students.filter(s=>s.isDone === false)
            break
        case 'completed':
            filteredStudents= students.filter(s=>s.isDone === true)
    }

    const checkedButton = (filter:CheckType) => {
        setCheck(filter)
    }

    const deleteTask = (sID:string) => {
        setStudents(students.filter(s=>s.id!==sID))
    }

    const addTask = (value:string) => {
        setStudents([{id: v1(), stack: value, isDone: false}, ...students])
    }

    return (
        <div className="App">
            <Todolist students={filteredStudents} checkedButton={checkedButton} addTask={addTask} deleteTask={deleteTask}/>
        </div>
    );
}

export default App;
