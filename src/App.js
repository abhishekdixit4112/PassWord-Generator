import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [upperCase,setUppercase]=useState(false);
  let [lowerCase,setLowercase]=useState(false);
  let [symbol,setSymbol]=useState(false);
  let [number,setNumber]=useState(false);
  let [passlength,setPasslength]=useState();
  let [fpass,setFpass]=useState('');

 let createPassword=()=>{
  let finalPass='';
  let charset="";
  
  if(upperCase||lowerCase||symbol||number){
    if(upperCase)charset+=UC;
    if(lowerCase)charset+=LC;
    if(number)charset+=NC;
    if(symbol)charset+=SC;
     
    if(passlength<8){
      toast.warning("Password Must Be Of Eight Length!!!  ")
    }
    else if(passlength>20){
      toast.warning("Your Password Is Too Long!!!")
    }
    else{
    for(let i=0;i<passlength;i++){
      finalPass+=charset.charAt(Math.floor(Math.random()*charset.length));
    }
    setFpass(finalPass);
   
  }
}
  else{
    if(upperCase===false && lowerCase===false && symbol===false &&number===false && passlength===''){
    toast.error("Please select Aleast one checkbox And PassWord Length......");
    }
    else{
      toast.error("Please select one checkbox....")
    }
  }
 
  }
  

  let copyPass=()=>{
    if(fpass.length>0){
      navigator.clipboard.writeText(fpass);
       toast.success("Congrats PassWord Is Copied!!!");
    }
    else{
    toast.error("Please Select Aleast One Checkbox...");
    }
    setFpass('');
     setLowercase(false);
    setUppercase(false);
    setNumber(false);
    setSymbol(false);
    setPasslength('');

  }


  return (
   <>
    <ToastContainer />
   <div className="passwordBox">
    <h2 className='heading'>PassWord Generator</h2>
    <div className="passwordboxin">
      <input type="text" value={fpass} readOnly /> <button className="btn" onClick={copyPass}>copy</button>
    </div>
    <div className="passlength">
      <label>Password Length</label>
      <input type="number" max={20} min={8} value={passlength||''} onChange={(event)=>setPasslength(event.target.value)}/>
    </div>
      <div className="passlength">
      <label>Include UpperCase</label>
      <input type="checkBox" checked={upperCase} onChange={()=>setUppercase(!upperCase)} />
    </div>
    <div className="passlength">
      <label>Include LowerCase</label>
      <input type="checkBox" checked={lowerCase} onChange={()=>setLowercase(!lowerCase)}/>
    </div>
     <div className="passlength">
      <label>Include Numbers</label>
      <input type="checkBox" checked={number} onChange={()=>setNumber(!number)}/>
    </div>
     <div className="passlength">
      <label>Include symbol</label>
      <input type="checkBox" checked={symbol} onChange={()=>setSymbol(!symbol)}/>
    </div>
    <button className='btn' onClick={createPassword}>Generate Password</button>
   </div>
    
   </>
  );
}

export default App;
