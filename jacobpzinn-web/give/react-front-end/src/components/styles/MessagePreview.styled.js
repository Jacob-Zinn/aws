import styled from "styled-components";

export const StyledMessagePreview = styled.div`
  display: flex;
  border: var(--primary) solid 1px;
  border-radius: 1rem;
  flex-direction: column;
  gap: var(--gap, 1rem);
  margin-top: 2.3rem;

  .intro {
    display: flex;
    border-radius: 1rem 1rem 0 0;
    justify-content: space-between;
    background-color: var(--primary-dark);
    color: white;
    height: 3em;
  }

  .intro p {
    margin: 0;
    margin-left: 1rem;
  }
  .center {
    justify-content: center;
  }

  img {
    object-fit: contain;
    width: 3em;
    margin-right: 1rem;
  }
  .whiteout {
    filter: brightness(0) invert(1);
  }

  .containing {
    padding: 1em;
  }

  .bottom-trim {
    border-radius: 0 0 1rem 1rem;
    height: 1rem;
    background-color: var(--primary-dark);
  }

  #canvas {
      position: relative;
      overflow: visible;
      height: 5rem;
      /* background-color: var(--primary); */
  }
`;
