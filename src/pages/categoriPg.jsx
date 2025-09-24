import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/loading";

const CategoriPg = () => {
    const {category}=useParams();
    const [getCatagories,setCatagorie]=useState([]);

        useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res)=>res.json())
        .then((res1)=>setCatagorie(res1.products))
        .catch((err)=>console.log(err))
    },[category]);

    if(!getCatagories){
        return <Loading/>
    }

    return (
        <div className="listimg">
            <div className="categoriname"><h1>{category}</h1></div>
            {getCatagories.length !==0 ?(

                getCatagories.map((e)=>{
                    return <div className="images" key={e.id}>
                       <div><img src={e.thumbnail} alt="No images Found"></img></div>
                       <div><p>{e.title}</p></div>
                       <div><p>${e.price}</p></div>          
                    </div>
             })
            ):(
                <Loading/>
            )
            }
        </div>
        )
}
export default CategoriPg