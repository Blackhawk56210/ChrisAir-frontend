import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import NavBar from './components/footer-header/Navbar';
import Footer from './components/footer-header/Footer'
import Support from './pages/Support';
import Checkout from './pages/Checkout';
import "./App.css";

function App() {
  return (
    <>
     <div className="App">
       <NavBar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Inventory" element={<Inventory />} />
         <Route path="/support" element={<Support />} />
       </Routes>
       <Checkout />
       <Footer />
     </div>
    </>
  );
}

export default App;