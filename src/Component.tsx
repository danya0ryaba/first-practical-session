import React from "react";

type DataType = {
    data: Array1Type
}
type Array1Type = {
    title: string,
    tasks: ElementTasksType[]
    students: ElementStudentsType[]
}
type ElementTasksType = {
    taskId: number
    title: string
    isDone: boolean
}
type ElementStudentsType = string


export const Component = (props: DataType) => {
    return (<div>
        <h1>{props.data.title}</h1>
        <ul>
            {props.data.tasks.map(elem => {
                return (
                    <li>
                        <span>{elem.title}</span>
                        <span>{elem.taskId}</span>
                        <span><input type="checkbox" checked={elem.isDone} /></span>
                    </li>
                )
            })}
        </ul>
        <ul>
            {props.data.students.map(elemNameStudent => {
                return (
                    <li>elemNameStudent</li>
                )
            })}
        </ul>
    </div>)
}