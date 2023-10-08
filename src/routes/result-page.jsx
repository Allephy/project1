import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

//testpage->result-logiv->result-page
//ResultPage 구현
export default function ResultPage(props) {

        //ResultLogic에서 받은 props
        let type = props.type;
        let percentage = props.percentage;

        const [id, setId] = useState(1);
    
        function NextPage() {
        const Next = (event) => {
        event.preventDefault();
        setId(Number(id)+1);
                
        };

        const navigate = useNavigate();
        const TypeNavigation = () => {
            if( type === "Charisma") {
                navigate("/charisma");
            } else if( type === "Charmer") {
                navigate("/charmer");
            } else if (type === "Coquet") {
                navigate("/coquet");
            } else if( type === "Dandy") {
                navigate("/dandy");
            } else if( type === "IdealLover") {
                navigate("/ideallover");
            } else if( type === "Lake") {
                navigate("/lake");
            } else if( type === "Natural") {
                navigate("/natural");
            } else if( type === "Siren") {
                navigate("/siren");
            } else if( type === "Star") {
                navigate("/star");
            } 

            
        }

        console.log('props', id)
        let move = null;
        if (id < 5) {
            move = <button onClick={Next}>Move to the Next Page</button>
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
    }
    
        console.log('id', id);
    
    
        return(
        <div>
            <h1>This is ResultPage</h1>

            <NextPage id={id}></NextPage>
            
        </div>
        )

    
        

    
}
//We should display the result type depending on some values in the test pages.


