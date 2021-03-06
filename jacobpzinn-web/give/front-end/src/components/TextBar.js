import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { StyledTextBar } from "./styles/TextBar.styled";

const TextBar = ({ hintTextProp, insertText, returnType, returnInput }) => {
  const [hideText, setHideText] = useState(false);
  const [hintTextColor, setHintTextColor] = useState("var(--light-gray)");
  const [typingTimout, setTypingTimout] = useState(false);
  const [currInput, setCurrInput] = useState("");


  useEffect(function clearOnInsert() {
    if (insertText?.length ?? 0 > 0) setHideText(true)
  }, [insertText]);

  const hideHint = function () {
    setHideText(true);
  };

  function handleInput(input) {
    if (!hideText) setHideText(true)
    if (typingTimout) {
      clearTimeout(typingTimout)
    }

    setCurrInput(input)
    setTypingTimout(
      setTimeout(function() {
        returnInput(returnType, input)
      }
      , 500)
    )
  }


  return (
    <StyledTextBar style={{ color: hintTextColor }} onClick={hideHint}>
      {!hideText && <p className="hint">{hintTextProp}</p>}
      <span
        onInput={e => handleInput(e.target.innerText)}
        value={insertText}
        className="textarea"
        role="textbox"
        contentEditable
        suppressContentEditableWarning={true}
      >
        {insertText}
      </span>
    </StyledTextBar>
  );
};

TextBar.defaultProps = {
  hintTextProp: "i.e. you've got this",
};

TextBar.propTypes = {
  hintTextProp: PropTypes.string,
};

export default TextBar;
