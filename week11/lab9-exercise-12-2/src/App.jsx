import './App.css'
import  Layout  from './components/Layout';
import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import PageNotFound from './components/NotFound';
const Welcome = lazy(() => import('./pages/Welcome'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;