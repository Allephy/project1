import { React, useState } from "react";
import { useNavigate } from "react-router-dom";


//testpage->result-logiv->result-page
//ResultPage 구현
export default function ResultPage(props) {

        //ResultLogic에서 받은 props
        let result_page_show = null;
        let result_element_show=null;

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
            if(percentage1<50) {
                result_element_show = ("이성관계에서 관심을 받는 수동적인 입장이며, 마음을 여는 속도가 느린 편입니다.")
            }
            else {
                result_element_show = ("이성관계에서 관심을 주는 능동적인 입장이며,마음을 여는 속도가 빠른 편입니다")
            }
        } else if (Number(id) === 2) {
            result_page_show = ("Change: "+ percentage2 + "\n"+" Keep: "+ (100-percentage2))
            if(percentage2<50) {
                result_element_show = ("일관적이고 침착하며 단순한 사람의 매력은 그들의 안정적이고 예측 가능한 성격에서 비롯됩니다." +"\n"+ "이러한 유형의 사람들은 혼란스러운 상황에서도 평정심을 유지하며, 일상에서 일관된 태도와 행동을 보여줍니다."+"\n"+ "이들은 복잡함을 피하고 명확하고 진정성 있는 관계를 추구함으로써, 주변 사람들에게 편안함과 신뢰감을 줍니다.")
            } else {
                result_element_show = ("변화를 추구하며 감정적이고 복잡한 사람의 매력은 그들의 역동성과 깊이에서 비롯됩니다. "+"\n"+ " 이런 유형의 사람들은 새로운 경험과 변화를 적극적으로 탐색하며, 그 과정에서 다양한 감정적 깊이와 복잡성을 드러냅니다. "+"\n"+ " 그들의 감정적인 성향은 인간 관계에서 깊은 연결감과 공감 능력을 제공합니다.")
            }
        } else if (Number(id) === 3) {
            result_page_show = ("Appeal: "+ percentage3 + "\n"+"Natural: "+ (100-percentage3))
            if(percentage3<50) {
                result_element_show = ("이러한 유형의 사람들은 그들의 화려한 외모나 행동으로 주목을 받으며, 동시에 자신의 내면을 숨김으로써 신비로움을 유지합니다." +"\n"+ "그들의 복잡하고 다면적인 성격은 깊은 매력과 관심을 불러일으킵니다.")
            } else {
                result_element_show = ("이러한 유형의 사람들은 그들의 간소한 외모와 행동으로 솔직하고 진실된 성격을 나타냅니다. " +"\n"+ " 그들의 평화로운 성향은 주변 사람들에게 안정감과 편안함을 제공합니다." +"\n"+ "이들은 복잡한 세상 속에서 단순함과 진실함을 추구하며, 그들의 순수한 마음과 평온한 태도는 주변 사람들에게 따뜻함과 안식을 제공합니다.")
            }
        } else if (Number(id) === 4) {
            result_page_show = ("Flesh: "+ percentage4 + "\n"+"Spirit: "+ (100-percentage4))
            if(percentage4<50) {
                result_element_show = ("잘 가꾸어진 외모와 건강한 몸매는 자신감과 자기 관리에 대한 높은 의식을 반영합니다."+"\n"+"삶을 즉흥적으로 즐기고 현재의 순간에 집중하는 태도는 삶에 대한 열정과 즐거움을 반영합니다"+"\n"+"직관을 중시하는 사람들은 감각적이고 본능적인 접근을 보여줍니다."+"\n"+"활동적이고 에너지 넘치는 성격은 다른 사람들에게 활력과 긍정적인 에너지를 전달합니다. ")
            } else {
                result_element_show = ("이러한 유형의 사람들은 지적 호기심과 깊은 사고를 가지고 있으며, 이는 풍부한 지식과 통찰력을 나타냅니다."+"\n"+"미래 지향적인 사고 방식을 가진 사람들은 장기적인 목표와 계획을 세우는 데 능숙합니다."+"\n"+"깊은 성찰과 철학적 사고를 중시하는 이들은 자신의 가치관과 세계관을 깊이 있게 탐구합니다."+"\n"+"이들은 복잡한 상황을 명확하고 합리적으로 분석하며, 이는 신뢰감과 안정감을 제공합니다.")
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
            <div>This is TypePage</div>
            <div>
            {result_page_show}
            </div>
            <div>
            {result_element_show}
            </div>
            
            <NextPage id={id}></NextPage>

        </div>
        )

    
        
    
}
//We should display the result type depending on some values in the test pages.


