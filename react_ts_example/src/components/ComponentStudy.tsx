import React, { useEffect, useState } from 'react'

// React.SFC + React.VFC는 deprecated되었다 => React.FC 사용해야함

// React.FC: React.FunctionComponent
// React.SFC: React.StatelessFunctionComponent
// React.VFC: React.VoidFunctionComponent

interface ScProps {
  name: string;
}

// 리액트 훅을 이용한 상태관리 연습 
const ComponentStudy: React.FC<ScProps> = (props) => {

  // State 지정 
  const [age, setAge] = useState(0);


  // State 변경
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge((prevAge) => prevAge + 1);
      console.log("2초 지남");
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>{props.name} 입니다. 나이는 {age}세 입니다.</h2>
      <input type="button" value="0으로 돌아가기" onClick={() => { setAge(0); console.log("0으로 돌아감"); }}></input>
    </div>
  )

};

export default ComponentStudy