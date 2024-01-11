import React from 'react'
import { Address, Restaurant } from '../model/restaurant'

interface OwnProps{
  info:Restaurant
  // 함수를 인터페이스 형태로 명시
  changeAddress(address:Address): void
}

// 리액트 FC 제네릭 이용
const Store:React.FC<OwnProps> = ({info}) => {

  return (
    <div>{info.name}</div>
  )
}

export default Store