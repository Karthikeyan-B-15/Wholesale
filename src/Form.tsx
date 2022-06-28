import React from 'react'
import  ReactDOM  from 'react-dom'
import './App.css'
import {  useAppSelector } from './hooks'
import { retailerData } from './RetailerData'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import ProductTable from './ProductTable'
function Form(props:any) {
    const value=useAppSelector(state=>state.text.inputText)
    const handleClick=(ind:any)=>{    
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
