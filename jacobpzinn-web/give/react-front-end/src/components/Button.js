import PropTypes from "prop-types";
import { StyledButton } from "./styles/Button.styled";

const Button = ({ clickFun, cta }) => {
  return (
    <StyledButton id="previewBtn" className="button" onClick={clickFun}>
      <p>{cta}</p>
    </StyledButton>
  );
};

Button.propTypes = {
  clickFun: PropTypes.func.isRequired,
};

export default Button;
