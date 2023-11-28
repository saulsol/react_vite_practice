import {useState} from "react"
export default function Body2(){

    const [state, setState] = useState({
        title : "",
        gender : "",
        bio : ""

    })


    
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



    return <>
        <div>
            검색 : <input value={state.title} onChange={onChangeTitle}></input>
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

    </>
}