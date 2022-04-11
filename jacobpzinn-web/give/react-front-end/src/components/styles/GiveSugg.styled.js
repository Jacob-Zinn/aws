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

  /* transition: transform ease 1s; */
  /* 
  ${({ isEntry }) =>
    isEntry
      ? ` animation: fadeIn 900ms ease; `
      : `animation: fadeOut 1800ms ease; background-color: red;
  `} */
/* 
  ${({ isEntry }) => isEntry && ` animation: fadeOutIn 1800ms ease; `} */
/* 
  @keyframes fadeOutIn {
    0% {
      opacity: 100%;
    }

    50% {
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 100%;
      top: 0;
    }

    25% {
      opacity: 0%;
      top: 10rem;
    }

    100% {
      opacity: 0%;
      top: 0;
    }
  } */
`;

/* export const StyledTitle = styled.h1` ${({anim}) =>  css`animation:  2s ${keyframes `${anim}`} 1`}`;  */
// animation: 900ms ${keyframes `${fadeIn}`} 1;
