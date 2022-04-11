import styled from "styled-components";

export const GiveSugg = styled.h1`
  position: absolute;
  text-shadow: 2px 2px var(--lighter-gray);
  color: var(--primary);
  border-bottom: solid 1px var(--primary);
  cursor: pointer;
  

  @keyframes fadeIn {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

`;