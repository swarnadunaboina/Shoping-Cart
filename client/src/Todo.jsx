import { useState } from "react";
import Search from "./Search";
function Todo(){
    const [Todos, UpdateTodos] = useState(['Task1','Task2'])
    const addNew = (task)=>{
        UpdateTodos([...Todos,task])
    }
    return(
        <>
        <Search add={addNew}></Search>
        <ul>
            {
                Todos.map(
                    (t)=><li>{t}</li>
                )
            }
        </ul>
        </>
    )
}
export default Todo