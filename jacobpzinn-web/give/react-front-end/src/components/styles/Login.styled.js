import styled from "styled-components";

export const StyledLogin = styled.main`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;

  .login-container {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .login-bg {
    position: absolute;
    inset: 0 0 0 0;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .login-container::after {
    position: absolute;
    height: 100%;
    border-radius: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.85);
    top: 0;
    left: 0;
    display: block;
    content: "";
  }

  .login-form-container {
    position: absolute;
    inset: 0 0 0 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    justify-content: center;
    flex-direction: column;
  }

  .login-input {
    background-color: transparent;
    border-radius: 1rem;
    border: 1px var(--dark-gray) solid;
    padding: 0 0.5rem;
    margin-left: 0.3rem;
  }

  .login-input:focus-within {
    outline-color: var(--primary);
  }

  .login-input:focus-within,
  .login-input:hover {
    box-shadow: 1px 1px 8px 1px var(--light-gray);
  }

  .login-form .button {
    border-color: black;
    color: black;
    padding: 0.1rem 0.5rem;
  }

  .welcome {
    height: 100%;
    position: relative;
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    color: var(--primary-dark);
    /* transition: opacity ease 900ms; */
    animation: fadeIn 1300ms ease;

    @keyframes fadeIn {
      0% {
        opacity: 0%;
      }
      100% {
        opacity: 100%;
      }
    }
  }
`;
