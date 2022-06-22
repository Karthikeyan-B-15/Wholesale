import React, { useState } from 'react'
import  ReactDOM  from 'react-dom'
import './App.css'
import App from './App'
import { useAppDispatch, useAppSelector } from './hooks'
import { handleText } from './silce'
import { retailerData } from './RetailerData'
import { Dialog,Button , DialogContent, DialogContentText, DialogTitle,DialogProps } from '@mui/material'
import ProductTable from './ProductTable'

function Form(props:any) {
    const dispatch=useAppDispatch()
    const value=useAppSelector(state=>state.text.inputText)

    // dispatch(handleText({inptext}))
    const handleClick=(e:any)=>{
        
      
        
        console.log(value)
        retailerData.map((data)=>{
          if(data.id===props.num){
            data.val=value
            console.log(data.val)
          }
        })

        props.close(false)
        

    }
  
   
  return ReactDOM.createPortal( 
  <div className='form'>
    <Dialog open={props.close}>
      <DialogTitle>Form</DialogTitle>
      <DialogContent>
        <ProductTable/>
      </DialogContent>
      
      <Button onClick={handleClick}>submit</Button>
    </Dialog>
  
    </div>,document.body)
}

export default Form