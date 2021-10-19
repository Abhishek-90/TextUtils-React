import React, { useState } from "react";

export default function TextForm(props) {
    let [text,setText] = useState('');

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const handleUpperOnClick = ()=>{
        setText(text.toUpperCase());
    }

    const handleLowerOnClick = ()=>{
        setText(text.toLowerCase());
    }

    const handleCamelCaseOnClick = ()=>{
        const tempText = text;
        let newText = text[0].toUpperCase();
        for(let i = 1;i<tempText.length; ++i){
            if(tempText[i] === " "){
                newText += tempText[i+1].toUpperCase();
                i++;
            }
            else
                newText += tempText[i];
        }

        setText(newText);
    }

    const handleClear = ()=>{
        setText("")
    }

    return (
        <div className={`container my-3  text-${props.mode === 'light' ? 'dark':'light'}`}>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark':'light'}`}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                <h2>{props.heading}</h2>
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={text}
                    onChange={handleOnChange}
                    rows="8"
                >
                </textarea>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpperOnClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowerOnClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCamelCaseOnClick}>CamelCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>Words: {text !== ""?(text.split(' ')[text.split(' ').length-1] === ""?text.split(' ').length-1:text.split(' ').length):0} | Characters: {text.length - text.split(' ').length + 1}</p>
                <p>Reading Time: {(0.008 * text.split(' ').length).toFixed(3)} Minutes</p>

                <h3>Preview:</h3>
                <p>{text.length === 0? "Enter text above to Preview here.":text}</p>
            </div>
        </div>
    );
}
