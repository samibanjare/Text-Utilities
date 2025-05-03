// import React, { useState } from 'react'
// import { useFormState } from 'react-dom'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const[btnText, setBtnText]= useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#2c3237':'white',
        border: '0.5px solid',
        borderColor: props.mode === 'dark'?'white':'black'
    }
  return (
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2 className='my-2'>About Us</h2>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Easily perform various text operations such as word count, character count, and sentence count. You can also convert text to uppercase, lowercase, or title case, remove extra spaces, and find & replace words instantly.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Text Utilities is completely free with no hidden charges. You get unlimited access to all features without sign-ups or subscriptions. Plus, your text is processed locally, ensuring privacy and security.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatibility</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Our tool works smoothly across all modern web browsers, including Chrome, Firefox, Edge, Safari, and Opera. No installations are required—just open your browser and start using it.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
