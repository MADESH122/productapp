import { FaCartShopping } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import "./Components.css"

const Navbar = () => {
  return (
    <div className="nav">
        <div className="libtn">
            <p>Shop<TbTruckDelivery /></p>           
            <NavLink to="/Categories"><button>Categories</button></NavLink>
            <NavLink to="/"><button >Home</button></NavLink>
            <div className="inputs">
                <input id="search" placeholder="Search Products"></input>
                <i type="submit" id='sbtn'><FaSearch /></i>
            </div>
            <NavLink to="/Account"><button ><FaUserAlt /></button></NavLink>
            <NavLink to="/Cart"><button ><FaCartShopping /></button></NavLink>
        </div>
    </div>
)
}
export default Navbar