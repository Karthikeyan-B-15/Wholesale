import React, { useState } from 'react'
import  ReactDOM  from 'react-dom'
import './App.css'
import {  useAppSelector } from './hooks'
import { retailerData } from './RetailerData'
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import ProductTable from './ProductTable'
function Form(props:any) {
    const value=useAppSelector(state=>state.text.inputText)
    const [check,setCheck]=useState(false)
    const handleClick=(ind:any,arr:any)=>{    
    retailerData.map((data)=>{
      if(data.id===props.num){
        value.map((val)=>data.val.push(val))
        ind.map((item:any)=>arr=arr.filter((val:any)=>item.prod!==val.product))
      
        return arr
      }
    })
     if(ind.every((val:any)=>val.qty>0)){
      props.close(false)
    }
     else{
      setCheck(!check)
      retailerData.map((data:any)=>data.val=[])
    }
    
    }
  return ReactDOM.createPortal( 
  <div className='form'>
    <Dialog open >
      <DialogTitle><div className='title'><h2>Form</h2><button onClick={()=>props.close(false)}>X</button></div></DialogTitle>
      <DialogContent>
        <ProductTable handleClick={handleClick} num={props.num}/>
      </DialogContent>
    </Dialog>
    <Dialog open={check}>
      <DialogTitle>Warn</DialogTitle>
      <DialogContent>Cannot Submit without quantity</DialogContent>
      <Button onClick={()=>setCheck(!check)}>Ok</Button>
    </Dialog>
    </div>,document.body)
}

export default Form
