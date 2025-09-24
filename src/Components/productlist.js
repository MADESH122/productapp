import { useState,useEffect} from "react";
import "./Components.css";
import Loading from "./loading";
import {useDispatch} from "react-redux";
import { setButtonValue } from "../Slice/Slice.js";
import {Link} from "react-router-dom";

const Productlist = () => {

  const dispach=useDispatch();
  const [product,setproduct]=useState([]);

  const handelClick=(e)=>{
    dispach(setButtonValue(e.target.value))
  }

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>setproduct(data.products))
    .catch((err)=>console.log(err))
  },[]);

  return (
    <div className="listimg">
      {product.length > 0?(
        product.map((p)=>(
          <div className="images" key={p.id}>
            <Link to={`/product/${p.id}`}>
              <img src={p.thumbnail} alt={p.title}/>
            </Link>
            <div className="pdetail">
              <div className="price">
               <p>{p.title}</p>
               <p> ${p.price}</p>
              </div>
              <p>{p.tags[0]}{p.tags[1]? " , " + p.tags[1] :''}</p>
              <button value={p.id} onClick={handelClick} className="addcart">Add to Cart</button>
            </div>
          </div>
        ))        
      ):(
        <Loading/>
      )}
    </div>
  )
}
export default Productlist