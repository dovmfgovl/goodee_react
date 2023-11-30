import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/page/HomePage';
// 함수 : 객체. 일급함수, 고차함수
const BookApp = () => {
  // 변수 선언부
  const a = 1;
  let b = 2;
  // 함수 선언부
  const methodA = () => {
    console.log('methodA 호출');
  }
  // 리턴 아래 코드가 화면을 그린다 : 렌더링(rendering)
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Routes>
          <Route path='/' exact={true} element={<HomePage />}/>
        </Routes>
      </div>
    </>
  )
}

export default BookApp

/* rafce : 화살표 함수로 Syntax 제공 */