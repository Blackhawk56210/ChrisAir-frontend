import "./App.css";
import Home from "./pages/Home.jsx";
import Inventory from "./pages/Inventory";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/footer-header/Navbar.jsx";
import Footer from "./components/footer-header/Footer.jsx";
import Support from "./pages/Support.jsx";
import Checkout from "./pages/Checkout.jsx"


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
