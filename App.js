/* eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// 컴포넌트였음
function App() {

  /* 변수를 설정한 다음 중괄호로 아무데나 껴넣을 수 있음 */
  let posts = '강남 맛집';

  /* state를 사용하면 새로고침 없이 재렌더링해서 변경된 값을 보여줌 */
  let [어레이데이터, 데이터변경함수] = useState(['여자 코트 추천', '가방 추천','동탄 맛집 추천']);
  
  let [좋아요수, 수변경함수] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

  // 1. [array].map(callback function(){}) = array 자료 갯수만큼 콜백함수를 반복하시오
  // 2. function()안 파라미터는 array 안의 자료와 동일하게 출력됨
  // 2.5 function(a, i)안 두번째 파라미터는 0부터 반복시 1씩 증가하는 정수. 
  [1, 2, 3].map(function(파라미터){
    console.log(파라미터);
    // return 'abc'  3. 리턴뒤의 값을 array 안에 담아줌
  })

  function 제목바꾸기(){
    var newarray = [...어레이데이터];
    newarray[0] = '남자코트 추천';
    
    데이터변경함수(newarray);
  }

  function 함수(){
    return {color : 'tomato', fontSize: '30px'}
  }

  return (
    <div className="App">
      <div className="black-nav">
        <p style={ 함수() }>나의 블로그</p>
      </div>
      {/* 제목 바꾸기 버튼 */}
      <button onClick={ 제목바꾸기 }>버튼</button>

      {/* <div className='list'>
        <h3> { 어레이데이터[0] }</h3>
        <p> 3월 24일 발행</p>
        <hr></hr>
      </div>
      <div className='list'>
        <h3> { 어레이데이터[1] }</h3>
        <p> 3월 22일 발행</p>
        <hr></hr>
      </div>
      <div className='list'>
        <h3> { 어레이데이터[2] }</h3>
        <p> 3월 21일 발행</p>
        <hr></hr>
      </div> */}

      {/* html이 길어진다면 반복해서 나온다면, {[array].map(function(){})}을 사용해서 줄일 수 있음 */}
      {어레이데이터.map(function(a, i){
        return (
          <div className='list' key={i}>
            <h3 onClick={() => { setModal(!modal); setTitle(i); }}> {어레이데이터[i]} <span onClick={ (e)=>{ 
              e.stopPropagation();
              let 뉴좋아요 = [...좋아요수]; 
              뉴좋아요[i] = 뉴좋아요[i] +1;
              수변경함수(뉴좋아요)
            }}> ❤️</span>{좋아요수[i]}</h3>
            <p> 3월 22일 발행</p>
            <button onClick={()=>{
              var 타이틀 = [...어레이데이터];
              타이틀.splice(i,1);
              데이터변경함수(타이틀);
            }}>삭제</button>
            <hr></hr>
          </div>
        )
      })}

      {/* '컴포넌트'라는 문법: 함수이름을 태그로 사용 */}
      {/* html 넣는 곳이라 js를 넣을 수가 없음. if문과같은 조건식 사용하려면 */}
      {/* {조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드} */}
      {/* 부모->자식 state 전송하는법: 1. <자식컴포넌트 작명={state이름}> */}
      {
        modal == true ? <Modal 어레이데이터={어레이데이터} 데이터변경함수={데이터변경함수} title={title} ></Modal> : null
      }

      {/* onChange,onInput() 같은 이벤트핸들러는 = 유저가 값을 입력할 때마다 안의 코드를 실행, onMouse(), onScroll()...*/}
      {/* e 는 이벤트와 관련한 여러 기능이 담긴 일종의 변수 ex) e.target.value =  인풋에 타겟(인풋)의 값(벨류)*/}
      {/* <input onChange={(e)=>{
        setInputValue(e.target.value);
        console.log(inputValue);
      }}></input> */}
      <input onChange={(e)=>{
        setInputValue(e.target.value);
      }} ></input>
      <button onClick={()=>{
        var 타이틀 = [...어레이데이터]
        타이틀.unshift(inputValue);
        데이터변경함수(타이틀);
        }}>발행</button>



    </div>
  );
}

// 컴포넌트 사용시 1. 이름 대문자, 2. 함수 안에 return()을 사용해야 html 사용 가능하고, 3. 안에 <div>는 하나만 사용가능함
// 1. 반복 출현하는 html 덩어리들 2. 자주 변경되는 HTML UI들을 컴포넌트로 만들면 좋음


// 부모-> 자식 state 전송하기 : 2. props 파라미터 등록 후 props.작명 사용하면 됨
function Modal(props){
  return(
    <div className='modal'>
      <h2>{props.어레이데이터[props.title]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      {/* <button onClick={()=>{props.데이터변경함수(['님자 코트 추천', '가방 추천','동탄 맛집 추천'])}}>제목바꾸기</button> */}
      <button>제목바꾸기</button>
    </div>
  )
}

export default App;
