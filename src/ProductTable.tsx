import { Table } from '@material-ui/core'
import { MenuItem, Select, TableBody, TableCell, TableContainer, TableHead, TableRow,Button,TextField } from '@mui/material'
import { setUncaughtExceptionCaptureCallback } from 'process';
import React, { useState } from 'react'
import { ProductData } from './ProductData';
import './table.css'
let num=1
function ProductTable() {
    const [check,setCheck]=useState(false)
    const [product,setProduct]=useState("Milk Bikis")
    const [nums,setNums]=useState(0)

    let [ind,setInd]=useState<any>([{id:0,prod:"Milk Bikis",qty:nums}])
    console.log(product)
    
    const handleProduct=(e:any,index:number,id:any)=>{
        
            if(id===index){
                setProduct(ind[id].prod=e.target.value)
        
                
                console.log(ind[id].prod)
                
            }
            
     
        
    }
    const handleNumber=(e:any,index:number,id:any)=>{
        if(id===index){
        setNums(ind[id].qty=e.target.value)
        }
    }
    const handleRemove=()=>{
        
    }
    
    console.log(ind)
    const handleAddClick = () =>{

    setInd((prevArr:any)=>(
        [...prevArr,
        {id:num,prod:"Milk Bikis",qty:0}]
    )
    )
    
    
    // setProduct("Milk Bikis")
    num++
    }
    
  return (
    <div className="table">
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
      {ind.map((data:any,index:number)=>{
    
        return(
            <TableRow key={data.id}>
            <TableCell>
            
            <Select value={data.prod} onChange={(e)=>handleProduct(e,index,data.id)}>
                {ProductData.map((data)=>(
                <MenuItem value={data.product} key={data.id}>{data.product}</MenuItem>
                ))}
               
               
        </Select>
         </TableCell>
           <TableCell>
            <TextField  type="number" value={data.qty} inputProps={{min:0,max:50}} onChange={(e:any)=>handleNumber(e,index,data.id)}/>
           
            </TableCell>
            <TableCell>{ProductData.map((val)=>{
                return val.product===data.prod?val.price:""
            })}
            </TableCell>
            <TableCell>
            {ProductData.map((val)=>{
                return val.product===data.prod?val.price*data.qty:""
            })}
            </TableCell>
            <TableCell><Button onClick={handleRemove}>DEL</Button></TableCell>
           </TableRow>
        )
      }) }
      
                </TableBody>
            </Table>
        </TableContainer>
        <Button onClick={handleAddClick}>Add</Button>

    </div>
  )
}

export default ProductTable