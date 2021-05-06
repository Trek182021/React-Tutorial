import React from 'react';
import Questions from './Questions';

const Content = ({getQuestions}) => {
    console.log(getQuestions.length);
    return (
        
            
                {getQuestions.length > 0 && 
                getQuestions.map(
                    ({question, answers, correct, questionId}) => (<Questions questions={question} answer={answers} correctAns={correct} uniqueKey={questionId}/>)
                )}
        </div>
    )
}
export default Content
