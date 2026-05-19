import './App.css'
import  Layout  from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
    <Layout>

      <Routes>

        <Route path="/" element={<Welcome />} />

        <Route path="/products" element={<Products />} />

      </Routes>

    </Layout>
  )
}

export default App;