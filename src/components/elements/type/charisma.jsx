import { ResultLogic } from "@routes/result-logic;"

//DCCTM,DCCFM,DCCTP,DCCTM
const type = [D,C,C,O,O];

export default function Charisma() {
    return (
        <>
        <ResultLogic type />
        <h1>charisma</h1>
        </>
    );
}