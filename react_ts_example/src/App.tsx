import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './components/Store';
import { Address, Restaurant } from './model/restaurant';

/**  
 화살표 함수 = ES6부터 쓸 수 있으며, 매개변수와 리턴 타입을 명시적으로 선언해 컴파일 과정에서 타입 검사를 수행해 사전에 문제를 방지할 수 있다.
 React.FC = 함수형 컴포넌트 사용 시 타입 선언
*/

let data:Restaurant = {
  name:"핑키포 식당",
  city:"서울",
  category:"한식",
  address:{
    city:"seoul",
    detail:"taste",
    zipcode:234134
  },
  menu:[{name:"국밥",price:3000,category:"밥"},{name:"라면",price:2000,category:"라면"}]
}

const App:React.FC = () => { 

  /// 타입스크립트의 제네릭을 이용한 상태관리
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
  
  /// 함수 명시
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant,address:address})
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
    </div>
  );
}

export default App;
