import { Table } from '@material-ui/core'
import { MenuItem, Select, TableBody, TableCell, TableContainer, TableHead, TableRow,Button,TextField } from '@mui/material'
import React, {  useState } from 'react'
import { ProductData } from './ProductData';
import './table.css'
import { useAppDispatch} from './hooks'
import { handleText } from './silce'
let add:any=0
let temp:any=0
function ProductTable({handleClick}:any) {
    const dispatch=useAppDispatch()
    const [check,setCheck]=useState(false)
    const [nums,setNums]=useState(0)
    let [ind,setInd]=useState<any>([{id:0,prod:"Milk Bikis",qty:nums,amt:0}])
    dispatch(handleText({ind}))
    console.log(nums)
    const handleProduct=(e:any,index:number,id:any)=>{
                    setInd(
                        ind.map((item:any) => 
                            item.id === index 
                            ? {...item, prod: e.target.value} 
                            : item 
                    ))
                     setCheck(ps=>!ps)
                     add=0
    }
    ind.map((item:any)=>{ProductData.map((val:any)=>val.product===item.prod?temp=(val.price*item.qty+val.price):"")})
    const handleNumber=(e:any,index:number,id:any)=>{
        if(id===index){
        add=0
        setInd(
            ind.map((item:any) => 
                item.id === index 
                ? {...item, qty: e.target.value,amt:temp} 
                : item 
        ))}
    }
    const handleRemove=(e:any,index:number)=>{
        add=0
        setInd(()=>(ind.filter( (val:any)=>val.prod!==ind[index].prod)))
    }
    const handleAddClick = () =>{
        setInd((prevArr:any)=>(
                    [...prevArr,
                    {id:prevArr[prevArr.length-1].id+1,prod:"Milk Bikis",qty:0,amt:0}]
                ))
                 add=0
                 
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
            
            <Select value={data.prod} onChange={(e)=>handleProduct(e,index,ind.map((obj:any)=>obj.id).indexOf(data.id))}>
                {ProductData.map((data)=>(
                <MenuItem value={data.product} key={data.id}>{data.product}</MenuItem>
                ))}
        </Select>
         </TableCell>
           <TableCell>
            <TextField  type="number" value={data.qty} inputProps={{min:0,max:50}} onChange={(e:any)=>handleNumber(e,index,data.id)}/>
            </TableCell>
            <TableCell>{ProductData.map((val)=>{
               return  val.product===data.prod?val.price:""
      })}
            </TableCell>
            <TableCell>
       {ind[index].amt}
            </TableCell>
            <TableCell><Button onClick={(e)=>handleRemove(e,index)}>DEL</Button></TableCell>
           </TableRow>
        )
      }) }
      
                </TableBody>
            </Table>
        </TableContainer>
        Toatal Amount:{ind.forEach((item:number,index:number)=>add+=ind[index].amt)}{add/2}
        <Button onClick={handleAddClick}>Add</Button>
        <Button onClick={e=>handleClick(ind)}>Submit</Button>
        
    </div>
  )
  
}

export default ProductTable