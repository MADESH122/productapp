import { Link } from 'react-router-dom'
import Loading from '../Components/loading'
import { useEffect,useState } from 'react'
var storCata=[]
var storid=[]
const Categories = () => {

 const [getCatagories,setCatagorie]=useState([])
 useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((data)=>data.json())
    .then((data1)=>setCatagorie(data1.products))
    .catch((err)=>console.error(err))
  },[])

  function filterCata(){
     getCatagories.forEach((p) => {
        if (!storCata.includes(p.category)) {
          storCata.push(p.category);
          storid.push(p.id);
        }
      })
  }

  filterCata();
  return (
    <><h1 className="heading2">Popular Categories</h1>
    <div className='allCatagories'>
        {
          getCatagories.length > 0 ? (
            getCatagories.map((p) => {
              if (storid.includes(p.id)) {
                return(
                <Link to={`/CategoriPg/${p.category}`} key={p.id} className="product-link">
                <div className='sampleprod'>
                  <img src={p.thumbnail} alt='Loading...'></img>
                  <div className='cdetail'>
                   <h2>{p.category}</h2>
                   <p>{p.stock} Item Available</p>
                  </div>
                </div>
                </Link>
                )
              }
              return null;
            })
          ) : (
          <Loading/>
          )
        }
        <div className='Cataproduct'>
        </div>
      </div>
      </>
  )
}
export default Categories