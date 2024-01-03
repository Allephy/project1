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
        <div className = "border-gray-300  border-b-2  border-r-2 shadow-lg drop-shadow-md rounded-md h-[24.0rem] px-[1.25rem] py-[2.5rem] mx-[1.25rem] my-[1.5rem] text-sm lg:text-lg" >
            <form>
                <fieldset>
                <legend className='mb-[1.0rem] text-lg lg:text-xl' ><span>{props.name}</span></legend>

                <div>
                <label className="flex shadow-md  bg-white text-black rounded-md px-[0.75rem] py-[0.5rem] my-[0.75rem]  hover:bg-gray-200 cursor-pointer accent-black">
                <input type="radio" name="name" id="strongly agree" value='+2' onChange={clicked}/>
                <span className="pl-[0.5rem] lg:text-lg">매우 동의한다</span>
                </label>

                <label className="flex shadow-md  bg-white text-black rounded-md px-[0.75rem] py-[0.5rem] my-[0.75rem]  hover:bg-gray-200 cursor-pointer accent-black">
                <input type="radio" name="name" id="agree" value='+1' onChange={clicked}/>
                <span className="pl-[0.5rem] lg:text-lg">동의한다</span>
                </label>

                <label className="flex shadow-md  bg-white text-black rounded-md px-[0.75rem] py-[0.5rem] my-[0.75rem]  hover:bg-gray-200 cursor-pointer accent-black">
                <input type="radio" name="name" id="disagree" value='-1' onChange={clicked}/>
                <span className="pl-[0.5rem] lg:text-lg">동의하지 않는다</span>
                </label>

                <label className="flex shadow-md  bg-white text-black rounded-md px-[0.75rem] py-[0.5rem] my-[0.75rem]  hover:bg-gray-200 cursor-pointer accent-black">
                <input type="radio" name="name" id="strongly disagree" value='-2' onChange={clicked}/>
                <span className="pl-[0.5rem] lg:text-lg">매우 동의하지 않는다</span>
                </label>
             </div>
            
            </fieldset>
            </form>
            
        </div>
        
    );
}

