import { useState, useEffect } from "react";
import axios from "axios";
import { StyledLogin } from "../components/styles/Login.styled";
import bgPng from "../assets/color-bg.png";

const Login = ({ userLogin }) => {
  const [user, setUser] = useState({});
  const [returnUserStatus, setReturnUserStatus] = useState(); // returning or new user

  useEffect(
    function initUser() {
      userLogin(user);
    },
    [user]
  );

  function handleSubmit(event) {
    event.preventDefault();
    const userInput = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      username: event.target.username.value,
    };
    checkUserStatus(userInput);
  }

  async function checkUserStatus(user) {
    try {
      let response = await axios.get(`/api/user/${user.username}`);
      console.log(`RETURNING USER ${response.data}`);
      if (response.data) {
        setUser(response.data);
        setReturnUserStatus(true);
      } else {
        registerUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function registerUser(user) {
    try {
      let response = await axios.post(`/api/user`, user);
      console.log(`NEW USER: ${response.data}`);
      setUser(response.data);
      setReturnUserStatus(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledLogin>
      <div className="content flex">
        <div className="login-container">
          <img className="login-bg" src={bgPng} alt="background image" />
          {returnUserStatus ?? (
            <div className="login-form-container flex">
              <div className="login-form flex">
                <h1>login</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="fname">first name:</label>
                  <input
                    type="text"
                    id="fname"
                    className="login-input"
                    name="fname"
                  />
                  <br />
                  <br />
                  <label htmlFor="lname">last name: </label>
                  <input
                    type="text"
                    id="lname"
                    className="login-input"
                    name="lname"
                  />
                  <br />
                  <br />
                  <label htmlFor="email">email:</label>
                  <input
                    type="email"
                    id="email"
                    className="login-input"
                    name="email"
                  />
                  <br />
                  <br />
                  <label htmlFor="lname">username: </label>
                  <input
                    type="text"
                    id="username"
                    className="login-input"
                    name="username"
                  />
                  <br />
                  <br />
                  <input type="submit" className="button" value="Submit" />
                </form>
              </div>
            </div>
          )}

          {returnUserStatus === true && (
            <h2 className="welcome">
              {" "}
              Welcome back,
              <br />
              {user.firstName}
            </h2>
          )}
          {returnUserStatus === false && (
            <h2 className="welcome">
              {" "}
              Welcome,
              <br />
              {user.firstName}
            </h2>
          )}
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
