import React from 'react'
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
      <h2>도서관리시스템{`${a}`}</h2>
    </>
  )
}

export default BookApp

/* rafce : 화살표 함수로 Syntax 제공 */