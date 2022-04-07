import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 1.5rem;
  }

  .logo {
    margin: 2rem;
    height: 2.3rem;
    object-fit: contain;
  }
  .mobile-nav-toggle {
    display: none;
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
  }

  @media (min-width: 35em) {
    html {
      font-size: 18px;
    }
  }
`;
