import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        SetText(newText)
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        SetText(newText)
        props.showAlert("Converted to Lowercase","success")
    }

    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = '';
        SetText(newText);
        props.showAlert("Text cleared","success")
    }

    const handleCapitaliseClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        SetText(newText);
        props.showAlert("Capitalised","success")
        // const lower = word.toLowerCase();
        // return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    const handleCopy = ()=>{
        console.log("in am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        SetText(newText.join(" ")); 
        props.showAlert("Extra spaces get removed","success")
    }

    const handleOnChange = (event)=>{
       // console.log("On change");
        SetText(event.target.value);
    }

    

    const [text, SetText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} 
        </h1>

         <div className="mb-3">
         
         <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         </div>
               <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
               <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to Lowercase</button>
               <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button>
               <button className="btn btn-primary mx-1" onClick = {handleCapitaliseClick}>Capitalise Case</button>
               <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy text</button>
               <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extar Spaces</button>

               
         </div>
         <div className="container my-3" style={{color:props.mode==='dark'?'white': '#042743'}}>
              <h1>Your text summary</h1>
              <p>{text.split(" ").length} words and {text.length}  characters</p>
              <p>{0.008 * text.split(" ").length} minutes read </p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
         </div>
     </>
  )
}
