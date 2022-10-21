import { useState } from "react"
import Task from "./Task"

function ToDo() {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])

    const changeIt = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        const newTask = {
            id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
            name: task,
            completed: false
        }
        setList([...list, newTask])
    }

    const completedTask = (id, completed) => {
        setList(
            list.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: (completed === true ? false : true) }
                } else {
                    return task;
                }
            })
        )
    }

    const deleteTask = (id: any) => {
        setList(list.filter((task) => task.id !== id))
    }

    return (
        <div>
            {list.map((tasks) => {
                return (
                    <Task name={tasks.name} id={tasks.id} completed={tasks.completed} deleteTask={deleteTask} completedTask={completedTask} />
                )
            })}
            <input type="text" onChange={changeIt} />
            <button onClick={addTask}>add</button>
        </div>
    )
}

export default ToDo 