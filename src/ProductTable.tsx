import { DialogContent, DialogTitle, Table } from '@material-ui/core'
import { MenuItem, Select, TableBody, TableCell, TableContainer, TableHead, TableRow,Button,TextField, Dialog,} from '@mui/material'
import React, { useState } from 'react'
import { ProductData } from './ProductData';
import './table.css'
import { useAppDispatch} from './hooks'
import { handleText } from './silce'
import { retailerData } from './RetailerData';

let arr:any=ProductData.map((val:any)=>val)
function ProductTable({handleClick,num}:any) {
    let add:any=0
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
    const [ind,setInd]=useState<any|JSX.Element|JSX.Element[]>([{id:0,prod:arr[0].product,price:arr[0].price,qty:nums,amt:0,array:arr,toggle:false}])
    dispatch(handleText({ind}))
    const handleProduct=(e:any,index:number,id:any)=>{
                ind.map((data:any)=>{
                    if(data.prod!==e.target.value){
                     setInd(ind.map((item:any) => ind.indexOf(item) === index? {...item, prod: e.target.value} : item
                    ))
                }
                    else{
                        setCheck(!check)
                        e.target.value="select"
                        setInd(ind.map((item:any) => ind.indexOf(item) === index? {...item, prod: e.target.value} : item)) 
                  }})
          add=0
    }
    const handleNumber=(e:any,i:number,id:any)=>{
        let temp:any;
        if(id===i){
            console.log(ind)
            ind.map((item:any)=>ind.indexOf(item)===i?temp=arr.filter((val:any)=>item.prod===val.product):item)
            console.log(temp[0]) 
            console.log(i)
            setInd(
            ind.map((item:any,index:number) => 
                item.id === i
                ?  {...item, qty:temp[0].product!=="select"? e.target.value:0,price:arr[index+1].price,amt:temp[0].price*e.target.value,toggle:true} 
                : item
                )
        )}add=0  
    }
    console.log(ind)
     const handleRemove=(e:any,index:number)=>{
        add=0
        if(ind.length>1){
        setInd(()=>(ind.filter( (val:any)=>val.prod!==ind[index].prod)))
        }
    }
    const handleAddClick = () =>{
        add=0
         if(ind.every((val:any)=>val.qty>0)){
                        ind.map((item:any)=>item.prod!=="select"?arr=arr.filter((val:any)=>item.prod!==val.product):item)
            setInd((prevArr:any)=>(
                [...prevArr,
                {id:prevArr[prevArr.length-1].id+1,prod:arr[0].product,qty:0,price:0,amt:0,array:arr,toggle:false}]
            ))
                }
        else{
            setInd(ind.map((item:any,index:number) => ind.indexOf(item) === index? {...item, toggle:true} : item))
        }        
        }
        const handleInput=(e:any)=>{
            e.target.value=Math.abs(e.target.value)
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
        }
        console.log(ind)
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
            <TableRow key={data.id} sx={{alignContent:"center"}}>
                <TableCell>
                    <Select value={data.prod} onChange={(e)=>handleProduct(e,index,ind.map((obj:any)=>obj.id).indexOf(data.id))}>
                        {
                        data.array.map((val:any)=>(<MenuItem value={val.product} key={val.id}>{val.product}</MenuItem>))
                        }
                    </Select>
                </TableCell>
                <TableCell>{
                  data.toggle?  <TextField error={data.qty==0?true:false} label={data.qty==0?"*Empty Qty":""}  type="number" value={data.qty} onInput={handleInput}  inputProps={{min:0,max:50,maxLength:2}} onChange={(e:any)=>{handleNumber(e,index,data.id)}} />
                  :<TextField   type="number" value={data.qty} inputProps={{min:0,max:50,maxLength:2}} onChange={(e:any)=>{handleNumber(e,index,data.id)}} onInput={handleInput}  />
                }
                </TableCell>
                <TableCell><p>{ProductData.map((val:any)=>{
               return  val.product===data.prod?val.price:""
                })}</p>
                </TableCell>
                <TableCell>
                <p>{ind[index].amt}</p>
                </TableCell>
                <TableCell><Button onClick={(e:any)=>handleRemove(e,index)}>DEL</Button></TableCell>
           </TableRow>
        )
      }) }
      </TableBody>
     </Table>
</TableContainer>
        Total Amount{" "}:{" "}{ind.forEach((item:number,index:number)=>add+=ind[index].amt)}{add}
        <Button onClick={handleAddClick}>Add</Button>
        <Button onClick={e=>handleClick(ind,arr,setInd,add)}>Submit</Button>

    </div>
  ) 
}
export default ProductTable

