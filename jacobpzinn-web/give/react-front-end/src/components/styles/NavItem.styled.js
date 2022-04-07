import styled, { css } from "styled-components";

/* INSPIRATION CONTENT */

export const NavItem = styled.li`
  padding-bottom: 0.5em;

  &:hover {
    border-bottom: var(--primary) 2px solid;
  }

  @media (max-width: 35em) {
    color: white;

    a {
      color: white;
    }

    ${({ isActive }) =>
      isActive &&
      css`
        border: none;
      `}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: var(--primary) 2px solid;
      font-weight: 800;
    `}
`;
