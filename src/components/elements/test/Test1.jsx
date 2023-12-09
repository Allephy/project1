import React, { useState } from 'react';

import {DPQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let DPScore = 0;

export default function Test1() {
    const [ans1, setAns1] = useState(0)
    const [ans2, setAns2] = useState(0)
    const [ans3, setAns3] = useState(0)
    const [ans4, setAns4] = useState(0)
    const [ans5, setAns5] = useState(0)
    const [ans6, setAns6] = useState(0)
    const [ans7, setAns7] = useState(0)
    const [ans8, setAns8] = useState(0)
    const [ans9, setAns9] = useState(0)
    const [ans10, setAns10] = useState(0)


    console.log('우히히히', DPScore);
    DPScore = ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8 + ans9 + ans10;
    return(
        <div>
            <div className='font-light text-center tracking-wide' >
            <QuestionBlock name={DPQuestion[0].question} setAns={setAns1} ans={ans1}>1</QuestionBlock>
            <QuestionBlock name={DPQuestion[1].question} setAns={setAns2} ans={ans2}>2</QuestionBlock>
            <QuestionBlock name={DPQuestion[2].question} setAns={setAns3} ans={ans3}>3</QuestionBlock>
            <QuestionBlock name={DPQuestion[3].question} setAns={setAns4} ans={ans4}>4</QuestionBlock>
            <QuestionBlock name={DPQuestion[4].question} setAns={setAns5} ans={ans5}>5</QuestionBlock>
            <QuestionBlock name={DPQuestion[5].question} setAns={setAns6} ans={ans6}>6</QuestionBlock>
            <QuestionBlock name={DPQuestion[6].question} setAns={setAns7} ans={ans7}>7</QuestionBlock>
            <QuestionBlock name={DPQuestion[7].question} setAns={setAns8} ans={ans8}>8</QuestionBlock>
            <QuestionBlock name={DPQuestion[8].question} setAns={setAns9} ans={ans9}>9</QuestionBlock>
            <QuestionBlock name={DPQuestion[9].question} setAns={setAns10} ans={ans10}>10</QuestionBlock>
            </div>
        </div>
    );
}


export { DPScore } 