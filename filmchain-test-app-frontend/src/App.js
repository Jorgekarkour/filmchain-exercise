import Navbar from "./components/Navbar/Navbar";
import Wallet from "./pages/Wallet";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/wallet/:id" element={<Wallet />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
