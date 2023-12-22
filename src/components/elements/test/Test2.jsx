import React, { useState }from 'react';

import {CKQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let CKScoreList;

export default function Test2() {
    const [ans, setAns] = useState([{id: '1', value: '0'}, {id: '2', value: '0'}, {id: '3', value: '0'}, {id: '4', value: '0'}, {id: '5', value: '0'}, {id: '6', value: '0'}, {id: '7', value: '0'},{id: '8', value: '0'}])
    
    CKScoreList =  [...ans];
    console.log('CkScoreList', CKScoreList);
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={CKQuestion[0].question} setAns={setAns} ans={ans} id='1'>11</QuestionBlock>
            <QuestionBlock name={CKQuestion[1].question} setAns={setAns} ans={ans} id='2'>12</QuestionBlock>
            <QuestionBlock name={CKQuestion[2].question} setAns={setAns} ans={ans} id='3'>13</QuestionBlock>
            <QuestionBlock name={CKQuestion[3].question} setAns={setAns} ans={ans} id='4'>14</QuestionBlock>
            <QuestionBlock name={CKQuestion[4].question} setAns={setAns} ans={ans} id='5'>15</QuestionBlock>
            <QuestionBlock name={CKQuestion[5].question} setAns={setAns} ans={ans} id='6'>16</QuestionBlock>
            <QuestionBlock name={CKQuestion[6].question} setAns={setAns} ans={ans} id='7'>17</QuestionBlock>
            <QuestionBlock name={CKQuestion[7].question} setAns={setAns} ans={ans} id='8'>18</QuestionBlock>
            </div>
        </div>
    );
}

export { CKScoreList }