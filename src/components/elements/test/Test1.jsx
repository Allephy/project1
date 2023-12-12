import React, { useState } from 'react';

import {DPQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let DPScoreList;

export default function Test1() {
    const [ans, setAns] = useState([{id: '1', value: '0'}, {id: '2', value: '0'}, {id: '3', value: '0'}, {id: '4', value: '0'}, {id: '5', value: '0'}, {id: '6', value: '0'}, {id: '7', value: '0'},{id: '8', value: '0'}, {id: '9', value: '0'}, {id: '10', value: '0'}])
// We gonna save the answer in the form of a list. DPScoreList is the
    console.log('DPScoreList', DPScoreList);
    DPScoreList = [...ans];
    return(
        <div>
            <div className='font-light text-center tracking-wide' >
            <QuestionBlock name={DPQuestion[0].question} setAns={setAns} ans={ans} id='1'>1</QuestionBlock>
            <QuestionBlock name={DPQuestion[1].question} setAns={setAns} ans={ans} id='2'>2</QuestionBlock>
            <QuestionBlock name={DPQuestion[2].question} setAns={setAns} ans={ans} id='3'>3</QuestionBlock>
            <QuestionBlock name={DPQuestion[3].question} setAns={setAns} ans={ans} id='4'>4</QuestionBlock>
            <QuestionBlock name={DPQuestion[4].question} setAns={setAns} ans={ans} id='5'>5</QuestionBlock>
            <QuestionBlock name={DPQuestion[5].question} setAns={setAns} ans={ans} id='6'>6</QuestionBlock>
            <QuestionBlock name={DPQuestion[6].question} setAns={setAns} ans={ans} id='7'>7</QuestionBlock>
            <QuestionBlock name={DPQuestion[7].question} setAns={setAns} ans={ans} id='8'>8</QuestionBlock>
            <QuestionBlock name={DPQuestion[8].question} setAns={setAns} ans={ans} id='9'>9</QuestionBlock>
            <QuestionBlock name={DPQuestion[9].question} setAns={setAns} ans={ans} id='10'>10</QuestionBlock>
            </div>
        </div>
    );
}


export { DPScoreList } 