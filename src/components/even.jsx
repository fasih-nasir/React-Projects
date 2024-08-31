
import { useState } from 'react';
function CheckNum() {
    let [num,setNum] = useState(0)
    let [res,setRes] = useState("")
    function fne(e){
      num=e.target.value;
      setNum(e.target.value)
      var arr=[" even "," odd"]
  var res=arr[num % 2 ]
      console.log(res);
  if(num){
      setRes(res)
      document.getElementById("h5").innerHTML=`${num} is ${res}`
  }
  else{
    document.getElementById("h5").innerHTML=`Result`

  }
    }
    function fn(){
    var name=document.getElementById("name");
    console.log(name.value);
    
  }
    return(
  <>

  <div className="container-fluid even m-0 p-0 d-flex justify-content-center align-items-center flex-column" >
<div className='col-10 col-lg-5 d-flex justify-content-center flex-column box align-items-center'>
<h3>Even/Odd Checker</h3>
  <input type="number" name=""  className='col-lg-8 col-8' id="name" placeholder='Enter Your Number' onInput={fne}/>
    
      <h5 id='h5'>Result</h5>
      </div>
      </div>
      </>
    )
  }
  export default CheckNum;