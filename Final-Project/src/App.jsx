import './App.css'
import { GetProducts } from './productsApi';
import { RenderGuitarSpecs } from './pages/ProductsPage';
import { Details} from './pages/ProductDetailPage';
import { Routes, Route, Link } from 'react-router-dom';

function NavBar(){
  return(
    <nav>
          <Link to='/products'>View Our Guitars</Link>
          <Link to='/'>Home</Link>
    </nav>

  )
}

function HomePage(){
 return (
    <>
      <h1>Shannon's Guitar Shop</h1>
    </>
 )
 }


function App() {
  return (
    <>
    <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<RenderGuitarSpecs />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
          
      
    </>

  )
}

export default App


