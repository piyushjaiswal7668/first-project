import React, {useState} from 'react'
export default function TextForm({showAlert,heading,bodyTheme,fontColor}) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        showAlert('Converted to upper case','success')

    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        showAlert('Converted to lower case','success')

    }
    const handleRevClick=()=>{
        let newText=text.split("").reverse().join("");;
        setText(newText);
        showAlert('Converted to reversed ','success')

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
const [text,setText]=useState('');

  return (
    <>
    <div className="container" >
    <h1>
        {heading}
    </h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor:bodyTheme,color:fontColor}} placeholder="Enter Text Here"></textarea>
</div>
<button className="btn btn-primary mx-1"style={{backgroundColor:bodyTheme,color:fontColor}}  onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" style={{backgroundColor:bodyTheme,color:fontColor}}  onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" style={{backgroundColor:bodyTheme,color:fontColor}}  onClick={handleRevClick}>Reverse Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
