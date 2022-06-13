import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase function clicked" + text);
        let newtext = text.toUpperCase();
        // let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleLoClick=()=>{
        // console.log("Uppercase function clicked" + text);
        // let newtext = text.toUpperCase();
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleResetClick=()=>{
        // console.log("Uppercase function clicked" + text);
        // let newtext = text.toUpperCase();
        let newtext = ''
        setText(newtext);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    //remove all the symbols
    const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;
        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        };

    //to extract only the numbers in the text:
    const handleNumExtract =()=>{
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join('');
   setText(res)
    };

    // const CapitalizedClick = () => {
    //     let words =  text.split(" ").map(word => {
    //         return word.charAt(0).toUpperCase()+word.slice(1);
    //     })
    //     let newText = words.join(" ");
    //     setText(newText);
    // }
    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }


    // const handleLightTheme = () => {
    //     document.querySelector('.body').style.backgroundColor = "white"
    //   }
    
    const handleDarkTheme = () => {

        if(!isBlack) {
            document.querySelector('body').style.backgroundColor = "black"
            document.querySelector('body').style.color = "white"
            return setIsBlack(true)
        }

            document.querySelector('body').style.backgroundColor = "white"
            document.querySelector('body').style.color = "black"
            return setIsBlack(false)
        
      }

    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
      };



    const handleOnChange=(event)=>{
        console.log("handle on change function clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
    const [isBlack, setIsBlack] = useState();




    // text = "Enter Your Text here 2"; wrong way
    // setText("Enter Your Text here 2"); correct way

  return (
    <>
    <div className="container">
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-1 my-1" onClick={intoTitleCase}>Capitalized </button>
                <button className="btn btn-warning mx-1 my-1" type="submit" onClick={speak} >Speak</button>
                <button className="btn btn-primary mx-1 my-1" type="submit" onClick={handleNumExtract} >Extract Numbers</button>
                <button className="btn btn-primary mx-1 my-1" type="submit" onClick={handletextExtract} >Remove Symbols</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleResetClick}>Reset </button>

            <div className="form-check form-switch">
                {/* If else function `` isBlack is the useState Function */}
                <label>{ `Active Theme: ${ isBlack ? "Black" : "White" }`}</label>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={ handleDarkTheme } />
            </div>

            </div>
    </div>
    <div className="container my-3">
    <h3>Your Content Summary</h3>
    <p>Words Count = {text.split(" ").length}, Characters Count = {text.length} </p>
    <p>{0.008 * text.split(" ").length} Minutes Consume to Read this content. </p>

    </div>

    <div className="container my-3">
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </> 

)
}
