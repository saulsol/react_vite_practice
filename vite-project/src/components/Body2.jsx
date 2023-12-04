import {useRef, useState} from "react"
export default function Body2(){

    const [state, setState] = useState({
        title : "",
        gender : "",
        bio : ""

    })

    // 레퍼런스 객체 생성
    const titleRef = useRef()



    
    // const [title, setTitle] = useState("");
    // const [gender, setGender] = useState("");
    // const [bio, setBio] = useState("");


    console.log(state.title);
    console.log(state.gender);
    console.log(state.bio);

    const onChangeTitle = (e)=>{
        setState({...state,
            title: e.target.value,
        });
    };

    const onChangeGender = (e) =>{
        setState({...state,
            gender: e.target.value,
        });
    }

    const onChangeBio = (e) =>{
        setState({...state,
            bio: e.target.value,
        });
    }

    const onSubmit = () => {
        console.log(state);
        
        if(state.title === ""){
            alert("제목은 필수 입력값입니다.")
            titleRef.current.focus();
            return;
        }


    }



    return <>
        <div>
            검색 : <input value={state.title} onChange={onChangeTitle} ref={titleRef}></input>
            {state.title.length}/600
        </div>

        <div>
            <select value={state.gender} onChange={onChangeGender}>
                <option value="">밝히지 않음</option>
                <option value="female">여성</option>
                <option value="male">남성</option>
            </select>

        </div>

        <div>
            <textarea value={state.bio} onChange={onChangeBio}>

            </textarea>
        </div>

        <div>
            <button onClick={onSubmit}>회원가입</button>
        </div>

    </>
}