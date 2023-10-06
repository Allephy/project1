import React from 'react';

import {FCQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';


export default function Test2() {
    return(
        <div>
            <h1>This is test 2</h1>
            <div>
            <QuestionBlock name={FCQuestion[0].question}>11</QuestionBlock>
            <QuestionBlock name={FCQuestion[1].question}>12</QuestionBlock>
            <QuestionBlock name={FCQuestion[2].question}>13</QuestionBlock>
            <QuestionBlock name={FCQuestion[3].question}>14</QuestionBlock>
            <QuestionBlock name={FCQuestion[4].question}>15</QuestionBlock>
            <QuestionBlock name={FCQuestion[5].question}>16</QuestionBlock>
            <QuestionBlock name={FCQuestion[6].question}>17</QuestionBlock>
            <QuestionBlock name={FCQuestion[7].question}>18</QuestionBlock>
            <QuestionBlock name={FCQuestion[8].question}>19</QuestionBlock>
            <QuestionBlock name={FCQuestion[9].question}>20</QuestionBlock>
            </div>
        </div>
        
        
    );
}