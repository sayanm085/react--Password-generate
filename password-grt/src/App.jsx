import './App.css'
import {useState,useCallback,useEffect } from 'react';

function App() {
  let[lenght,setlenght]=useState(8)
  let [uppercase, setuppercase]=useState(true)
  let [lowercase, setlowercase]=useState(false)
  let [numbers, setnumbers]=useState(true)
  let [symbols, setsymbols]=useState(false)
  let [password,setpassword]=useState("")
  let [button,setbutton]=useState()
  

  let Generatepassword=useCallback(()=>{
    let string="";
    let password="";
    
    if(uppercase) string+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(lowercase) string+="abcdefghijklmnopqrstuvwxyz"
    if(numbers) string+="0123456789"
    if(symbols) string+="!@#$%^&*()_+";

    for(let i=0; i<lenght;i++){
      password+=string.charAt(Math.floor(Math.random()*string.length))
    }
    
    setpassword(password)
    
  },[lenght,uppercase,lowercase,numbers,symbols,setpassword])

  useEffect(()=>{
    Generatepassword()
  },[lenght,uppercase,lowercase,numbers,symbols,button,Generatepassword])

  return (
    <>
       <div className="main">

         <div className="box">
    <div >
        <p className="title">Random Password Generated</p>
    </div>
    <div className="inputbox">
        <input className="input" type="text"  placeholder=""  value={password} readOnly />
    </div>
    <div className="sliderbox">
        <p className="lo">Password Lenght </p>
        <span id="slidervalue">{lenght}</span>
    </div>
     <input type="range" id="lengthslider"  min="4" max="20" value={lenght} onChange={(e)=>{setlenght(e.target.value)}}  />

     <div className="checkbox">
        <input type="checkbox" className="inputcheckbox"  id="uppercase" defaultChecked={uppercase} onChange={()=>[
          setuppercase((pre)=>!pre)
        ]}/>
        <label htmlFor="uppercase">Include Uppercase letters (A-Z)</label>
    </div>

    <div className="checkbox">
        <input type="checkbox" className="inputcheckbox" id="lowercase"defaultChecked={lowercase} onChange={()=>[
          setlowercase((pre)=>!pre)
        ]} />
        <label htmlFor="lowercase">Include Lowercase letters (a-z)</label>
    </div>

    <div className="checkbox">
        <input type="checkbox" className="inputcheckbox"  id="numbers" defaultChecked={numbers} onChange={()=>[
          setnumbers((pre)=>!pre)
        ]} />
        <label htmlFor="numbers">Include Numbers (0-9)</label>
    </div>

    <div className="checkbox">
        <input type="checkbox" className="inputcheckbox" id="symbols" defaultChecked={symbols} onChange={()=>[
          setsymbols((pre)=>!pre)
        ]}/>
        <label htmlFor="symbols">Include Symbols (!@#$%^&*)</label>
  </div>

    <div className="buttonbox">
        <button id="generate" onClick={()=>{
          setbutton((pre)=>!pre)
        }} >Generate Password</button>
    </div>
    </div>
</div>
    </>
  )
}

export default App
