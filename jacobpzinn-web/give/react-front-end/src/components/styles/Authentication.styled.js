import styled from "styled-components";

export const StyledAuth = styled.main`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;

  .container {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .bg {
    position: absolute;
    inset: 0 0 0 0;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container::after {
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

  .form-container {
    position: absolute;
    inset: 0 0 0 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    justify-content: center;
    align-items: center;
  }

  .form {
    justify-content: center;
    flex-direction: column;
  }

  .input {
    background-color: transparent;
    border-radius: 1rem;
    border: 1px var(--dark-gray) solid;
    padding: 0 0.5rem;
    margin-left: 0.3rem;
  }

  .input:focus-within {
    outline-color: var(--primary);
  }

  .input:focus-within,
  .input:hover {
    box-shadow: 1px 1px 8px 1px var(--light-gray);
  }

  .form .button {
    border-color: black;
    color: black;
    padding: 0.1rem 0.5rem;
  }

  .button:hover {
    color: white;
    cursor: pointer;
    border-color: white;
  }

  .error-response {
    color: red;
    z-index: 100;
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
