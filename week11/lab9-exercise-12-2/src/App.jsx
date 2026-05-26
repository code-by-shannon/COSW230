import './App.css'
import  Layout  from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
  )
}

export default App;