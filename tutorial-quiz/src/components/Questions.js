import React, { isValidElement } from 'react'
import {useState} from 'react';

const Questions = ({questions, answer, selected}) => {
    const [answers, setAnswer] = useState(answer)   
    const [disableState, setState] = useState(false)
    return (
        <div className="text-box">
            <h2>{questions}</h2>
            {answers.map((text,index) => (<button disabled={disableState} className="btn" onClick={() => {setAnswer([text]); selected(text); setState(true)}}>{text}</button>))}
        </div>
    )
}

export default Questions
