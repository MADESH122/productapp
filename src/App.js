import Navbar from './Components/navbar.js';
import Cart from './pages/Cart.jsx';
import Home from './pages/home.jsx';
import Account from './pages/Account.jsx';
import Discountpg from './pages/discountpg.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductDetail from './pages/ProductDetail.jsx';
import Categories from './pages/Categories.jsx';
import CategoriPg from './pages/categoriPg.jsx';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Account' element={<Account/>}></Route>
          <Route path='/Discountpg' element={<Discountpg/>}></Route>
          <Route path='/Categories' element={<Categories/>}></Route>
          <Route path='/product/:id' element={<ProductDetail/>}></Route>
          <Route path='/CategoriPg/:category' element={<CategoriPg/>}></Route>
          <Route path='*' element={<Home />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
