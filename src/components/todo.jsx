import { useState } from "react";

function Todo(){
    const [arr, setArr] = useState([]);
    let [name,setName] = useState("")

    function save(){

    var name1=document.getElementById("name").value;

    setName(name1)
const newArr = [...arr];
        newArr.push(name1);
        setArr(newArr);

document.getElementById("name").value=""
}
    
    return(


        <>
<input type="text" placeholder="Enter Your Name" name="" id="name" />
        <button id="save" onClick={save}>Save</button>
        <div>
            <h3>  {arr.map((e, index) => (
                        <div key={index}>{e}</div>
                    ))}</h3>
        </div>
        </>
    )
}
export default Todo;