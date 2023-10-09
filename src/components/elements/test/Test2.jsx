import React, { useState }from 'react';

import {FCQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let FCScore = null;

export default function Test2() {
    const [ans, setAns] = useState(0);
    console.log('**', ans);
    FCScore = ans;
    return(
        <div>
            <h1>This is test 2</h1>
            <div>
            <QuestionBlock name={FCQuestion[0].question} statement={FCQuestion[0].statement} setAns={setAns} ans={ans}>11</QuestionBlock>
            <QuestionBlock name={FCQuestion[1].question} statement={FCQuestion[1].statement} setAns={setAns} ans={ans}>12</QuestionBlock>
            <QuestionBlock name={FCQuestion[2].question} statement={FCQuestion[2].statement} setAns={setAns} ans={ans}>13</QuestionBlock>
            <QuestionBlock name={FCQuestion[3].question} statement={FCQuestion[3].statement} setAns={setAns} ans={ans}>14</QuestionBlock>
            <QuestionBlock name={FCQuestion[4].question} statement={FCQuestion[4].statement} setAns={setAns} ans={ans}>15</QuestionBlock>
            <QuestionBlock name={FCQuestion[5].question} statement={FCQuestion[5].statement} setAns={setAns} ans={ans}>16</QuestionBlock>
            <QuestionBlock name={FCQuestion[6].question} statement={FCQuestion[6].statement} setAns={setAns} ans={ans}>17</QuestionBlock>
            <QuestionBlock name={FCQuestion[7].question} statement={FCQuestion[7].statement} setAns={setAns} ans={ans}>18</QuestionBlock>
            <QuestionBlock name={FCQuestion[8].question} statement={FCQuestion[8].statement} setAns={setAns} ans={ans}>19</QuestionBlock>
            <QuestionBlock name={FCQuestion[9].question} statement={FCQuestion[9].statement} setAns={setAns} ans={ans}>20</QuestionBlock>
            </div>
        </div>
    );
}

export { FCScore }