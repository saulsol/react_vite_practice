import './App.css'

// 함수 컴포넌트 
// 클래스를 통해 컴포넌트를 생성할 수 있음
function Header(){
  return (
    <header>
      <h1>HEADER</h1>
    </header>

  );
}


function App() {
  return (
    <>
      <Header />
      <h1>안녕 리액트!</h1>
    </>
  );
}

export default App
