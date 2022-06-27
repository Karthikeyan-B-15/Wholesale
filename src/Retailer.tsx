import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import './retail.css'
function Retailer(props:any) {
  console.log(props.val.map((val:any)=>val.prod))
  return (
    <div className='retailer'>
      <div className='view'>
      <h3>{props.data}</h3>
      <TableContainer>
        <Table>
          <TableHead><TableRow>
            <TableCell>Product</TableCell>
            <TableCell>qty</TableCell>
            <TableCell>Amount</TableCell>
            </TableRow></TableHead>
            <TableBody>
              {props.val.map((val:any)=>{return(
                  <TableRow>
                  <TableCell>
                    {val.prod}
                  </TableCell>
                  <TableCell>
                    {val.qty}
                  </TableCell>
                  <TableCell>
                    {val.amt}
                  </TableCell>
                </TableRow>
              )})}
            
            </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  )
}

export default Retailer