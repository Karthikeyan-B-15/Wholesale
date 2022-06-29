import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import './retail.css'
import { grey } from '@mui/material/colors';
function Retailer(props:any) {
  let add:any=0
  return (
    <div className='retailer'>
      
      <div className='view'>
      <h3>{props.data}</h3>
      <div className="ta">
      <TableContainer >
        <Table>
          <div className='thead'>
          <TableHead><TableRow>
            <TableCell style={{color:grey[50]}}>Product</TableCell>
            <TableCell style={{color:grey[50]}}>qty</TableCell>
            <TableCell style={{color:grey[50]}}>Amount</TableCell>
            </TableRow></TableHead></div>
            <div className="tbody">
            <TableBody>
              {props.val.map((val:any)=>{return(
                  <TableRow>
                  <TableCell style={{color:grey[50]}}>
                    {val.prod}
                  </TableCell>
                  <TableCell style={{color:grey[50]}}>
                    {val.qty}
                  </TableCell>
                  <TableCell style={{color:grey[50]}}>
                    {val.amt}
                  </TableCell>
                </TableRow>
              )})}
            
            </TableBody></div>
        </Table>
      </TableContainer>
      <p>Total Amount:{props.val.forEach((val:any)=>add+=val.amt)}{add}</p>
      </div>
      </div>
    </div>
  )
}

export default Retailer