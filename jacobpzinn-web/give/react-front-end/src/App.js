import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gift from "./pages/Gift";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({}); // firstName, lastName, username

  useEffect(
    function initUser() {
      async function restoreUser() {
        try {
          let response = await axios.get("/api/users");
          setUser(response.data.user);
        } catch (error) {
          console.log(error)
          setUser(null);
        }
      }

      restoreUser();
    },
    []
  );

  function login(user) {
    setUser(user);
  }

  function logout() {
    setUser(undefined);
  }

  return (
    <div className="page flex">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/index.html" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/profile" element={<Profile authUser={user} />} />
          <Route
            path="/login"
            element={
              <Login authUser={user} userLogin={login} userLogout={logout} />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup authUser={user} userLogin={login} userLogout={logout} />
            }
          />
          <Route path="gift/:id" element={<Gift />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
