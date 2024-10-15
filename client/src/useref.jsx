// import { useRef } from "react";
// import { useState } from "react";
// function Useref(){
//     let ele = useRef(null)
//     const [y,setY]=useState(100)
//     let x=useRef(null)
//     let z =100
//     return(
//         <>
//         <h1 ref={ele} className="active">This is Heading</h1>
//         <button onClick={()=>{
//             console.log(ele)
//             console.log(ele.current)
//             ele.current.classList.toggle('active')
//             ele.current.classList.toggle('inactive')
//         }}>Click</button>
//          <h1>x value:{x.current}</h1>
//          <h1>z value:{z.current}</h1>
//          <button onClick={()=>{
//             x.current=x.current+10
//             console.log(x.current)
//             z=z+1000
//             setY(y+100)
//          }}>click</button>
//         </>
//     )
// }
// export default Useref;