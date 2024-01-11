// let data = {
//     name:"핑키포 식당",
//     city:"서울",
//     category:"한식",
//     address:{
//       city:"seoul",
//       detail:"taste",
//       zipcode:234134
//     },
//     menu:[{name:"국밥",price:3000,category:"밥"},{name:"라면",price:2000,category:"라면"}]
//   }

// 레스토랑 타입 객체 지정
export type Restaurant = {
    name:string;
    city:string;
    category:string;
    address:Address;
    menu:Menu[]
}

/// 주소 타입 객체 지정
export type Address = {
    city:string;
    detail:string;
    zipcode:number;
}

/// 메뉴 타입 객체 지정
export type Menu= {
    name:string;
    price:number;
    category:string;
}

// extends 를 통한 확장 가능
// type + interface 두가지 방법이 존재 (서로 약간 다름)

// type에서는  Omit<여기서, 이거를> 을 통해서 변수를 제거 가능 + Pick<여기서, 이거를> 원하는 내용만 뽑아 사용 가능

// ES6 이후 ? ! 를 통한 관리 가능

// + 타입스크립트는 API콜을 type을 통한 DTO로 받아 데이터 처리 
export type ApiResponse<T> = {
    data:T[],
    totalPage:number,
    page:number
}

// 이런식으로 data의 제네릭을 통해서 data 값에 객체 매핑 가능
export type RestaurantResponse = ApiResponse<Restaurant>
export type AddressResponse = ApiResponse<Address>
