import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import './retail.css'
import EditIcon from '@mui/icons-material/Edit';
import { ProductData } from './ProductData';
let arr:any=ProductData.map((val:any)=>val)
function Retailer(props:any) {
  let add:any=0
 console.log(props.val)
 const [data,setData]=useState(props.val)
 const [edit,setEdit]=useState({id:0,bool:false})
  const inpChange=(e:any,i:number,id:number)=>{
    let temp:any;
    if(id===i){
      data.map((item:any)=>data.indexOf(item)===i?temp=arr.filter((val:any)=>item.prod===val.product):item)
    setData(
      data.map((item:any,index:number) => 
          item.id === i
          ?  {...item, qty: e.target.value,amt:temp[0].price*e.target.value} 
          : item
          )
  )
    }
  }
  const handleInput=(e:any)=>{
    e.target.value=Math.abs(e.target.value)
    e.target.value>50?e.target.value=50:
    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
}
  console.log(data)
  return (
    <div className='retailer'>
      <div className='view'>
      <h3>{props.data}</h3>
      <div className="ta">
      <TableContainer >
        <Table>
          <div className='thead'>
          <TableHead><TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Edit</TableCell>
            </TableRow></TableHead></div>
            <div className="tbody">
            <TableBody>
              {data.map((val:any,index:number)=>{return(
                  <TableRow>
                  <TableCell >
                    {val.prod}
                  </TableCell>
                  <TableCell >
                   {edit.bool&&edit.id===index?<input type="number" value={val.qty>1?val.qty:1} min="1" max="50"  onChange={(e)=>inpChange(e,index,data.map((obj:any)=>obj.id).indexOf(val.id))} onInput={handleInput}/>:<p>{val.qty}</p>}
                  </TableCell>
                  <TableCell >
                    {val.amt}
                  </TableCell>
                  <TableCell><Button onClick={()=>setEdit({id:index,bool:!edit.bool})}><EditIcon /></Button></TableCell>
                </TableRow>
              )})}
            </TableBody></div>
        </Table>
      </TableContainer>
      <p className="text">Total Amount{" "}:{data.forEach((val:any)=>add+=val.amt)}{" "}{add}</p>
      </div>
      </div>
    </div>
  )
}
export default Retailer