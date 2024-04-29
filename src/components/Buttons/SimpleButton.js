import React from "react";
import "components/Buttons/Buttons.css";
const SimpleButton = ({
  background,
  height,
  width,
  margin,
  padding,
  text,
  color,
  fontFamily,
  fontSize,
  textAlign,
  onSubmit,
  textMargin,
  textPadding,
  border,
}) => {
  return (
    <button
      style={{
        background: background,
        height: height,
        width: width,
        margin,
        padding,
        border: border,
      }}
      type="submit"
      className="btn btn-primary button-simple"
      onClick={(event) => onSubmit(event)}
    >
      <p
        style={{
          color: color,
          fontFamily: fontFamily,
          fontSize: fontSize,
          textAlign: textAlign,
          margin: textMargin,
          padding: textPadding,
        }}
      >
        {text}
      </p>
    </button>
  );
};

export default SimpleButton;
