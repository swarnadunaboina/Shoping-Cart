import React from "react";
//import Box from '@mui/material/Box';
//import { Button } from "@mui/material";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { addItemSize } from "../../redux/Actions/cart_action";

const Size_Component = ({ size }) => {
  // const dispatch = useDispatch()
  // const select = (item) => {
  //        const size = item.size
  //        dispatch(addItemSize(size))
  //       console.log("size",size)
  // }
  return (
        size && size.length && size.map((item, index) => {
          return (
            <div className="sizeButton" key={index}>
              {/* <Box
                          height={50}
                          width={50}
                          my={4}
                          color="black"
                          // display="flex"
                          alignItems="center"
                          textAlign="center"
                          gap={4}
                          // div={2}
                          sx={{ border: '2px solid grey' }} 
                          onClick = {()=>{select()}}
                        >
                         <div>{item}</div> 
                        </Box> */}
              <Button
                outline
                // onClick={select()}
              >
                {item}
              </Button>
            </div>
          )
        })
      
  )
}
export default Size_Component;