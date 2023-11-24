import React, { useState } from 'react';

export default function QuestionBlock(props){
  
    return(
        <div className = "aspect-ratio: auto container box-border rounded-md shadow-inner shadow-lg h-80 w-auto px-10 py-10 mx-3 my-10 outline outline-1  outline-offset-1" >
            <form>
                <fieldset>
                <legend>{props.name}</legend>
                    <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <div class="flex items-center ps-3">
                            <input type="radio" name="choice" id="strongly disagree" value='+2' onClick={(event)=>{props.setAns(Number(props.ans) + Number(event.target.value))}} 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>

                            <label htmlFor = "strongly disagree" className='"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"'> 매우긍정 </label>

                            <input type="radio" name="choice" id="strongly disagree" value='+1' onClick={(event)=>{props.setAns(Number(props.ans) + Number(event.target.value))}} 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            
                            <label htmlFor = "strongly disagree" className='"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"'> 긍정 </label>

                            <input type="radio" name="choice" id="strongly disagree" value='-1' onClick={(event)=>{props.setAns(Number(props.ans) + Number(event.target.value))}} 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            
                            <label htmlFor = "strongly disagree" className='"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"'> 부정 </label>

                            <input type="radio" name="choice" id="strongly disagree" value='-2' onClick={(event)=>{props.setAns(Number(props.ans) + Number(event.target.value))}} 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            
                            <label htmlFor = "strongly disagree" className='"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"'> 매우부정 </label>




                
                        </div>
                    </ul>
            </fieldset>
            </form>
            
        </div>
        

        
    );
}

