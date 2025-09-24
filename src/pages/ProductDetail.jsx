import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/loading";

const ProductDetail = () => {
    const {id}=useParams();
    const [product,setProduct]=useState(null);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then((res)=>res.json())
        .then((res1)=>setProduct(res1))
        .catch((err)=>console.log(err))
    },[id]);
    
    if(!product){
        return <Loading/>
    }

    return (
        <div className="InfoPage">
          <div className="split">
           <div className="Image">
             <img src={product.images[0]} alt="loading..." />
           </div>
           <div className="Imageinfo">
             <div><h1>{product.title}</h1></div>
             <div><p>Description :{product.description}</p></div>
             <div><h2>Price : {product.price} $</h2></div>
             <div><h2>{product.discountPercentage}% discount</h2></div>
             <div><p>{product.availabilityStatus}</p></div>
             <div><p>Rating : {product.rating}</p></div>
           <div className="extraImg">
            {
              product.images.lenght !==1?(
                product.images.map((i)=>{
                  return <img src={i} key={product.id} alt="images Not Available"></img>
                })
              ):(null)
            }
           </div>
           <div>
              <button id='buybtn'>Buy Now</button>
              <button id='cartbtn'>Add to Cart</button>
            </div> 
           </div>
           </div>
           <div className="review">
             <h1>User Review</h1>
             {
                product.reviews.length >0?(
                    product.reviews.map((r)=>{
                       return <div key={r.rating} children className="userreview">
                        <p>Name: {r.reviewerName}</p>
                        <p>Comment : {r.comment}</p>
                        <p>Date : {r.date}</p>
                        <p>Email : {r.reviewerEmail}</p>
                        </div>
                    })
                ):(<p>Review Not Available</p>)
             }
           </div>
        </div>
  )
}
export default ProductDetail