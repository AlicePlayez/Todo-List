


import { useState } from "react";

export const Todolist = () => {
    const [newTask, setNewTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setTodoList([...todoList, task]);
    };

    const completedTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (id === task.id) {
                    return { ...task, completed: !task.completed };
                } else {
                    return task;
                }
            })
        );
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };

    return (
        <div>
            <div style={{marginTop: "10%"}}>
                <input style={{height: "50px", fontSize: "20px"}} type="text" onChange={handleChange} />
                <button style={{fontSize: "20px", backgroundColor: "white", padding: "15px", borderRadius: "5px", marginLeft: "20px"}} onClick={addTask}>Add Task</button>
            </div>
            <div style={{marginTop: "20px"}}>
                {todoList.map((task) =>
                    <div key={task.id} style={{ marginTop: "20px", color: task.completed ? "green" : "black" }}>
                        <span style={{textDecoration: task.completed ? "line-through" : "none", fontSize: "30px"}}>{task.taskName}</span>
                        <button style={{fontSize: "20px", backgroundColor: "red", padding: "15px", borderRadius: "5px", marginLeft: "20px"}} onClick={() => deleteTask(task.id)}>Delete</button>
                        <button style={{fontSize: "20px", backgroundColor: "green", padding: "15px", borderRadius: "5px", marginLeft: "20px"}} onClick={() => completedTask(task.id)}>Complete</button>
                    </div>
                )}
            </div>
        </div>
    );
};




