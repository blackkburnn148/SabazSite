/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Companies from './pages/Companies';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="urunler" element={<Products />} />
          <Route path="sirketler" element={<Companies />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
