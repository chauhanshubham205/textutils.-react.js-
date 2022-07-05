import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('you click on uppercase'+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase", "success");
  };
  const handleLoClick = () => {
    // console.log('you click on uppercase'+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCrClick = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter Your Text"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCrClick}>
          Clear Text Area
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length - 1} and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} minutes</p>
        <h3>preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above text area to preview text"}
        </p>
      </div>
    </>
  );
}
