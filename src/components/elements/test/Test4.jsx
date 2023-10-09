import React, { useState } from 'react';

import {TFQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let TFScore;

export default function Test4() {
    const [ans, setAns] = useState(0);
    console.log('**', ans);
    TFScore = ans;
    return(
        <div>
            <h1>This is test 4</h1>
            <div>
            <QuestionBlock name={TFQuestion[0].question} statement={TFQuestion[0].statement} setAns={setAns} ans={ans}>31</QuestionBlock>
            <QuestionBlock name={TFQuestion[1].question} statement={TFQuestion[1].statement} setAns={setAns} ans={ans}>32</QuestionBlock>
            <QuestionBlock name={TFQuestion[2].question} statement={TFQuestion[2].statement} setAns={setAns} ans={ans}>33</QuestionBlock>
            <QuestionBlock name={TFQuestion[3].question} statement={TFQuestion[3].statement} setAns={setAns} ans={ans}>34</QuestionBlock>
            <QuestionBlock name={TFQuestion[4].question} statement={TFQuestion[4].statement} setAns={setAns} ans={ans}>35</QuestionBlock>
            <QuestionBlock name={TFQuestion[5].question} statement={TFQuestion[5].statement} setAns={setAns} ans={ans}>36</QuestionBlock>
            <QuestionBlock name={TFQuestion[6].question} statement={TFQuestion[6].statement} setAns={setAns} ans={ans}>37</QuestionBlock>
            <QuestionBlock name={TFQuestion[7].question} statement={TFQuestion[7].statement} setAns={setAns} ans={ans}>38</QuestionBlock>
            <QuestionBlock name={TFQuestion[8].question} statement={TFQuestion[8].statement} setAns={setAns} ans={ans}>39</QuestionBlock>
            <QuestionBlock name={TFQuestion[9].question} statement={TFQuestion[9].statement} setAns={setAns} ans={ans}>40</QuestionBlock>
            </div>
        </div>
    );
}

export { TFScore }