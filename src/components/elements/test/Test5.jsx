import React, { useState } from 'react';

import {PMQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let PMScore = 0;

export default function Test5() {
    const [ans, setAns] = useState(0);
    PMScore = ans;
    console.log(PMScore)
    return(
        <div>
            <h1>This is test 5</h1>
            <div>
            <QuestionBlock name={PMQuestion[0].question} setAns={setAns} ans={ans}>41</QuestionBlock>
            <QuestionBlock name={PMQuestion[1].question} setAns={setAns} ans={ans}>42</QuestionBlock>
            <QuestionBlock name={PMQuestion[2].question} setAns={setAns} ans={ans}>43</QuestionBlock>
            <QuestionBlock name={PMQuestion[3].question} setAns={setAns} ans={ans}>44</QuestionBlock>
            <QuestionBlock name={PMQuestion[4].question} setAns={setAns} ans={ans}>45</QuestionBlock>
            <QuestionBlock name={PMQuestion[5].question} setAns={setAns} ans={ans}>46</QuestionBlock>
            <QuestionBlock name={PMQuestion[6].question} setAns={setAns} ans={ans}>47</QuestionBlock>
            <QuestionBlock name={PMQuestion[7].question} setAns={setAns} ans={ans}>48</QuestionBlock>
            <QuestionBlock name={PMQuestion[8].question} setAns={setAns} ans={ans}>49</QuestionBlock>
            <QuestionBlock name={PMQuestion[9].question} setAns={setAns} ans={ans}>50</QuestionBlock>
            </div>
        </div>
    );
}

export { PMScore }