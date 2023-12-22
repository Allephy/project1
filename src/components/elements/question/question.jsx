/**각 section의 총점을 동일하게 하고 statements에 각각 가중치를 분배하여 총점을 맞춤. 
가중치의 절댓값 총점을 정해두고 동의/비동의에 따라 가중치의 부호가 달라지게 함. 
(section의 가중치의 총합의 부호를 보면 어떤 성향이 더 강한지 알 수 있고, 절댓값을 보면 반대성향에 비해 얼마나 강한지 알 수 있음.) 
질문 개수를 다르게 할 수 있음. 이로써 두 개 이상의section들 사이에서 statement 사이의 가중치를 부여할 수는 없으나 
각 section에서 어떤 성향이 얼마나 더 강한지는 알 수 있음. E.g., section 1에서 pulling이 pushing에 비해 얼마나 강한지 알 수 있는 반면, 
section1의 1번 statement와 section2의 1번 statement 각각의 가중치의 상대적 크기는 무의미함. 
*/

//Section 1: Drawing: -1 /Pushing: 1
// 4:4
const DPQuestion = [
    {
        id:1,
        statement: -1,
        question:"내가 관심이 있는 상대와 둘이 약속을 잡는 것보다는 상대가 참석하는 자리에 참석한다"
    },
    {
        id:2,
        statement: 1,
        question:"적극적이라는 말을 많이 듣는다."
    },
    {
        id:3,
        statement: 1,
        question:"상대가 나에게 관심을 보이는 이유가 내가 상대에게 관심을 갖기 때문이더라도 괜찮다"
    },
    {
        id:4,
        statement: -1,
        question:"상대에게 관심이 있다는 사실이 알려질 때 주로 상대가 나에게 관심을 잃었다"
    },
    {
        id:5,
        statement: -1,
        question:"관심 있는 상대를 일부러 차갑게 대한다"
    },
    {
        id:6,
        statement: 1,
        question:"관심이 있는 상대의 연락이나 스토리를 바로 읽는다"
    },
    {
        id:7,
        statement: 1,
        question:"관심이 있는 상대에게 더 친절하다."
    },
    {
        id:8,
        statement: -1,
        question:"일부러 연인에게 약간 못되게 굴 때가 있었다"
    }
    
]

// Section 2: Change: -1/ Keep: 1
// Section 2 질문 추가 요청 바람. 4:4
const CKQuestion = [
    {
        id:1,
        statement: -1,
        question:"평소에 연락하지 않는 시간에 불쑥 연락하곤 한다"
    },
    {
        id:2,
        statement: -1,
        question:"상대의 이상형처럼 바뀌기 위해 상당히 노력해본 적이 있다"
    },
    {
        id:3,
        statement: -1,
        question:"상대와 만날 때 꾸미는 스타일을 자주 바꾼다"
    },
    {
        id:4,
        statement: 1,
        question:"늘 한결 같아서 좋다는 말을 듣는다"
    },
    {
        id:5,
        statement:-1,
        question:"상대를 만나기 전과 달라졌다는 말을 많이 듣는다."
    },
    {
        id:6,
        statement: 1,
        question:"상대가 잘못했다고 해서 이별을 쉽게 생각하지는 않는다"
    },
    {
        id:7,
        statement: 1,
        question:"화가 날 때 조곤히 말하는 편이다"
    },
    {
        id:8,
        statement: 1,
        question:"상대를 좋아하는 감정이 갑자기 사라지지는 않는다"
    },
    
]

//Section 3: Appeal: -1/ Natural: 1
// 3:55
const ANQuestion = [
    {
        id:1,
        statement: 1,
        question:"주로 상대가 나를 아이 대하듯 한다"
    },
    {
        id:2,
        statement: 1,
        question:"상대에게 먼저 장난을 친다"
    },
    {
        id:3,
        statement: -1,
        question:"내가 가진 매력이 무엇인지 잘 알고 있다."
    },
    {
        id:4,
        statement: 1,
        question:"나의 매력은 말과 행동에서 나온다"
    },
    {
        id:5,
        statement: -1,
        question:"나와 친한 사람보다 친하지는 않지만 안면이 있는 사람이 나를 좋아한 경우가 많다"
    },
    {
        id:6,
        statement: -1,
        question:"관심 있는 상대가 있는 자리에 갈 때 평소보다 화려하게 입는다"
    },
    {
        id:7,
        statement: 1,
        question:"상대에게 멋진 모습보다 일상적인 모습을 보여준다"
    },
    {
        id:8,
        statement: 1,
        question:"나는 상대에게 어떤 모습을 일부러 보여주려고 한 적은 없지만 상대는 나를 좋아한다"
    }
]

//Section 4: Traditional Gender: 0 / Floating Gender: 1
// 5:5

//Section 5: Flesh: -1 / Spirit: 1
const FSQuestion = [
    {
        id:1,
        statement: 1,
        question:"내 이상형은 주로 외모보다 성격에 관한 것이다"
    },
    {
        id:2,
        statement: 1,
        question:"성격을 보는 기준이 외모를 보는 기준보다 까다롭다"
    },
    {
        id:3,
        statement: -1,
        question:"상대가 내 성격보다 외모에 반하는 것이 좋다"
    },
    {
        id:4,
        statement: 1,
        question:"상대를 알아갈수록 관심이 생기는 편이다"
    },
    {
        id:5,
        statement: -1,
        question:"스킨십을 주도하려고 하며 적극적이다"
    },
    {
        id:6,
        statement: 1,
        question:"외모에 대한 칭찬이 성격에 대한 칭찬보다 기억에 더 남는다"
    },
    {
        id:7,
        statement: 1,
        question:"상대가 좋아하는 책이나 영화 등을 추천하면 정말로 본다"
        
    },
    {
        id:8,
        statement: -1,
        question:"나는 장거리 연애를 하기는 힘들 것이다."
        
    }
]

export {
    DPQuestion, CKQuestion, ANQuestion, FSQuestion
};