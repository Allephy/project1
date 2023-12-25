import { Link } from 'react-router-dom';
export default function Home(){
    return (
        <div className="mb:flex font-light mx-4 tracking-wide leading-loose">
            <h5 className="text-2xl text-justify mb-5">연인역할유형검사 <br/> <span className="text-xl">Lovers' Role Type Test (LoReT Test)</span></h5>
            <Link to='/testpage'>
            <img src="/icon.png" alt="The Art of Seduction" height="100%" width="100%" className="mx-auto mb-5" />
            </Link>
            <a className="text-2xl font-light underline decoration-1 mx-5" href="/testpage">검사 실시</a>
            <h1 className="text-lg mx-5">
            무슨 역할을 수행하는지 알 수 있다면, 상대방을 대하는 성향이나 행동을 확인 할 수 있습니다. <br/>

            <div className="mx-5 my-10">
            <img src="/images/Book.jpg" alt="The Art of Seduction" height="100%" width="100%" />
            </div>
                
             LoReT Test는 "The Art of Seduction"의 내용을 아이디어로 채택하여 만들었습니다.
            우선, 사람이 각기 각각 다르다는 말에 공감하는지 묻고 싶습니다. 모두가 쉽게 공감할 것입니다. 
            <br/> <br/>
             하지만, 우리는 정말로 이렇게 간단하고 중요한 사실을 쉽게 잊어버리고, 서로가 서로를 쉽게 오해해버리고는 합니다. 
            색안경을 쓰로 남을 바라보면 안된다는 사실은 모두가 알고 있지만, 이를 실천에 옮긴다는 건 정말로 쉽지 않습니다. 
            이런 틀에 같힌 사고 방식은 심지어 세상에서 가장 가깝다는 연인 사이에게조차 일어나곤 합니다. 
            이러한 사고 방식은 오해를 점점 쌓기마련이고, 사소하거나 큰 오해가 점점 쌓여 사랑이라는 감정은 증오와 혐오로 바뀌며, 
            결국에 상대방을 강한 부정적인 감정은 연인에게도, 스스로에게도 크나큰 상처를 남기게 됩니다. 
            <br/> <br/>
             좋아하고 사랑하기에, 연인을 위해서도 나를 위해서도 우리는 서로가 서로를 알아가야 합니다. 
            서로가 서로를 알아가는 방식은 사람마다 '이해' 혹은 '공감'일겁니다. 
            하지만, 어쩌면 가장 중요한 건 '있는 그 자체를 받아들인다'는 걸지도 모르겠습니다.
            </h1>
            <br/>
            
            <h1 className="text-sm font-light mx-5 mb-8">Contract Us: <br/> iforgoten@naver.com  &  lightwalk12@gmail.com</h1>
            
       </div>
        
        
    )
 }