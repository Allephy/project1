import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function UserResult(props) {
    const [id, setId] = useState(1);
    
        function NextPage() {
        const Next = (event) => {
        event.preventDefault();
        setId(Number(id)+1);
                
        };
        console.log('props', id)
        let move = null;
        if (id < 5) {
            move = <button onClick={Next}>Move to the Next Page</button>
        } else if (id === 5) {
            move = <input type='submit' value='Get Your Result' onClick={Next}></input>
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
            <h1>This is TypePage</h1>
 
            <TestPage id={id}></TestPage>
            <NextPage id={id}></NextPage>
            
        </div>
        )
}




    
       