import { DialogContent, DialogTitle, Table } from '@material-ui/core'
import { MenuItem, Select, TableBody, TableCell, TableContainer, TableHead, TableRow,Button,TextField, Dialog,} from '@mui/material'
import React, { useState } from 'react'
import { ProductData } from './ProductData';
import './table.css'
import { useAppDispatch} from './hooks'
import { handleText } from './silce'
import { retailerData } from './RetailerData';


let add:any=0

let arr:any;
function ProductTable({handleClick,num}:any) {
    retailerData.map((data:any,index:number)=>{
            if(data.id===num){
                console.log(data.val)   
                data.val.length===0?arr=ProductData.map((val:any)=>val):data.val.map((val:any)=>arr=arr.filter((item:any)=>item.product!==val.prod))
                console.log(arr)
            }
        })
    const dispatch=useAppDispatch()
    const [check,setCheck]=useState(false)
    const [nums,setNums]=useState(0)
    const [ind,setInd]=useState<any|JSX.Element|JSX.Element[]>([{id:0,prod:arr[0].product,price:arr[0].price,qty:nums,amt:0}])
    dispatch(handleText({ind}))
    const handleProduct=(e:any,index:number,id:any)=>{
                ind.map((data:any)=>{
                    if(data.prod!==e.target.value){
                     setInd(ind.map((item:any) => ind.indexOf(item) === index? {...item, prod: e.target.value} : item
                    ))
                }
                    else{
                        // alert("Already Exit This Item")
                        setCheck(!check)
                        e.target.value="select"
                        setInd(ind.map((item:any) => ind.indexOf(item) === index? {...item, prod: e.target.value} : item))
                        

                    
                  }})
          add=0
    }
    const handleNumber=(e:any,i:number,id:any)=>{
        if(id===i){
            setInd(
            ind.map((item:any,index:number) => 
                item.id === i
                ?  {...item, qty: e.target.value,price:arr[index+1].price,amt:arr.filter((val:any)=>item.prod===val.product)[0].price*e.target.value} 
                : item
                )
        )}add=0  

    }
    console.log(ind)
     const handleRemove=(e:any,index:number)=>{
        add=0
        setInd(()=>(ind.filter( (val:any)=>val.prod!==ind[index].prod)))
    }
    const handleAddClick = () =>{
        add=0
        setInd((prevArr:any)=>(
                    [...prevArr,
                    {id:prevArr[prevArr.length-1].id+1,prod:arr[0].product,qty:0,price:0,amt:0}]
                ))         
        }
  return (
    <div className="table">
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                    
                    <TableCell >Product</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>      
                {ind&&ind.map((data:any,index:number)=>{
            return(
            <TableRow key={data.id}>
                <TableCell>
                    <Select value={data.prod} onChange={(e)=>handleProduct(e,index,ind.map((obj:any)=>obj.id).indexOf(data.id))}>
                        {
                        arr.map((val:any)=>(<MenuItem value={val.product} key={val.id}>{val.product}</MenuItem>))
                        }
                    </Select>
                </TableCell>
                <TableCell>
                    <TextField  type="number" value={data.qty} inputProps={{min:0,max:50}} onChange={(e:any)=>{handleNumber(e,index,data.id)}} />
                </TableCell>
                <TableCell>{ProductData.map((val:any)=>{
               return  val.product===data.prod?val.price:""
                })}
                </TableCell>
                <TableCell>
                {ind[index].amt}
                </TableCell>
                <TableCell><Button onClick={(e:any)=>handleRemove(e,index)}>DEL</Button></TableCell>
           </TableRow>
        )
      }) }
      </TableBody>
     </Table>
</TableContainer>
        Total Amount:{ind.forEach((item:number,index:number)=>add+=ind[index].amt)}{add/2}
        <Button onClick={handleAddClick}>Add</Button>
        <Button onClick={e=>handleClick(ind,arr)}>Submit</Button>
        <Dialog open={check}>
            <DialogTitle>Warn</DialogTitle>
            <DialogContent>Already Exits this product in cart</DialogContent>
            <Button onClick={()=>setCheck(!check)}>OK</Button>
        </Dialog>
    </div>
  )
  
}

export default ProductTable

