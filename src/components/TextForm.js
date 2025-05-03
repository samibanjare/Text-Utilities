import React, {useState} from 'react'

export default function TextFile(props) {
  const [text, setText] = useState('Enter Text Here');
  // setText("New Text"); 
  const handleUpClick =()=>{
    // console.log("Uppercase was Clicked!!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!","success");
  }
  const handleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!","success");
  }
  const sentenceCase =(str)=>{
    return str
        .split(". ")
        .map(sentence => sentence.charAt(0).toUpperCase()+ sentence.slice(1))
        .join(". ");
  }
  const handleSentenceClick =()=>{
    let newText = sentenceCase(text);
    setText(newText);
    props.showAlert("Converted to Sentence case!!","success");
  }
  const CapitalizedClick =(str)=>{
    return str
      .split(" ")
      .map(sentence=> sentence.charAt(0).toUpperCase()+ sentence.slice(1).toLowerCase())
      .join(" ");
  }
  const handleCapitalizedClick=()=>{
    let newText = CapitalizedClick(text);
    setText(newText);
    props.showAlert("Converted to Capitalized case!!","success");
  }
  const AlternateCase=(str)=>{
    return str
      .split("")
      .map((char,index)=>(index%2 === 0 ? char.toUpperCase():char.toLowerCase()))
      .join("");
  }
  const handleAlternateClick=()=>{
    let newText = AlternateCase(text)
    setText(newText);
    props.showAlert("Converted to Alternate case!!","success");
  }
  const InverseCase=(str)=>{
    return str
      .split("")
      .map(char=>char === char.toUpperCase() ? char.toLowerCase():char.toUpperCase())
      .join("")
  }
  const handleInverseClick=()=>{
    let newText = InverseCase(text)
    setText(newText);
    props.showAlert("Converted to Inversecase!!","success");
  }
  const handleCopyClick=()=>{
    var mytext = document.getElementById("my box");
    mytext.select();
    navigator.clipboard.writeText(mytext.value)
    .then(() => alert("Copied to clipboard!"))
    .catch(err => console.error("Error copying:", err));
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!!","success");
  }
  const handleClearClick =()=>{
    let newText ="";
    setText(newText);
    props.showAlert("Text cleared!!","success");
  }
  const handleOnChange =(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
          <h1 >{props.heading}</h1>
          <div className="mb-3">
          {/* <label for="my box" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#6C757D':'white',color:props.mode==='dark'?'white':'black', border: props.mode==='dark'?'2px solid white':'2px solid #000'}} onChange={handleOnChange} id="my box" rows="3"></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>UPPER CASE</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>lower case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleSentenceClick}>Sentence case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCapitalizedClick}>Capitalized Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleAlternateClick}>AlTeRnAtE CaSe</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleInverseClick}>InVeRSe CaSe</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopyClick}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear</button>
          </div>
          <div className="container my-2">
            <h2>your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview here!!"}</p>
          </div>
      </div>
    </>
  )
}
