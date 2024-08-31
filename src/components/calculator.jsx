
import { useState } from 'react';
function Calculator(){
    var [table,setTable] = useState(0)
   function fn(e){
    table=e.target.value;
    setTable(table)
    var tab=document.getElementById("tab")
    tab.innerHTML=``;
    if(table){
    for(let i=0;i<=10;i++){
tab.innerHTML+=`<span> ${table}</span><span> X </span>${i} <span>= </span><span>${table*i}<BR></span>`
    }
}
else{
    tab.innerHTML=``;
}
    
   }
    return(
        <>
        <div className="container-fluid d-flex flex-column justify-content-center e1 align-items-center even">
<div className='col-lg-5 col-10 d-flex justify-content-center align-items-center flex-column'>
<h3 className='text-center'>Table Generator</h3>
<input type="number" placeholder='Enter Table Number' className='col-lg-10 col-10' onInput={fn} />
       <h4 id='tab' className='col-lg-10 py-3'></h4> 
       </div>
        </div>
        </>
    )
}
  export default Calculator;