import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

//testpage->result-logiv->result-page
//ResultPage 구현
export default function ResultPage(props) {

        //ResultLogic에서 받은 props
        let result_page_show = null;

        const [id, setId] = useState(1);
    
        function NextPage() {
        const Next = (event) => {
        event.preventDefault();
        setId(Number(id)+1);
        }  
        console.log('props', id)
        let move = null;
        if (id < 5) {
            move = <button onClick={Next}>Move to the Next Page</button>
        } else if (id === 5) {
            move = <input type='submit' value='Get Your Result Type' onClick={TypeNavigation}></input>
        } else if (id === 6) {
            move = null;
        }
    
        return(
            <div>
                {move}
            </div>
        ); 
        };
        console.log('&&', props.id)
        console.log('@@', props.percentage)

       if (Number(id) === 1) {
            result_page_show = props.percentage[0].value
        } else if (Number(id) === 2) {
            result_page_show = props.percentage[1].value
        } else if (Number(id) === 3) {
            result_page_show = props.percentage[2].value
        } else if (Number(id) === 4) {
            result_page_show = props.percentage[3].value
        } else if (Number(id) === 5) {
            result_page_show = props.percentage[4].value
        }
        /* else if (Number(id) === 6) {
            result_page_show = <chooseType></chooseType>
        }
        */
        
    

        const navigate = useNavigate();
        const TypeNavigation = () => {
            if(props.type === "Charisma") {
                navigate("/charisma");
            } else if(props.type === "Charmer") {
                navigate("/charmer");
            } else if (props.type === "Coquet") {
                navigate("/coquet");
            } else if(props.type === "Dandy") {
                navigate("/dandy");
            } else if(props.type === "IdealLover") {
                navigate("/ideallover");
            } else if(props.type === "Lake") {
                navigate("/lake");
            } else if(props.type === "Natural") {
                navigate("/natural");
            } else if(props.type === "Siren") {
                navigate("/siren");
            } else if(props.type === "Star") {
                navigate("/star");
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
//We should display the result type depending on some values in the test pages.


