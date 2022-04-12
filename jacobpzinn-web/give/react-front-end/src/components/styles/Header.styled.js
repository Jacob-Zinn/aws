import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  img {
    height: 1.5rem;
  }

  .logo {
    margin: 2rem;
    height: 2.3rem;
    object-fit: contain;
  }

  .profile {
    margin: 2rem;
    background-color: var(--primary);
    object-fit: contain;
  }

  .mobile-nav-toggle {
    display: none;
  }

  nav {
    width: 100%;
  }

  @media (max-width: 35em) {
    .mobile-nav-toggle {
      position: absolute;
      display: block;
      right: 3rem;
      top: 3rem;
      width: 2rem;
      border: 0;
      z-index: 9999;
    }

    .profile {
      display: none;
    }

    .profile-mobile {
      display: block;
      position: absolute;
      margin: 0;
      top: 3.3rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      right: 45%;
      z-index: 1000;
      animation: fadeIn 500ms ease;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0%;
      }
      50% {
        opacity: 0%;
      }
      100% {
        opacity: 100%;
      }
    }
  }

  @media (min-width: 35em) {
    html {
      font-size: 18px;
    }
  }
`;
