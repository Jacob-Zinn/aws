import styled, { css, keyframes } from "styled-components";
import { fadeIn, fadeOutDown } from "react-animations";

export const GiveSugg = styled.h1`
  position: absolute;
  text-shadow: 2px 2px var(--lighter-gray);
  color: var(--primary);
  border-bottom: solid 1px var(--primary);
  cursor: pointer;
  animation: ${({ isEntry }) =>
    isEntry
      ? css`900ms ${keyframes `${fadeIn}`} 1`
      : css`900ms ${keyframes `${fadeOutDown}`} 1`};
`;

/* export const StyledTitle = styled.h1` ${({anim}) =>  css`animation:  2s ${keyframes `${anim}`} 1`}`;  */
