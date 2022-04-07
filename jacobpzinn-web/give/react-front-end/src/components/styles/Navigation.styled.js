import styled from "styled-components";

export const Navigation = styled.ul`
  display: flex;
  gap: var(--gap, 1rem);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  background-color: transparent;
  backdrop-filter: blur(0.6rem);

  @media (max-width: 35em) {
    position: fixed;
    inset: 0 0 0 40%;
    --gap: 2.5rem;
    background-color: hsl(0, 0%, 0%, 0.35);
    flex-direction: column;
    padding: min(30vh, 10rem) 2em;
    transition: transform 250ms ease-out;
    transform: ${({ openMobileMenu }) =>
      openMobileMenu ? "translateX(0%)" : "translateX(100%)"};
  }
`;
