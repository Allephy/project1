import { Link } from 'react-router-dom';
export default function Home(){
    return (
        <div className="mb:flex font-light mx-3 tracking-wide leading-loose">
            <h5 className="text-2xl text-justify mb-5">연인역할유형검사 <br/> <span className="text-xl">Lovers' Role Type Test (LoReT Test)</span></h5>
            <Link to='/testpage'>
            <img src="/icon.png" alt="The Art of Seduction" height="100%" width="100%" className="mx-auto mb-5" />
            </Link>
            <a className="text-2xl font-light underline decoration-1" href="/testpage">검사 실시</a>
            <h1 className="text-xl">
                Robert Greene의 "The Art of Seduction"라는 책의 내용을 아이디어로 하여 만들어봤습니다.
            </h1>
            <br/>
            <br/>
            <div className="mx-10 mb-10">
            <img src="/images/Book.jpg" alt="The Art of Seduction" height="100%" width="100%" />
            </div>
            <h1 className="font-light mx-5 mb-8">Contract Us: <br/> iforgoten@naver.com /  lightwalk12@gmail.com</h1>
            
       </div>
        
        
    )
 }