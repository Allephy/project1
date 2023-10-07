import { useState } from "react";

//Logic 구현
//testpage에서 받은 props
export default function Result(props) {
    const DPScore = props.DPScore;
    const FCScore = props.FCScore;
    const CNScore = props.CNScore;
    const TFScore = props.TFScore;
    const PMScore = props.PMScore;

    const [FirstCharacter,setFirst] = useState("");
    const [SecondCharacter,setSecond] = useState("");
    const [ThirdCharacter,setThird] = useState("");

    
    const [DP,setDP] = useState("");
    const [FC,setFC] = useState("");
    const [CN,setCN] = useState("");
    const [TF,setTF] = useState("");
    const [PM,setPM] = useState("");

    if( DPScore < 0) { setDP("D");} else { setDP("P");}
    if( FCScore < 0) { setFC("F");} else { setDP("C");}
    if( CNScore < 0) { setCN("C");} else { setDP("N");}
    if( TFScore < 0) { setTF("T");} else { setTF("F");}
    if( PMScore < 0) { setPM("P");} else { setPM("M");}

    const scoreArr = [
        {
            id:1,
            name:DP,
            score:Math.abs(DPScore),
        },
        {
            id:2,
            name:FC,
            score:Math.abs(FCScore),
        },
        {
            id:3,
            name:CN,
            score:Math.abs(CNScore),
        },
        {
            id:4,
            name:TF,
            score:Math.abs(TFScore),
        },
        {
            id:5,
            name:PM,
            score:Math.abs(PMScore),
        },

    ]

    const sortedArr = insertionSort(scoreArr);

    setFirst(sortedArr[0].name);
    setSecond(sortedArr[1].name);
    setThird(sortedArr[2].name);

    
}
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i].score;
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1].score = arr[j].score;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
//We should display the result type depending on some values in the test pages.


/* If you revise the code above in reference with this below, the program will work.
import React from 'react';
import {DPScore} from '@components/elements/test/Test1';
import {FCScore} from '@components/elements/test/Test2';
import {CNScore} from '@components/elements/test/Test3';
import {TFScore} from '@components/elements/test/Test4';
import {PMScore} from '@components/elements/test/Test5';
export default function Result() {
    
    console.log('1:', DPScore)
    console.log('2:', FCScore)
    console.log('3:', CNScore)
    console.log('4:', TFScore)
    console.log('5:', PMScore)
    return(
        <h1>This is result.</h1>
    )
}
*/