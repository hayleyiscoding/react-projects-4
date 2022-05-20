import React from "react";
import rgbToHex from "./utils";

export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = React.useState(false);
  const bcg = rgb.join(",");
  //   const hex = rgbToHex(...rgb); Only need this function in the utils if there was no hex in the library
  const hexValue = `#${hexColor}`;
  return (
    <article
      className={`color ${index > 11 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Copied to Clipboard</p>}
    </article>
  );
}
