import React, { useState } from 'react';

import {DPQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let DPScoreList;

export default function Test1() {
    const [ans, setAns] = useState([{id: '0', value: '0'},{id: '1', value: '0'}, {id: '2', value: '0'}, {id: '3', value: '0'}, {id: '4', value: '0'}, {id: '5', value: '0'}, {id: '6', value: '0'}, {id: '7', value: '0'},])
// We gonna save the answer in the form of a list. DPScoreList is the
    console.log('DPScoreList', DPScoreList);
    DPScoreList = [...ans];
    return(
        <div>
            <div className='font-light text-center tracking-wide' >
            <QuestionBlock name={DPQuestion[0].question} setAns={setAns} ans={ans} id='0'>1</QuestionBlock>
            <QuestionBlock name={DPQuestion[1].question} setAns={setAns} ans={ans} id='1'>2</QuestionBlock>
            <QuestionBlock name={DPQuestion[2].question} setAns={setAns} ans={ans} id='2'>3</QuestionBlock>
            <QuestionBlock name={DPQuestion[3].question} setAns={setAns} ans={ans} id='3'>4</QuestionBlock>
            <QuestionBlock name={DPQuestion[4].question} setAns={setAns} ans={ans} id='4'>5</QuestionBlock>
            <QuestionBlock name={DPQuestion[5].question} setAns={setAns} ans={ans} id='5'>6</QuestionBlock>
            <QuestionBlock name={DPQuestion[6].question} setAns={setAns} ans={ans} id='6'>7</QuestionBlock>
            <QuestionBlock name={DPQuestion[7].question} setAns={setAns} ans={ans} id='7'>8</QuestionBlock>
            </div>
        </div>
    );
}


export { DPScoreList } 