import React from "react";
// import {BucketList} from "./BucketList";
import BucketList from './BucketList';
import "./style.css";
import styled from "styled-components";


//클래스형 컴포넌트 생김새 
class App extends React.Component {
  constructor(props) { //App 컴포넌트의 state정의
    super(props); //부모클래스에 있는거 가져옴
    this.state = { //내 상태값.내데이터 - 
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    // ref는 이렇게 선언합니다! 
    this.text = React.createRef();
}
 // ref는 이렇게 선언합니다! 
    this.text = React.createRef();
  }

  componentDidMount(){
		// 콘솔에서 확인해보자!
    console.log(this.text);

  }

  render() {
		console.log(this.text.current);
    return (
    <div className="App">
        <Container>
        <Title>내 버킷리스트</Title>
        <Line/>
        <hr className ="line"/>
        <BucketList list_a={this.state.list}/>
        </Container>

        <div>
          <input type="text" ref={this.text}/>
          onChange={() => {
            console.log(this.text.current.value);

          }}
        </div>

    </div>
    );
  }


// function App() {
//   return (
//     <div className="App">
//       <BucketList/>

//     </div>
//   );
// }

// const MyStyled = styled.div`
//   width: 50vw;
//   height: 150px;
//   color: blue;
//   background-color: ${(props) => (props.bg_Color? "red" : "purple")}
//   p {
//     color : blue;
//   }
//   &:hover {
//     background-color: yellw'
//   }
// `;

const Container = styled.div`
background-color: #fff;
width:50vw;
max-width: 350px;
margin:auto;
height: 80vh;
padding: 16px;
border: 1px solid #ddd;
border-radius: 10px;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;
const Line = styled.hr`
margin: 16px 0px;
`;

export default App;
