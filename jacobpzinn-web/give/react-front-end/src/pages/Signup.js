import { useState, useEffect } from "react";
import axios from "axios";
import { StyledAuth } from "../components/styles/Authentication.styled";
import bgPng from "../assets/color-bg.png";
import { StyledButton } from "../components/styles/Button.styled";

const Signup = ({ authUser, userLogin, userLogout }) => {
  const [success, setSuccess] = useState(false); // returning or new user
  const [forbiddenResponse, setForbiddenResponse] = useState(false);
  const [badRequest, setBadRequest] = useState(false);

  useEffect(function checkAuth() {
    if (authUser?.username) {
        setSuccess(true);
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const userInput = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    registerUser(userInput);
  }

  async function registerUser(userInput) {
    try {
      let response = await axios.post(`/api/users/`, { ...userInput });
      userLogin(response.data.user);
      setSuccess(true);
    } catch (error) {
      if (error.response.status === 403) {
        setForbiddenResponse(true);
        setBadRequest(false);
      }
      if (error.response.status === 400) {
        setBadRequest(true);
        setForbiddenResponse(false);
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
                <h1>signup</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="fname">first name:</label>
                  <input
                    type="text"
                    id="fname"
                    className="input"
                    name="fname"
                  />
                  <br />
                  <br />
                  <label htmlFor="lname">last name: </label>
                  <input
                    type="text"
                    id="lname"
                    className="input"
                    name="lname"
                  />
                  <br />
                  <br />
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
                  <p className="error-response">username already exists</p>
                )}
                {badRequest && (
                  <p className="error-response">
                    please fill the missing information
                  </p>
                )}
              </div>
            </div>
          )}

          {success && (
            <div className="welcome">
              <div>
                <h2>
                  Welcome,
                  <br />
                  {authUser.firstName}
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

export default Signup;
