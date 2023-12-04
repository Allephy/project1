import { React, useState } from "react";
import { useNavigate } from "react-router-dom";


//testpage->result-logiv->result-page
//ResultPage 구현
export default function ResultPage(props) {

        //ResultLogic에서 받은 props
        let result_page_show = null;

        const [id, setId] = useState(1);

        const percentage1 = Number(props.percentage[0].value) + 50;
        const percentage2 = Number(props.percentage[1].value) + 50;
        const percentage3 = Number(props.percentage[2].value) + 50;
        const percentage4 = Number(props.percentage[3].value) + 50;

    
        function NextPage() {
        const Next = (event) => {
        event.preventDefault();
        setId(Number(id)+1);
        }  
        console.log('props', id)
        let move = null;
        if (id < 4) {
            move = <button onClick={Next}>Next Page</button>
        } else if (id === 4) {
            move = <input type='submit' value='Get Your Result Type' onClick={TypeNavigation}></input>
        } else if (id === 5) {
            move = null;
        }
    
        return(
            <div>
                {move}
            </div>
        ); 
        };
        
        if (Number(id) === 1) {
            result_page_show = ("Draw: "+ percentage1 + "\n"+"Push: "+ (100-percentage1))
        } else if (Number(id) === 2) {
            result_page_show = ("Change: "+ percentage2 + "\n"+" Keep: "+ (100-percentage2))
        } else if (Number(id) === 3) {
            result_page_show = ("Appeal: "+ percentage3 + "\n"+"Natural: "+ (100-percentage3))
        } else if (Number(id) === 4) {
            result_page_show = ("Flesh: "+ percentage4 + "\n"+"Spirit: "+ (100-percentage4))
        }
        /* else if (Number(id) === 6) {
            result_page_show = props.percentage[4].value
        } else if (Number(id) === 6) {
            result_page_show = <chooseType></chooseType>
        }*/
        
        
        
        const navigate = useNavigate();
        const TypeNavigation = () => {
            if( props.type === "Charisma") {
                navigate("/Charisma");
            }
            else if( props.type === "Charmer") {
                navigate("/Charmer");
            }

            else if( props.type === "Coquette") {
                navigate("/Coquette");
            }


            else if( props.type === "IdealLover") {
                navigate("/IdealLover");
            }

            else if( props.type === "Lake") {
                navigate("/Lake");
            }

            else if( props.type === "Natural") {
                navigate("/Natural");
            }

            else if( props.type === "Siren") {
                navigate("/Siren");
            }

            else if( props.type === "Star") {
                navigate("/Star");
            }



        }
        

        
        console.log('id', id);
    
    
        return(
        <div>
            <div>This is TypePage</div>
            <div>
            {result_page_show}
            </div>
            
            <NextPage id={id}></NextPage>

        </div>
        )

    
        
    
}
//We should display the result type depending on some values in the test pages.


