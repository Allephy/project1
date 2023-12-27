import React, { useRef, useEffect } from 'react';

export default function QuestionBlock(props){
    const clicked = (event) => {
        const newAns = []
        for(let i=0; i<8; i++){
            if (i === Number(props.id)){
                newAns.push({id: props.id, value: event.target.value});
            } else {
                newAns.push(props.ans[i]);
            }
        }
        props.setAns(newAns)
    }
    return(
        <div className = "border-b-2  border-t-2 h-70  px-5 py-10 mx-5 my-5  text-sm lg:text-lg" >
            <form>
                <fieldset>
                <legend className='mb-5 text-lg lg:text-xl' ><span>{props.name}</span></legend>
                
                <div className="" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="strongly agree"
                    value='+2'
                    onChange={clicked}
                    />
                    <label
                    className=""
                    htmlFor=""
                    >
                    매우긍정
                    </label>
                    </div>

                    <div className="" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="agree"
                    value='+1'
                    onChange={clicked}
                    />
                    <label
                    className=""
                    htmlFor=""
                    >
                    긍정
                    </label>
                    </div>

                    <div className="" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="disagree"
                    value='-1'
                    onChange={clicked}
                    />
                    <label
                    className=""
                    htmlFor=""
                    >
                    부정
                    </label>
                    </div>

                    <div className="" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="strongly disagree"
                    value='-2'
                    onChange={clicked}
                    />
                    <label
                    className=""
                    htmlFor=""
                    >
                    매우부정
                    </label>
                    </div>




                    


                    
            </fieldset>
            </form>
            
        </div>
        

    );
}

