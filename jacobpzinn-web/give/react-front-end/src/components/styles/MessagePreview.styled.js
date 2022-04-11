import styled from "styled-components";

export const StyledMessagePreview = styled.div`
  display: flex;
  border: var(--primary) solid 1px;
  border-radius: 1rem;
  flex-direction: column;
  gap: var(--gap, .5rem);
  margin-top: 2.3rem;
  width: 100%;

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

  .outro {
    padding: 0 1rem;
    margin: 0;
  }

  .outro p { 
    padding: 0;
    margin: 0;
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

  .message {
    padding:  0 1em;
    border: 0;
    margin: 0;
  }

  .message p {
    border: 0;
  }

  .bottom-trim {
    border-radius: 0 0 1rem 1rem;
    height: 1rem;
    background-color: var(--primary-dark);
  }

  #canvas {
      position: relative;
      overflow: visible;
      /* height: 2.2rem; */
      /* background-color: var(--primary-dark); */
  }
`;
