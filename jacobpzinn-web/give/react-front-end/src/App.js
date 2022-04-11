import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Gift from "./pages/Gift";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({}); // firstName, lastName, username

  function login(user) {
    setUser(user)
  }

  return (
    <div className="page flex">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/index.html" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/profile" element={<Profile authUser={user}/>} />
          <Route path="/login" element={<Login userLogin={login}/>} />
          <Route path="gift/:id" element={<Gift />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
