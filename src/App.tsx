import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import {retailerData}from './RetailerData'
import Retailer from './Retailer';
import { Provider } from 'react-redux';
 import {store} from './store';




function App(){
  const [dis,setDis]=useState<any>({id:0,check:false})
  
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
     {retailerData.map((data)=>{
         return <Retailer data={data.rname} val={data.val}/>
     })}
     </Provider>
    </div>
  );
}

export default App;
