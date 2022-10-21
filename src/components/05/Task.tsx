const Task = (props) => {
    return (
        <div style={{ color: props.completed ? 'green' : 'red' }}>
            <p>{props.name}</p>
            <button onClick={() => props.completedTask(props.id, props.completed)}>Done!</button>
            <button onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
    )
}

export default Task