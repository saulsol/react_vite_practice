import {useState} from "react"


export default function Body(){

    const [light, setLight] = useState("OFF");
    // light 는 값(최초는 OFF값이 있음)
    // setLight는 상태 변화 함수 즉 light 의 값을 변화시킨다.
    console.log(light)
    
    return (
        

        <div className="body">
            <h1>{light}</h1>

            <button onClick={()=>{
                setLight("ON");

            }}>켜기</button>

            <button onClick={()=>{
                setLight("OFF");
            }}>끄기</button>
        </div>
    );
}