import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import {retailerData}from './RetailerData'
import Retailer from './Retailer';
import { Provider } from 'react-redux';
 import {store} from './store';
import './retail.css'




function App(){
  const [dis,setDis]=useState<any>({id:0,check:false})
  let add:any=0
  return (
    <div className="App">
      <div className='header'>
      <h2>Wholesale shop</h2>
      <div className='btn-container'>
     <button onClick={()=>setDis({id:1,check:!dis.check})}>Retailer 1</button>
     <button onClick={()=>setDis({id:2,check:!dis.check})}>Retailer 2</button>
     <button onClick={()=>setDis({id:3,check:!dis.check})}>Retailer 3</button>
     </div>
     </div>
     <Provider store={store}>
     {dis.check&&<Form num={dis.id} close={setDis}/>}
     <div className='retailer'>
     {retailerData.map((data)=>{
         return <Retailer key={data.id} data={data.rname} val={data.val}/>
     })}
     <p className='total'>{retailerData.map((data:any)=>{data.val.forEach((item:number,index:number)=>add+=data.val[index].amt)})}Total Amount{" "}:{" "}{add}</p>
     </div>
     </Provider>
     
    </div>
  );
}

export default App;
