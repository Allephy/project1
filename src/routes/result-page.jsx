import { React, useState } from "react";
import { useNavigate } from "react-router-dom";


//testpage->result-logiv->result-page
//ResultPage 구현

export function RenderImage(name) {
    return `/images/${name}.png`;
}

export default function ResultPage(props) {

        //ResultLogic에서 받은 props
        let result_page_show = null;
        let your_result = null;
        let result_element_show=null;
        let result_summary=null;

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
        if (id < 5) {
            move = <button onClick={Next}>Next Page</button>
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
        if (Number(id) === 1) {

            if( props.type === "Charisma") {
               your_result =("Charisma");
               result_element_show = ("성스러운 신념가형");

            }
            else if( props.type === "Charmer") {
                your_result =("Charmer");
                result_element_show = ("능숙한 외교관형");
            }

            else if( props.type === "Coquette") {
                your_result =("Coquette");
                result_element_show = ("냉담한 나르시시스트형");
            }


            else if( props.type === "IdealLover") {
                your_result =("IdealLover");
                result_element_show = ("헌신적인 연인형");
            }

            else if( props.type === "Lake") {
                your_result =("Lake");
                result_element_show = ("열정적인 바람둥이형");
            }

            else if( props.type === "Natural") {
                your_result =("Natural");
                result_element_show = ("천진난만한 창조자형");
            }

            else if( props.type === "Siren") {
                your_result =("Siren");
                result_element_show = ("매혹적인 유혹자형");
            }

            else if( props.type === "Star") {
                your_result =("Star");
                result_element_show = ("신비로운 우상형");
            }
            
        }
        
        else if (Number(id) === 2) {
            result_page_show = ("Draw: "+ percentage1 +"%" + "\n"+" Push: "+ (100-percentage1)+"%")
            if(percentage1>50) {
                your_result = ("Draw")
                result_element_show = ("이성관계에서 관심을 받는 수동적인 입장이며, 마음을 여는 속도가 느린 편입니다.")
            }
            else {
                your_result = ("Push")
                result_element_show = ("이성관계에서 관심을 주는 능동적인 입장이며,마음을 여는 속도가 빠른 편입니다")
            }
        } else if (Number(id) === 3) {
            result_page_show = ("Change: "+ percentage2+"%" + "\n"+" Keep: "+ (100-percentage2)+"%")
            if(percentage2>50) {
                your_result = ("Change")
                result_element_show = ("변화를 추구하며 감정적인 사람의 매력은 그들의 역동성에서 비롯됩니다. "+"\n"+ " 이런 유형의 사람들은 새로운 경험과 변화를 적극적으로 탐색하며, 그 과정에서 다양한 감정적 깊이를 드러냅니다. "+"\n"+ " 그들의 감정적인 성향은 인간 관계에서 깊은 연결감과 공감 능력을 제공합니다.")
            } else {
                your_result = ("Keep")
                result_element_show = ("일관적이고 침착한 사람의 매력은 그들의 안정적이고 예측 가능한 성격에서 비롯됩니다." +"\n"+ "이러한 유형의 사람들은 혼란스러운 상황에서도 평정심을 유지하며, 일상에서 일관된 태도와 행동을 보여줍니다."+"\n"+ "이들은 명확하고 진정성 있는 관계를 추구함으로써, 주변 사람들에게 편안함과 신뢰감을 줍니다.")
               
            }
        } else if (Number(id) === 4) {
            result_page_show = ("Appeal: "+ percentage3+"%" + "\n"+"Honest: "+ (100-percentage3)+"%")
            if(percentage3>50) {
                your_result = ("Appeal")
                result_element_show = ("화려한 외모나 행동으로 주목을 받으며, 동시에 자신의 내면을 숨김으로써 신비로움을 유지합니다." +"\n"+ "그들의 복잡하고 다면적인 성격은 깊은 매력과 관심을 불러일으킵니다.")
            } else {
                your_result = ("Honest")
                result_element_show = ("간소한 외모와 행동으로 솔직하고 진실된 성격을 지니고 있습니다." +"\n"+ "이들은 복잡한 세상 속에서 단순함과 진실함을 추구하며, 그들의 순수한 마음과 평온한 태도는 주변 사람들에게 따뜻함과 안식을 제공합니다.")
            }
        } else if (Number(id) === 5) {
            result_page_show = ("Flesh: "+ percentage4+"%" + "\n"+"Spirit: "+ (100-percentage4)+"%")
            if(percentage4>50) {
                your_result = ("Flesh")
                result_element_show = ("인생을 즉흥적으로 즐기고 현재의 순간에 집중하는 태도는 삶에 대한 열정과 즐거움을 지니고 있습니다."+"\n"+"직관을 중시하는 사람들은 감각적이고 본능적인 접근을 보여줍니다."+"\n"+"활동적이고 에너지 넘치는 성격은 다른 사람들에게 활력과 긍정적인 에너지를 전달합니다. ")
            } else {
                your_result = ("Spirit")
                result_element_show = ("인생을 설계하고 비전을 지닌 사람들은 어떻게 하면 잘 살 것인지에 대한 철학을 지니고 있습니다. "+"\n"+"논리를 중시하는 사람들은 복잡한 상황을 명확하고 합리적인 접근을 보여줍니다."+"\n"+"깊은 성찰과 철학적 사고를 중시하는 이들은 다른 사람들에게 깨달음과 지혜를 전달합니다.")
            }
        }
       
        
        
        
        
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
            <div className="text-2xl px-[1.25rem] py-[2.5rem]">
            당신의 LoReT: {your_result} 
            </div>
            <div className="mx-[1.25rem] my-[1.25rem] ">
            <img src = {RenderImage(your_result)} width="100%" height="100%" /> 
            </div>

            <div className="text-2xl font-light mx-[1.25rem]">
            {result_page_show}
            </div>

            
            <div className="px-[1.25rem] pt-[0.75rem] font-light leading-loose">
            {result_element_show}
            </div>
            
            <div className="text-center font-semibold py-[0.5rem] px-[1.0rem] mx-[5.0rem]  mt-[2.5rem]">
            <div className='py-3 px-4 inline-flex items-center gap-x-2 font-light text-sm rounded-full
            border-2  bg-black text-white shadow-md
            disabled:opacity-50 disabled:pointer-events-none '>
            <NextPage id={id} ></NextPage>  
            </div>
            </div>

            <br/><br/><br/>
        </div>
        )

    
        
    
}
//We should display the result type depending on some values in the test pages.


