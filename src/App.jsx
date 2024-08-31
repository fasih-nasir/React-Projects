import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CheckNum from "./components/even.jsx";
import Calculator from "./components/calculator.jsx";
import Calculator1 from "./components/calculator1.jsx";
import Todo from "./components/todo.jsx"
import Card from "./components/Card.jsx";



import img1 from "./assets/evenodd.png";
import img2 from "./assets/table.png";
import img3 from "./assets/cal.png";
import img4 from "./assets/card.png";
import "./App.css";

function App() {
  var [button1, setbutton] = useState("nothing");
  function fn(e) {
    document.getElementById("btnclic").style.display = "none";
    button1 = e;
    setbutton(button1)
   

  }
  return (
    <>
      <div className="container-fluid d-flex flex-row justify-content-center m-0 align-items-center ease  ">
        <div className="col-3 pt-5 div1">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-white">All Projects</h4>
            <img src={img3} className="col-10" alt="" />

            <button onClick={() => fn("Calculator1")}>Calculator</button>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={img2} alt="" className="col-10" />
            <button onClick={() => fn("Calculator")}> Table Generator</button>
          </div>
        
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={img4} alt="" className="col-10" />
            

            <button onClick={() => fn("Card")}>Card</button>
     
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={img1} alt="" className="col-10" />
            
            <button onClick={() => fn("CheckNum")}>Even / Odd</button>
        
          </div>

          {/* <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={img1} alt="" className="col-10" />
            
            <button onClick={() => fn("Todo")}>To-Do</button>
        
          </div> */}


        

        </div>
        <div className="col-9 ">
          <h1 className="text-center text-white " id="btnclic">
            Click A Buttons For Projects{" "}
          </h1>

          {button1 === "CheckNum" && <CheckNum />}
          {button1 === "Calculator" && <Calculator />}
          {button1 === "Calculator1" && <Calculator1 />}
          {button1 === "Todo" && <Todo />}
          {button1 === "Card" &&  <Card />}
        </div>
      </div>
    </>
  );
}
export default App;
