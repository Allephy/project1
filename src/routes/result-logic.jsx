import { useState } from "react";

import ResultPage from "@routes/result-page";

import {DPScore} from '@components/elements/test/Test1';
import {FCScore} from '@components/elements/test/Test2';
import {CNScore} from '@components/elements/test/Test3';
import {TFScore} from '@components/elements/test/Test4';
import {PMScore} from '@components/elements/test/Test5';

//testpage->result-logic->result-page
//Logic 구현
//testpage에서 받은 props

export default function ResultLogic() {
    
    let DP;
    let FC;
    let CN;
    let TF;
    let PM;

    //속성을 하나로 정한다.
    
    if( DPScore < 0) { DP = ("D");} else { DP = ("P");}
    if( FCScore < 0) { FC = ("F");} else { FC = ("C");}
    if( CNScore < 0) { CN = ("C");} else { CN = ("N");}
    if( TFScore < 0) { TF = ("T");} else { TF = ("F");}
    if( PMScore < 0) { PM = ("P");} else { PM = ("M");}

    const scoreArr = [
        {
            id:1,
            name:DP,
            score:DPScore, 
        },
        {
            id:2,
            name:FC,
            score:FCScore,
        },
        {
            id:3,
            name:CN,
            score:CNScore,
        },
        {
            id:4,
            name:TF,
            score:TFScore,
        },
        {
            id:5,
            name:PM,
            score:PMScore,
        },

    ]
    const percentage = resultCalculation(scoreArr);
    
    const sortedArr = handleArr(scoreArr); 

    const type = ChooseType(sortedArr);

    //console.log('^%', $percentage.id)
    return (
        <ResultPage percentage={percentage} id='1' type={type}/>     
    )
}

function handleArr(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && Math.abs(arr[j].score) > Math.abs(currentVal.score); j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

function resultCalculation(arr) {
    const scoreArr = arr;
    let v;

    let $percentage = [];

    v = scoreArr[0].score / 20 * 100;
    if(scoreArr[0].name === "D") { v = -v; $percentage.push({id: 1, value: v}); }
    else { $percentage.push({id: 1, value: v});}


    v = scoreArr[1].score / 20 * 100;
    if(scoreArr[1].name === "F") { v = -v; $percentage.push({id: 2, value: v}); }
    else { $percentage.push({id: 2, value: v}); }

    v = scoreArr[2].score / 20 * 100;
    if(scoreArr[2].name === "C") { v = -v; $percentage.push({id: 3, value: v}); }
    else { $percentage.push({id: 3, value: v}); }

    v = scoreArr[3].score / 20 * 100;
    if(scoreArr[3].name === "T") { v = -v; $percentage.push({id: 4, value: v}); }
    else { $percentage.push({id: 4, value: v}); }

    v = scoreArr[4].score / 20 * 100;
    if(scoreArr[4].name === "P") { v = -v; $percentage.push({id: 5, value: v}); }
    else { $percentage.push({id: 5, value: v}); }

    console.log('^^^^^^^^', $percentage)

    return $percentage;
}

function ChooseType() {
    return(
        <p>Your type is ...</p>
    )
}

export { ChooseType }
//We should display the result type depending on some values in the test pages.
