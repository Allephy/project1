import React, { useState } from 'react';

import {FSQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let FSScore = 0;

export default function Test5() {
    const [ans, setAns] = useState(0)
   
    FSScore =  ans;
    console.log(FSScore)
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={FSQuestion[0].question} setAns={setAns} ans={ans}>41</QuestionBlock>
            <QuestionBlock name={FSQuestion[1].question} setAns={setAns} ans={ans}>42</QuestionBlock>
            <QuestionBlock name={FSQuestion[2].question} setAns={setAns} ans={ans}>43</QuestionBlock>
            <QuestionBlock name={FSQuestion[3].question} setAns={setAns} ans={ans}>44</QuestionBlock>
            <QuestionBlock name={FSQuestion[4].question} setAns={setAns} ans={ans}>45</QuestionBlock>
            <QuestionBlock name={FSQuestion[5].question} setAns={setAns} ans={ans}>46</QuestionBlock>
            <QuestionBlock name={FSQuestion[6].question} setAns={setAns} ans={ans}>47</QuestionBlock>
            <QuestionBlock name={FSQuestion[7].question} setAns={setAns} ans={ans}>48</QuestionBlock>
            <QuestionBlock name={FSQuestion[8].question} setAns={setAns} ans={ans}>49</QuestionBlock>
            <QuestionBlock name={FSQuestion[9].question} setAns={setAns} ans={ans}>50</QuestionBlock>
            </div>
        </div>
    );
}

export { FSScore }