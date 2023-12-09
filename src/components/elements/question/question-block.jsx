import React, { useRef, useEffect } from 'react';

export default function QuestionBlock(props){
    //const clicking = (event) => useEffect(()=>{props.setAns(event.target.value)})
    console.log('*****6767', props.ans);
    /*function clicked(x, ) {
        const newTopics = []
        for(let i=0; i<10; i++){
            if()
        }

    }*/
    const clicked = (event) => {
        console.log(event.target.value);
        props.setAns(Number(props.ans)+Number(event.target.value))
    }
    return(
        <div className = "aspect-ratio: auto container box-border rounded-md shadow-lg h-70 w-auto px-10 py-10 mx-5 my-10 outline outline-1  outline-offset-1 text-sm" >
            <form>
                <fieldset>
                <legend>{props.name}</legend>
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" >
                    <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-1 h-5 w-5 rounded-full border-5 border-solid border-neutral-300 
                    before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent 
                    before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                    after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] 
                    checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 
                    checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary 
                    checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] 
                    hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                    focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="name"
                    id="strongly agree"
                    value='+2'
                    onChange={clicked}
                    //onClick={(event)=>{  window.scrollTo({ top: 400, behavior: "smooth" }); props.ans[]; console.log('dldlldldldl', props.ans) } }
                    />
                    <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer "
                    htmlFor="strongly agree"
                    >
                    매우긍정
                    </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" >
                    <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-1 h-5 w-5 rounded-full border-5 border-solid border-neutral-300 
                    before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent 
                    before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                    after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] 
                    checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 
                    checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary 
                    checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] 
                    hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                    focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="name"
                    id="agree"
                    value='+1'
                    onChange={clicked}
                    //onClick={(event)=>{ window.scrollTo({ top: 400, behavior: "smooth" }); ;  } }
                    />
                    <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="agree"
                    >
                    긍정
                    </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" >
                    <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-1 h-5 w-5 rounded-full border-5 border-solid border-neutral-300 
                    before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent 
                    before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                    after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] 
                    checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 
                    checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary 
                    checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] 
                    hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                    focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="name"
                    id="disagree"
                    value='-1'
                    onChange={clicked}
                    //onClick={(event)=>{ window.scrollTo({ top: 400, behavior: "smooth" }); clicking;} }
                    />
                    <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="disagree"
                    >
                    부정
                    </label>
                    </div>

                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" >
                    <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-1 h-5 w-5 rounded-full border-5 border-solid border-neutral-300 
                    before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent 
                    before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                    after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] 
                    checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 
                    checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary 
                    checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] 
                    hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                    focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="name"
                    id="strongly disagree"
                    value='-2'
                    onChange={clicked}
                    //onClick={(event)=>{ window.scrollTo({ top: 400, behavior: "smooth" }); clicking;} }
                    />
                    <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="strongly disagree"
                    >
                    매우부정
                    </label>
                    </div>




                    


                    
            </fieldset>
            </form>
            
        </div>
        

        
    );
}

