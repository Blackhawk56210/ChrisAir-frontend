import { Routes, Route } from "react-router-dom";
import HomePage from '.src/pages/HomePage';
import Inventory from '.src/pages/InventoryPage';
import NavBar from '.src/components/footer-header/NavBar';
import Footer from '.src/components/footer-header/NavFooter'
import Support from '.src/pages/SupportPage';
import "./App.css";

function App() {
  return (
    <>
     <div className="App">
       <NavBar />
       <Routes>
          <Route path="/" element={<HomePage />} />
         <Route path="/Inventory" element={<Inventory />} />
         <Route path="/support" element={<Support />} />
       </Routes>
       <Footer />
     </div>
    </>
  );
}

export default App;