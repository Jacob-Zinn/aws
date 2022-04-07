import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0 1rem;
  border-radius: 2em;
  border: solid 1px var(--primary);
  color: var(--primary);
  text-decoration: none;
  background-color: transparent;

  &:hover {
    background-image: var(--primary-gradient);
    text-decoration: none;
    background-image: var(--primary-gradient);
    color: white;
  }

  &:focus {
    outline: none;
  }

  p {
    margin-bottom: 0.14rem;
    padding: 0.1rem 0.3rem;
  }
`;
