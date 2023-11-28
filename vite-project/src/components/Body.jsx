import {useState} from "react"

function Lightbulb({light}){
    return <>
        {light === 'ON' ? 
        <div style={{backgroundColor:"orange"}}>ON</div>
        :
        <div style={{backgroundColor:"gray"}}>OFF</div>}
    </>
}

function StaticLightbulb(){
    return <>
         <div style={{backgroundColor:"gray"}}>OFF</div>    
    </>
}



export default function Body(){

    const [light, setLight] = useState("OFF");
    // light 는 값(최초는 OFF값이 있음)
    // setLight는 상태 변화 함수 즉 light 의 값을 변화시킨다.
    console.log(light)
    
    return (
        

        <div className="body">
            <h1>{light}</h1>
            <Lightbulb light={light} />
            <button onClick={()=>{
                setLight("ON");

            }}>켜기</button>

            <button onClick={()=>{
                setLight("OFF");
            }}>끄기</button>
        </div>
    );
}