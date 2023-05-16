import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    heading: PropTypes.string,
    search: PropTypes.string,
};

const defaultProps = {
    heading: "Heading Text"
};

const TextForm = (props) => {

    const [text, setText] = useState("");

    const [copyText, setCopyText] = useState("Copy");

    // const searchWord = ()=>{
    //     if(text){
    //         alert(props.search);
    //     }
    //     else{
    //         alert("Please enter text first!!!");
    //     }
    // }

    const handleOnChange = (e) => {
        console.log(text.split(" "));
        setCopyText("Copy");
        setText(e.target.value);
        console.log(e.target.value);
        if (e.target.value.length >= 0) {
            props.parentCallback(e.target.value.trim());
        }
    }

    const handleUpcaseClick = (e) => {
        e.preventDefault();
        setCopyText("Copy");
        setText(text.toUpperCase());
    }

    const handleLocaseClick = (e) => {
        e.preventDefault();
        setCopyText("Copy");
        setText(text.toLowerCase());
    }

    const handleClearClick = (e) => {
        e.preventDefault();
        setCopyText("Copy");
        setText("");
    }

    const handleIncaseClick = (e) => {
        e.preventDefault();
        setCopyText("Copy");
        let newText = "";
        [...text].forEach(n => {
            if (n === n.toLowerCase()) {
                newText += n.toUpperCase();
            }
            else {
                newText += n.toLowerCase();
            }
        });
        setText(newText);
    }

    const handleCopy = (e) => {
        e.preventDefault();
        console.log("I am copy");
        var text = document.getElementById("textArea");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        setCopyText("Copied");
    }

    const removeExtraSpaces = (e) => {
        e.preventDefault();
        setCopyText("Copy");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const dontRemoveText = () => {
        window.location.reload();
    }

    function getHighlightedText(text, highlight) {
        // Split on highlight term and include term into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (<span> {parts.map((part, i) =>
            <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor: 'yellow' } : {}}>
                {part}
            </span>)
        } </span>);
    }

    const searchText = () => {
        return getHighlightedText(text, props.search);
    }

    return (
        <div className='container my-3' >

            <h3>{props.heading}</h3>
            <form>
                <div className="form-group">
                    {/* <label for="exampleFormControlTextarea1">{props.heading}</label> */}
                    <textarea className="form-control" style={props.mode==='light'?{backgroundColor:"white",color:"black"}:{backgroundColor:"grey",color:"white"}} value={text} onChange={handleOnChange} id="textArea" rows="3"></textarea>

                </div>
                <div className="text-right">
                    <button className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} ml-2`} onClick={handleCopy}>{copyText}</button>
                    <button className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} ml-2`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} ml-2`} onClick={handleClearClick}>Clear All</button>
                    <button className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} ml-2`} onClick={handleIncaseClick}>Inversecase</button>
                    <button className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} ml-2`} onClick={handleUpcaseClick}>Convert to Uppercase</button>
                    <button className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} ml-2`} onClick={handleLocaseClick}>Convert to Lowercase</button>
                </div>
            </form>
            <h2>Your text summary</h2>
            <p>{text.trim().split(" ").length} word and {text.length} characters</p>
            <p>{0.008 * text.trim().split(" ").length} minutes to read</p>
            <h2>Review</h2>
            {props.search ? (text ? searchText() : dontRemoveText()) : <p>{text?text:"Enter text in text-area"}</p>}
        </div>
    );
}

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;

export default TextForm;