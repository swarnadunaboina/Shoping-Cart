import { useState } from "react";
function Search(props){
    const [newTask,setNewTask] = useState("")
    return(
        <>
        <input value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}/>
        <button onClick={()=>{props.add(newTask)}}>Add Todo</button>
        </>
    )
}
export default Search