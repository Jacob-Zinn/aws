import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page flex">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/index.html" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
