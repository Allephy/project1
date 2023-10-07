import { useState } from "react";

import { UserResult } from "@routes";

//Logic 구현
//testpage에서 받은 props

export default function Result(props) {
    const DPScore = props.DPScore;
    const FCScore = props.FCScore;
    const CNScore = props.CNScore;
    const TFScore = props.TFScore;
    const PMScore = props.PMScore;
  
    const [DP,setDP] = useState("");
    const [FC,setFC] = useState("");
    const [CN,setCN] = useState("");
    const [TF,setTF] = useState("");
    const [PM,setPM] = useState("");

    //속성을 하나로 정한다.

    if( DPScore < 0) { setDP("D");} else { setDP("P");}
    if( FCScore < 0) { setFC("F");} else { setDP("C");}
    if( CNScore < 0) { setCN("C");} else { setDP("N");}
    if( TFScore < 0) { setTF("T");} else { setTF("F");}
    if( PMScore < 0) { setPM("P");} else { setPM("M");}

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

    const type = chooseTtpe(sortedArr);

    return (
        <UserResult percentage={percentage} type={type}/>     
    )
}
function handleArr(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i].score;
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
    const [percentage,setPercentage] = useState([]);
    let v;

    v = scoreArr[0].score / 20 * 100;
    if(scoreArr.name === "D") { v = -v; setPercentage[0](v); }
    else { setPercentage[0](v);}

    v = scoreArr[1].score / 20 * 100;
    if(scoreArr.name === "F") { v = -v;}
    else { setPercentage[1](v); }

    v = scoreArr[2].score / 20 * 100;
    if(scoreArr.name === "C") { v = -v;}
    else { setPercentage[2](v); }

    v = scoreArr[3].score / 20 * 100;
    if(scoreArr.name === "T") { v = -v;}
    else { setPercentage[3](v); }

    v = scoreArr[4].score / 20 * 100;
    if(scoreArr.name === "P") { v = -v;}
    else { setPercentage[4](v); }

    

}

function chooseTtpe() {

}
//We should display the result type depending on some values in the test pages.