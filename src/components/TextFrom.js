import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked: " + text)
    let newText = " ";
    setText(newText);
    props.showAlert("Your text is cleared", "success")
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked: " + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () =>{
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("your text is copied", "success")
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/ [ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces have been removed from your text", "success")
  }

  const [text, setText] = useState(" ");
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
    <>
      <div className={`container text-${props.mode==='white'?'black':'white'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            id="myBox"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='white'?'white':'black', color:props.mode==='white'?'black':'white'}}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div className={`container my-3 text-${props.mode==='white'?'black':'white'}`} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
