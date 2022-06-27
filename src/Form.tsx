import React, { useEffect, useRef, useState } from 'react'
import  ReactDOM  from 'react-dom'
import './App.css'
import App from './App'
import {  useAppSelector ,useAppDispatch} from './hooks'
import { handleText } from './silce'
import { retailerData } from './RetailerData'
import { Dialog,Button , DialogContent, DialogContentText, DialogTitle,DialogProps } from '@mui/material'
import ProductTable from './ProductTable'


function Form(props:any) {
    const [check,setCheck]=useState(false)
    const [toggle, setToggle] = useState(true);
    
    const value=useAppSelector(state=>state.text.inputText)
    console.log("first value", value)
  
      // console.log(ind)
      
      // setToggle(!toggle);
      
    
    
  
    const handleClick=(ind:any)=>{
       
      // setToggle(!toggle);
      console.log("val", value)
        console.log(value.map((val)=>val))
            
        
    retailerData.map((data)=>{
      if(data.id===props.num){
        value.map((val)=>data.val.push(val))
        console.log(data.val)
      }
    })

        props.close(false)
        

    }
  
   
  return ReactDOM.createPortal( 
  <div className='form'>
    <Dialog open >
      <DialogTitle>Form</DialogTitle>
      <DialogContent>
        <ProductTable handleClick={handleClick}/>
      </DialogContent>
      
      
    </Dialog>
  
    </div>,document.body)
}

export default Form
