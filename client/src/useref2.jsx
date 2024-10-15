// import { useRef } from "react";
// function Useref_arr(){
//     let arr=new Array(10).fill(null)
//     let headings=useRef([])
//     function changeStyle(e){
//         for(let ele of headings.current){
//             ele.classList.remove('primary')
//         }
//         e.target.classList.add('primary')
//     }
//     return(
//         <>
//         {
//             arr.map((ele,i)=>{
//                 return(
//                     <h1 ref={(el)=>headings.current[i]=el} onClick={(eve)=>{
//                         changeStyle(eve)
//                     }}> 
//                     This is heading {i+1}</h1>
                   
//                 )
//             })
//         }
//         </>
//     )
// }
// export default Useref_arr 