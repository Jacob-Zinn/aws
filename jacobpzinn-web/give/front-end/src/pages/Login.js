import { useState, useEffect } from "react";
import axios from "axios";
import { StyledAuth } from "../components/styles/Authentication.styled";
import bgPng from "../assets/color-bg.png";
import { StyledButton } from "../components/styles/Button.styled";

const Login = ({ authUser, userLogin, userLogout }) => {
  const [success, setSuccess] = useState(false); // returning or new user
  const [forbiddenResponse, setForbiddenResponse] = useState(false);

  useEffect(
    function checkAuth() {
      if (authUser?.username) {
        setSuccess(true);
      }
    },
    [authUser]
  );

  function handleSubmit(event) {
    event.preventDefault();
    const userInput = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    loginUser(userInput);
  }

  async function loginUser(userInput) {
    try {
      let response = await axios.post(`/api/users/login`, { ...userInput });
      if (response.data) {
        userLogin(response.data.user);
        setSuccess(true);
      }
    } catch (error) {
      if (error.response.status === 403) {
        setForbiddenResponse(true);
      }
      console.log(error);
    }
  }

  async function logout() {
    try {
      await axios.delete("/api/users");
      userLogout();
      setSuccess(false);
    } catch (error) {
      userLogout();
      setSuccess(false);
    }
  }

  return (
    <StyledAuth>
      <div className="content flex">
        <div className="container">
          <img className="bg" src={bgPng} alt="background image" />
          {!success && (
            <div className="form-container flex">
              <div className="form flex">
                <h1>login</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="lname">username: </label>
                  <input
                    type="text"
                    id="username"
                    className="input"
                    name="username"
                  />
                  <br />
                  <br />
                  <label htmlFor="password">password: </label>
                  <input
                    type="password"
                    id="password"
                    className="input"
                    name="password"
                  />
                  <br />
                  <br />
                  <input type="submit" className="button" value="Submit" />
                </form>
                {forbiddenResponse && (
                  <p className="error-response">
                    username or password is incorrect
                  </p>
                )}
              </div>
            </div>
          )}

          {success && (
            <div className="welcome">
              <div>
                <h2>
                  Welcome back,<br />
                  {authUser?.firstName}
                </h2>
                <StyledButton onClick={logout}>
                  <p>logout</p>
                </StyledButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledAuth>
  );
};

export default Login;
