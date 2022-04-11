import styled from "styled-components";

export const StyledProfile = styled.main`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  gap: var(--gap, 1rem);

  .profile-info-container {
    flex-direction: column;
  }

  .profile-info {
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    margin-top: 3rem;
  }

  .profile-photo-container {
    width: 100%;
    justify-content: center;
  }

  .profile-photo {
    width: min(20vw, 10rem);
    aspect-ratio: 1;
    object-fit: scale-down;
    border-radius: 50%;
    background-color: var(--primary-dark);
  }

  .field-title {
    display: inline;
    font-size: 0.9rem;
    border-bottom: 1px var(--gray) solid;
  }

  .message {
    flex-direction: column;
    border: 1px solid var(--light-gray);
    border-radius: 0.7rem;
    margin: 1rem 0;
  }

  .message p {
    margin: 1rem 0.5rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

  }

  .grid-item {
  }
`;
