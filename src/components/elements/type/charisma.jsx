import { ResultLogic } from "@routes/result-logic;"

//Charisma 	1. PCCTM, PCCFM, PCNTM,PCNFM
const typearr = ["PCCTM","PCCFM","PCNTM","PCNFM"];

export default function Charisma() {
    return (
        <>
        <ResultLogic type />
        <h1>charisma</h1>
        </>
    );
}