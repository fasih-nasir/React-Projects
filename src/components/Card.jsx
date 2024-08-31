import { useEffect, useState } from "react";

function Card(){

    const [product, setproduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [SearchProducts, setSearchProducts] = useState([]);

    useEffect(() => {

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then((data)=>{
dat(data)
    var selArr=["All"]
data.map((e)=>{
    if(selArr.indexOf(e.category) === -1 )
   selArr.push(e.category)
    
})


var sel=document.getElementById("sel");
sel.innerHTML=``
selArr.forEach((e)=>{

    sel.innerHTML+=`
                   
                   <option value="${e}">${e}</option>
    
    `
})

    
    setproduct(data ||[])
    setFilteredProducts(data || [])
    setSearchProducts(data || [])

})
.catch((e)=>console.log(e)
)
;

    }, []); 

    function fil(e){
       var selcae=e.target.value;

        if(selcae === "All"){
            setFilteredProducts(product)
        }
      
        else{
            var filterPro=product.filter((p)=> p.category === selcae)
            // console.log(filterPro);
            
            setFilteredProducts(filterPro)
        }
        
    }
    function dat(e){

        
    }
    return(
        <>
        <div className="col-12 d-flex">
         
            <div className="col-11  d-flex justify-content-center inpdi">
                    <select name="" id="sel" className="col-5 my-2" key={product.key} onChange={fil}>
                    <option value="" selected disabled >Categories</option>
              
              
                </select>
            </div>
        </div>
        <div className="m-auto carddiv text-white container-fluid">
           
                       <div  className="d-flex flex-wrap justify-content-between">
{filteredProducts.map((e)=>(
    
<div key={e.id} className="box col-md-4 my-2 d-flex flex-column justify-content-center align-items-center text-center">

<img src={e.image}   key={e.id} alt="" className="" />
    <p key={e.id} className="col-11 tit  text-truncate"> {e.title}</p>
    <p key={e.id} className="col-11 text-truncate ">{e.category    }</p>
    <p key={e.id} className="col-4 tit text-truncate">{e.price}</p>

    </div>

    
))}
</div>
        </div>

        {/* <button onClick={() => setCount(count + 1)} className="btn border border-3 text-white">Increment</button> */}
    </>
    )
}

export default Card;