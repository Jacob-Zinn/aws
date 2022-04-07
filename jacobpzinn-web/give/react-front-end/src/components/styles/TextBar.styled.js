import styled from "styled-components";

export const StyledTextBar = styled.p`
  border: none;
  font-size: 16px;
  outline: none;

  span {
    content: ${({ hintText }) => hintText};
  }

  .textarea {
    display: block;
    width: 100%;
    overflow: hidden;
    resize: both;
    padding: 6px 18px;
    border-radius: 30px;
    border: 1px solid var(--primary);
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

  .textarea[contenteditable]:empty::before {
    color: gray;
  }

  #from[contenteditable]:empty::before {
    content: "Jacob";
  }
`;
