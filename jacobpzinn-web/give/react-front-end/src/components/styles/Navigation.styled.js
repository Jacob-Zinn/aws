import styled from "styled-components";

export const Navigation = styled.ul`
  display: block;
  width: 100%;
  gap: var(--gap, 1rem);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  background-color: transparent;
  backdrop-filter: blur(0.6rem);

  .nav-row {
    display: flex;
    justify-content: space-between;
    gap: var(--gap, 1rem);
  }

  .nav-column {
    display: flex;
    gap: var(--gap, 1rem);
    flex-direction: column;

  }

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
