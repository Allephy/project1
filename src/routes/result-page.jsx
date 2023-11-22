import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DPScore } from '@components/elements/test/Test1';
import { FCScore } from '@components/elements/test/Test2';
import { CNScore } from '@components/elements/test/Test3';
import { TFScore } from '@components/elements/test/Test4';
import { PMScore } from '@components/elements/test/Test5';

//testpage->result-logiv->result-page
//ResultPage 구현
export default function ResultPage(props) {

        let answer = ResultLogic();
        let result_page_show = "";

        const percentage1 = Number(props.percentage[0].value) + 50;
        const percentage2 = Number(props.percentage[1].value) + 50;
        const percentage3 = Number(props.percentage[1].value) + 50;
        const percentage4 = Number(props.percentage[1].value) + 50;
        const percentage5 = Number(props.percentage[1].value) + 50;



        const [id, setId] = useState(1);
    
        function NextPage() {
        const Next = (event) => {
        event.preventDefault();
        setId(Number(id)+1);
        } 
    } 
        console.log('props', id)
        let move = null;
        if (id < 5) {
            move = <button onClick={Next }>Move to the Next Page</button>
        } else if (id === 5) {
            move = <input type='submit' value='Get Your Result' onClick={TypeNavigation}></input>
        } else if (id === 6) {
            move = null;
        }
    
        return(
            <div>
                {move}
            </div>
        ); 
        };

       if (Number(id) === 1) {
            result_page_show = ("D: "+ percentage1 + "P: "+ (100-percentage1))
        } else if (Number(id) === 2) {
            result_page_show = ("F: "+ percentage2 + "C: "+ (100-percentage2))
        } else if (Number(id) === 3) {
            result_page_show = ("C: "+ percentage3 + "N: "+ (100-percentage3))
        } else if (Number(id) === 4) {
            result_page_show = ("T: "+ percentage4 + "F: "+ (100-percentage4))
        } else if (Number(id) === 5) {
            result_page_show = ("P: "+ percentage5 + "M: "+ (100-percentage5))
        }
        /* else if (Number(id) === 6) {
            result_page_show = props.percentage[4].value
        } else if (Number(id) === 6) {
            result_page_show = <chooseType></chooseType>
        }*/
        

        
    

        const navigate = useNavigate();
        const TypeNavigation = () => {
            if( answer.type === "Charisma") {
            if(props.type === "Charisma") {
            if( type === "Charisma") {
                navigate("/charisma");
            } else if( answer.type === "Charmer") {
            } else if(props.type === "Charmer") {
            } else if( type === "Charmer") {
                navigate("/charmer");
            } else if (answer.type === "Coquet") {
            } else if (props.type === "Coquet") {
            } else if (type === "Coquet") {
                navigate("/coquet");
            } else if( answer.type === "Dandy") {
            } else if(props.type === "Dandy") {
            } else if( type === "Dandy") {
                navigate("/dandy");
            } else if( answer.type === "IdealLover") {
            } else if(props.type === "IdealLover") {
            } else if( type === "IdealLover") {
                navigate("/ideallover");
            } else if( answer.type === "Lake") {
            } else if(props.type === "Lake") {
            } else if( type === "Lake") {
                navigate("/lake");
            } else if( answer.type === "Natural") {
            } else if(props.type === "Natural") {
            } else if( type === "Natural") {
                navigate("/natural");
            } else if( answer.type === "Siren") {
            } else if(props.type === "Siren") {
            } else if( type === "Siren") {
                navigate("/siren");
            } else if( answer.type === "Star") {
            } else if(props.type === "Star") {
            } else if( type === "Star") {
                navigate("/star");
            } else {
                navigate("/err");
            }
            }
        }
        console.log('id', id);
    
    
        return(
        <div>
            <h1>This is TypePage</h1>
            {result_page_show}
            <NextPage id={id}></NextPage>

        </div>
        )   
    

}
