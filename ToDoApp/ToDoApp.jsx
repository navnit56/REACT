import { use, useEffect, useState } from "react"
import './ToDoApp.css'




function ToDoApp() {

    const [task, setTask] = useState([]);
    const [inputValue, setInputValues] = useState("");
    const [error, setError] = useState("");
    const [editIndex, setEditIndex] = useState(-1);



    const HandleAddTask = () => {
        if (inputValue !== "" && (!task.includes(inputValue)) && editIndex === -1) {
            setTask([...task, inputValue]);
        }else if( editIndex !== -1){
            const editedTask = [...task];
            editedTask[editIndex] = inputValue;
           if(inputValue !== editedTask){ setTask(editedTask);
            setEditIndex(-1);
        }
        } else if (task.includes(inputValue)) {
            setError(" Can't add duplicate values")
        }
        setTimeout(() => {
            setError("");
        }, 2000)
    }

    const HandleRemoveTask = (index) =>{
        // console.log("Array : ",task);
        // console.log("index : ",index);
        //     // setTask(task.filter((_, i) => i!== index));
        //     console.log("updated : ",task.splice(index,1));

        //     console.log("Array 1: ",task);
        //     setTask(task)   
            
        const updatedTasks = [...task];
// 2. Splice the copy
updatedTasks.splice(index, 1);
// 3. Set the new state
setTask(updatedTasks);
    }

    // useEffect(() => {
    //    localStorage.setItem("tasks", JSON.stringify(task));
    // }, [task])

        const HandleEditTask = (index) =>{
            setEditIndex(index);
            setInputValues(task[index]);
            
        }

    console.log(task)

    return (
        <>
            <div className="main">
                <div className="hero">
                    <div className="input">
                        <input type="text" className="inputtext" name="taskInput" id="taskInput" value={inputValue} onChange={(e) => setInputValues(e.target.value)} />

                        <input type="button" className="addtaskbtn" value="Add" onClick={HandleAddTask} />
                    </div>
                     <div className="error" >
                            {error}
                        </div>
                    <div className="tasks">
                        <div className="task">
                            <ul>
                                {task.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                        <div className="btns">
                                    <button className="edittasskbtn btn" onClick={() => HandleEditTask(index)}>✎</button> 
                                    <button className="removetaskbtn btn" onClick={() => HandleRemoveTask(index)}>🗑️</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
} export default ToDoApp