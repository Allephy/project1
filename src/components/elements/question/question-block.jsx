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
        <div className = "border-gray-300  border-b-2  border-r-2 shadow-lg drop-shadow-md rounded-md h-[17.5rem] px-[1.25rem] py-[2.5rem] mx-[1.25rem] my-[1.5rem] text-sm lg:text-lg" >
            <form>
                <fieldset>
                <legend className='mb-[1.0rem] text-lg lg:text-xl' ><span>{props.name}</span></legend>
                
                <div className='absolute flex item-center mx-auto before:my-[0.5rem] appearance-none'>
                    <div className="flex me-[1.0rem] py-[0.25rem]" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="strongly disagree"
                    value='-2'
                    onChange={clicked}
                    />
                    
                    </div>

                    <div className="flex  me-[1.0rem] py-[0.25rem]" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="disagree"
                    value='-1'
                    onChange={clicked}
                    />
                    </div>

                    <div className="flex me-[1.0rem] py-[0.25rem]" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="neutral"
                    value='0'
                    onChange={clicked}
                    />
                    
                    </div>


                    <div className="flex me-[1.0rem] py-[0.25rem]" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="agree"
                    value='+1'
                    onChange={clicked}
                    />
                    
                    </div>

                    <div className="flex me-[1.0rem] py-[0.25rem]" >
                    <input
                    className=""
                    type="radio"
                    name="name"
                    id="strongly agree"
                    value='+2'
                    onChange={clicked}
                    />
                    
                    </div>
                </div>

                    
            </fieldset>
            </form>
            
        </div>
        
    );
}

