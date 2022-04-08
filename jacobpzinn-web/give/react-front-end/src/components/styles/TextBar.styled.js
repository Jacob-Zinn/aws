import styled from "styled-components";

export const StyledTextBar = styled.div`
  border: none;
  font-size: 16px;
  outline: none;
  margin-bottom: 1.2rem;
  .textarea {
    display: block;
    width: 100%;
    overflow: hidden;
    resize: both;
    color: black;
    padding: 6px 18px;
    border-radius: 30px;
    border: 1px solid var(--primary);
  }

  .hint{
    position: absolute;
    display: block;
    width: 100%;
    overflow: hidden;
    padding: 6px 18px;
    color: gray;
    z-index: -1;
  }

  .altborder {
    border: 1px solid var(--error);
  }

  .textarea:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }

  .textarea:focus-within {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
    outline: none;
  }
`;
