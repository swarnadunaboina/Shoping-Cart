import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Account_Details = function(){
    console.log("djfgkjhijk")
const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5173/signup')
        .then(res=> res.json())
        .then(details=> setData(details))
        .catch(err=> console.log(err))
    })
    return(
        <div>
            <ul>
                {data.map((list, index)=>(
                    <li key={index}>{list.email}</li>
                ))}
            </ul>
        </div>
    )
}
export default Account_Details