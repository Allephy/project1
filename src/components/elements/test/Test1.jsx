import React, { useState } from 'react';

import {DPQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let DPScore = null;

export default function Test1() {
    console.log('dfdfdf', DPQuestion[0])
    const [ans, setAns] = useState(0)
    console.log('**', ans)
    DPScore = ans
    console.log("==", DPScore)
    return(
        <div>
            <h1>This is test 1</h1>
            <div>
            <QuestionBlock name={DPQuestion[0].question} statement={DPQuestion[0].statement} setAns={setAns} ans={ans}>1</QuestionBlock>
            <QuestionBlock name={DPQuestion[1].question} statement={DPQuestion[1].statement} setAns={setAns} ans={ans}>2</QuestionBlock>
            <QuestionBlock name={DPQuestion[2].question} statement={DPQuestion[2].statement} setAns={setAns} ans={ans}>3</QuestionBlock>
            <QuestionBlock name={DPQuestion[3].question} statement={DPQuestion[3].statement} setAns={setAns} ans={ans}>4</QuestionBlock>
            <QuestionBlock name={DPQuestion[4].question} statement={DPQuestion[4].statement} setAns={setAns} ans={ans}>5</QuestionBlock>
            <QuestionBlock name={DPQuestion[5].question} statement={DPQuestion[5].statement} setAns={setAns} ans={ans}>6</QuestionBlock>
            <QuestionBlock name={DPQuestion[6].question} statement={DPQuestion[6].statement} setAns={setAns} ans={ans}>7</QuestionBlock>
            <QuestionBlock name={DPQuestion[7].question} statement={DPQuestion[7].statement} setAns={setAns} ans={ans}>8</QuestionBlock>
            <QuestionBlock name={DPQuestion[8].question} statement={DPQuestion[8].statement} setAns={setAns} ans={ans}>9</QuestionBlock>
            <QuestionBlock name={DPQuestion[9].question} statement={DPQuestion[9].statement} setAns={setAns} ans={ans}>10</QuestionBlock>
            </div>
        </div>
    );
}


export { DPScore } 