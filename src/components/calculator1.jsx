import { useState } from 'react'


function Calculator1(){

    let [num,setNum] = useState(" ")
    let [ans,setAns] = useState(" ")
    
  
    function fn(num){
   

   setNum(prev => prev + num)


  
  
  }
   function eq(){
     let ans= eval(num);
     


     setNum(num)
     setAns(ans)

    //  console.log(ans);
   
   
     
   }
   function clearOnce(){
     let clearonce=num.slice(0,-1);
    
 
     
     setNum(clearonce)

   }
   function clearAll(){
     // let clearonce=num.slice(0,-1);
     setNum("")
     setAns("")
   }
    return(
    <>
<div className="d-flex flex-column m-auto col-lg-4 col-10 even1">
  <div className="mb-3 divin col-11 m-auto">
    <input type="text" className="form-control mb-2 col-2" value={num} readOnly />
<input type="text" className="form-control pl-5 col-2 fgh" value={  ans} readOnly />
  </div>

  <div className="d-flex flex-column m-auto">
    <div className="mb-2">
      <button className="btn btn-light border  text-center me-2" onClick={clearAll}>AC</button>
      <button className="btn btn-light border me-2" onClick={clearOnce}>CE</button>
      <button className="btn btn-light border me-2" onClick={() => fn('+')}>+</button>
      <button className="btn btn-light border" onClick={() => fn('%')}>%</button>
    </div>
    <div className="mb-2">
      <button className="btn btn-light border me-2" onClick={() => fn('7')}>7</button>
      <button className="btn btn-light border me-2" onClick={() => fn('8')}>8</button>
      <button className="btn btn-light border me-2" onClick={() => fn('9')}>9</button>
      <button className="btn btn-light border" onClick={() => fn('/')}>/</button>
    </div>
    <div className="mb-2">
      <button className="btn btn-light border me-2" onClick={() => fn('4')}>4</button>
      <button className="btn btn-light border me-2" onClick={() => fn('5')}>5</button>
      <button className="btn btn-light border me-2" onClick={() => fn('6')}>6</button>
      <button className="btn btn-light border" onClick={() => fn('*')}>X</button>
    </div>
    <div className="mb-2">
      <button className="btn btn-light border me-2" onClick={() => fn('1')}>1</button>
      <button className="btn btn-light border me-2" onClick={() => fn('2')}>2</button>
      <button className="btn btn-light border me-2" onClick={() => fn('3')}>3</button>
      <button className="btn btn-light border" onClick={() => fn('-')}>-</button>
    </div>
    <div>
      <button className="btn btn-light border me-2" onClick={() => fn('0')}>0</button>
      <button className="btn btn-light border me-2" onClick={() => fn('.')}>.</button>
      <button className="btn btn-light border me-2 eq" onClick={eq}>=</button>
    </div>
  </div>
</div>

    </>
    )
}
export default Calculator1;