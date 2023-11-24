import React, { useState } from 'react';

import {TFQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let TFScore = 0;

export default function Test4() {
    const [ans, setAns] = useState(0);
    TFScore = ans;
    console.log(TFScore);
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={TFQuestion[0].question} setAns={setAns} ans={ans}>31</QuestionBlock>
            <QuestionBlock name={TFQuestion[1].question} setAns={setAns} ans={ans}>32</QuestionBlock>
            <QuestionBlock name={TFQuestion[2].question} setAns={setAns} ans={ans}>33</QuestionBlock>
            <QuestionBlock name={TFQuestion[3].question} setAns={setAns} ans={ans}>34</QuestionBlock>
            <QuestionBlock name={TFQuestion[4].question} setAns={setAns} ans={ans}>35</QuestionBlock>
            <QuestionBlock name={TFQuestion[5].question} setAns={setAns} ans={ans}>36</QuestionBlock>
            <QuestionBlock name={TFQuestion[6].question} setAns={setAns} ans={ans}>37</QuestionBlock>
            <QuestionBlock name={TFQuestion[7].question} setAns={setAns} ans={ans}>38</QuestionBlock>
            <QuestionBlock name={TFQuestion[8].question} setAns={setAns} ans={ans}>39</QuestionBlock>
            <QuestionBlock name={TFQuestion[9].question} setAns={setAns} ans={ans}>40</QuestionBlock>
            </div>
        </div>
    );
}

export { TFScore }