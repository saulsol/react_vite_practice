import './Button.css'

export default function Button(props) {
    console.log(props)

    const onClick = (e) =>{
        console.log(e)
        alert('버튼을 클릭했습니다.');    
    }



    return <button className="button" onClick={onClick} >{props.text}</button>
}