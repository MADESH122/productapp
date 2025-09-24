import Discount from "../Components/discount"
import Loading from "../Components/loading";
import { useEffect,useState } from "react"
import { CiDiscount1 } from "react-icons/ci";
import "./styles.css"
const Discountpg = () => {
  
  const[disProduct,setdisProduct]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((data)=>data.json())
    .then((data1)=>setdisProduct(data1.products))
    .catch((err)=>{console.error(err)})
  },[]);
  
  return (
    <>
      <Discount/>    
        <div className="displayoff">More then 10<CiDiscount1 /> Discount</div>
      <div className="offers">
        {disProduct.length > 0 ?(
          disProduct.map((d)=>(
            <div className="" key={d.id}>
              {d.discountPercentage > 10 && d.category ==="fragrances"?
              <div className="disimg">
                <img src={d.thumbnail} alt={d.title}></img>
                <div className="disdetail">
                  <p>{d.title}</p>
                  <p>Discount : {d.discountPercentage} %</p>
                  <button  className="addcart">Add to Cart</button>
                </div>
              </div>:(" ")
              }
            </div>
          ))
        ):(
        <Loading/>
        )}
      </div>
    </>
  )
}
export default Discountpg