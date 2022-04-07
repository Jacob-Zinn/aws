import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { StyledTextBar } from "./styles/TextBar.styled";

const TextBar = ({ hintTextProp, insertText }) => {
  const [hideText, setHideText] = useState(false);
  const [hintText, setHintText] = useState("");
  const [hintTextColor, setHintTextColor] = useState("var(--light-gray)");

  const clearHintText = function () {
    setHideText(true);
    setHintTextColor("black");
  };

  useEffect(() => {
    const getHintText = () => {
      if (insertText != null && insertText.length > 0) {
        clearHintText();
        setHintText(insertText);
      } else if (hideText) {
        setHintText("");
      } else {
        setHintText(hintTextProp);
      }
    };

    getHintText();
  }, [insertText, hintTextProp]);

  return (
    <StyledTextBar
      hintText={hintText}
      style={{ color: hintTextColor }}
      onClick={clearHintText}
    >
      <span
        className="textarea"
        role="textbox"
        contentEditable
        suppressContentEditableWarning={true}
      >
        {hintText}
      </span>
    </StyledTextBar>
  );
};

TextBar.defaultProps = {
  hintTextProp: "N/A",
};

TextBar.propTypes = {
  hintTextProp: PropTypes.string,
};

export default TextBar;
