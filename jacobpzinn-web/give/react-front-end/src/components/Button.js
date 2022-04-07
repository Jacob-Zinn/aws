import { click } from "@testing-library/user-event/dist/click";
import { StyledButton } from "./styles/Button.styled";

const Button = ({ clickFun }) => {
  return (
    <StyledButton id="previewBtn" className="button" onClick={clickFun}>
      <p>preview message</p>
    </StyledButton>
  );
};

export default Button;
