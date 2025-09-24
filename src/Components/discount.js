import "./Components.css"
import { Link } from "react-router-dom"

const Discount = () => {
  return (
    <div className='discount'>
      <div id="disvalue">
        Grab Upto 50% Off on Selected Products
        <div id="buynow">
          <Link to="/discountpg"><button>Buy Now</button></Link>
        </div>
      </div>
      <div id="disimg">
        <img id="onlineimg" src="https://png.pngtree.com/thumb_back/fw800/background/20250904/pngtree-rose-gold-perfume-bottle-surrounded-by-pink-powder-explosion-on-dark-image_18544522.webp" alt='Loading...'/>
      </div>
    </div>
  )
}
export default Discount