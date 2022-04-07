import styled from "styled-components";

/* INSPIRATION CONTENT */

export const StyledInspiration = styled.main`
  display: flex;

  #inspiration-title-container {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0 0 0 0;
    z-index: 2;
  }

  .inspiration-title {
    flex-direction: column;
    --gap: 0.5rem;
    justify-content: flex-end;
    z-index: 1;
    height: 100%;
    width: 100%;
    padding: 0 0 2rem 2rem;
  }

  #story {
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  .hero {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .hero img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 40em) {
    .content {
      width: 80vw;
    }
    .inspiration-title h1 {
      font-size: 1.3rem;
    }
    .inspiration-title h4 {
      font-size: 0.8rem;
    }
  }
`;
