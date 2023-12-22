/**각 section의 총점을 동일하게 하고 statements에 각각 가중치를 분배하여 총점을 맞춤. 
가중치의 절댓값 총점을 정해두고 동의/비동의에 따라 가중치의 부호가 달라지게 함. 
(section의 가중치의 총합의 부호를 보면 어떤 성향이 더 강한지 알 수 있고, 절댓값을 보면 반대성향에 비해 얼마나 강한지 알 수 있음.) 
질문 개수를 다르게 할 수 있음. 이로써 두 개 이상의section들 사이에서 statement 사이의 가중치를 부여할 수는 없으나 
각 section에서 어떤 성향이 얼마나 더 강한지는 알 수 있음. E.g., section 1에서 pulling이 pushing에 비해 얼마나 강한지 알 수 있는 반면, 
section1의 1번 statement와 section2의 1번 statement 각각의 가중치의 상대적 크기는 무의미함. 
*/

//Section 1: Drawing: -1 /Pushing: 1
// 5:5
const DPQuestion = [
    {
        id:1,
        statement: -1,
        question:"내가 관심이 있는 상대와 둘이 약속을 잡는 것보다는 상대가 참석하는 자리에 참석한다"
    },
    {
        id:2,
        statement: 1,
        question:""
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
    },
    {
        id:9,
        statement: -1,
        question:"내가 상대를 슬프게 해도 그로 인해 나를 더 사랑하게 된다면 괜찮다"
    },
    {
        id:10,
        statement: 1,
        question:"상대가 나를 위해 바뀌기보다는 상대를 위해 나를 바꾼다"
    },

    
]

// Section 2: Change: -1/ Keep: 1
// Section 2 질문 추가 요청 바람.
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
        statement: -1,
        question:"상대와 만나는 시간을 일부러 다양하게 한다"
    },
    {
        id:6,
        statement: -1,
        question:"갑자기 연락을 끊어본 적이 있다"
    },
    {
        id:7,
        statement: -1,
        question:"상대가 잘못했을 때 사과하게 만드는 편이다"
    },
    {
        id:8,
        statement: -1,
        question:"상대와 약속을 잡을 때 만나는 장소를 일부러 다양하게 한다"
    },
    {
        id:9,
        statement: 1,
        question:"화가 날 때 조곤히 말하는 편이다"
    },
    {
        id:10,
        statement: -1,
        question:"상대를 좋아하는 감정이 갑자기 사라지기도 한다"
    },
    
]

//Section 3: Appeal: -1/ Natural: 1
// 5:5
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
        question:"상대에게 먼저 장난을 친다"
    },
    {
        id:4,
        statement: 1,
        question:"나의 매력은 말과 행동에서 나온다"
    },
    {
        id:5,
        statement: 1,
        question:"나에대해 잘 아는 사람보다 모르는 사람이 나를 좋아한 경우가 많다"
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
        question:"나를 소개할 때 모호하기보다 정확하게 하려고 노력한다"
    },
    {
        id:9,
        statement: -1,
        question:"내가 나를 보는 모습과 사람들이 나를 보는 모습은 꽤나 다르다"
    },
    {
        id:10,
        statement: 1,
        question:"나는 파도보다 잔잔한 물결에 가까운 사람이다"
    },
    
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
        question:"성격이 매력적인 사람이 외모가 매력적인 사람보다 끌린다"
    },
    {
        id:3,
        statement: -1,
        question:"상대가 내 성격보다 외모에 반하는 것이 좋다"
    },
    {
        id:4,
        statement: 1,
        question:"현재 나에게는 신체를 가꾸는 것보다 정신을 고양하는 것이 더 중요하다"
    },
    {
        id:5,
        statement: 1,
        question:"상대를 알아갈수록 관심이 생기는 편이다"
    },
    {
        id:6,
        statement: -1,
        question:"스킨십을 주도하려고 하며 적극적이다."
    },
    {
        id:7,
        statement: 1,
        question:"외모에 대한 칭찬이 성격에 대한 칭찬보다 기억에 더 남는다"
    },
    {
        id:8,
        statement: 1,
        question:"관심이 있는 상대가 있는 자리에 나갈 때 외모를 꾸미기보다 대화거리를 준비하는 편이다"
        
    },
    {
        id:9,
        statement: -1,
        question:"헤어진 연인의 신체적 특징이 성격보다 기억에 더 남는다"
    },
    {
        id:10,
        statement: -1,
        question:"연인이 자주 바뀌었다"
    },
    
]

export {
    DPQuestion, CKQuestion, ANQuestion, FSQuestion
};