import React, { useState } from 'react';
import './App.css';
import Store from './components/Store';
import { Address, Restaurant } from './model/restaurant';
import ComponentStudy from './components/ComponentStudy';

/**  
 화살표 함수 = ES6부터 쓸 수 있으며, 매개변수와 리턴 타입을 명시적으로 선언해 컴파일 과정에서 타입 검사를 수행해 사전에 문제를 방지할 수 있다.
 React.FC = 함수형 컴포넌트 사용 시 타입 선언

 props = 컴포넌트 내부에서는 props 변경 불가 / 외부에서 변경될 경우 render 재 호출
 state = 생성자 혹은 초기 할당으로 초기 할당 해줘야함 / 내부에서 변경하더라도 setState를 이용해야 render 호출

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
      {/* props => 앱 밖에서 주입해주는 데이터  + state => 컴포넌트 안에서만 돌고있는 데이터 */}
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <ComponentStudy name="한승완"></ComponentStudy>
    </div>
  );
}

export default App;
