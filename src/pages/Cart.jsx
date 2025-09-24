import { useState ,useEffect} from "react";
import {useSelector} from "react-redux";
// import Loading from "../Components/loading";

const Cart = () => {
  
  const filvalue=[]
  const saveValue=useSelector((state)=>state.button.value)
  
  const [getCart,setCart]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((data)=>data.json())
    .then((data1)=>setCart(data1.products))
    .catch((err)=>console.error(err))
  },[])
   
  const filterFun=()=>
  {
    saveValue.forEach((v) => {
      if(!filvalue.includes(v)){
        filvalue.push(Number(v))
      }
    });
  }
  filterFun();

  return (
    <div className="CartPage">
    {
      saveValue.length >0? (
        getCart.map((v)=>{
          if(filvalue.includes(v.id)){
            return(
              <div className='cart-product' key={v.id}>
                <img src={v.thumbnail} alt='Loading...'></img>
                <div className='cartdetail'>
                  <div><h1>{v.title}</h1></div>
                  <div><h1>Price : $ {v.price}</h1></div>
                  <div><p>{v.stock} Items In Stock</p></div>
                  <div><p>Discount : {v.discountPercentage}%</p></div>
                  <div><p>Category : {v.category}</p></div>
                  <div><p>Description : {v.description}</p></div>
                </div>
              </div>
            )
          }
          return null
        })
      ):(
        <>
        {/* <Loading/> */}
        <h2><center>No Products In Cart...</center></h2>
         </>
      )
    }
    </div>
  )
}

export default Cart