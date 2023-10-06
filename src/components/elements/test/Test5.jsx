import React from 'react';

import {PMQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

export default function Test5() {
    return(
        <div>
            <h1>This is test 5</h1>
            <div>
            <QuestionBlock name={PMQuestion[0].question}>41</QuestionBlock>
            <QuestionBlock name={PMQuestion[1].question}>42</QuestionBlock>
            <QuestionBlock name={PMQuestion[2].question}>43</QuestionBlock>
            <QuestionBlock name={PMQuestion[3].question}>44</QuestionBlock>
            <QuestionBlock name={PMQuestion[4].question}>45</QuestionBlock>
            <QuestionBlock name={PMQuestion[5].question}>46</QuestionBlock>
            <QuestionBlock name={PMQuestion[6].question}>47</QuestionBlock>
            <QuestionBlock name={PMQuestion[7].question}>48</QuestionBlock>
            <QuestionBlock name={PMQuestion[8].question}>49</QuestionBlock>
            <QuestionBlock name={PMQuestion[9].question}>50</QuestionBlock>
            </div>
        </div>
    );
}