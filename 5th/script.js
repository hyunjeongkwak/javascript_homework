// // 8.

// // -1.
// const user = {
//   이름: '병수',
//   나이: 20,
//   주소: '시골',
// };

// localStorage.setItem('user', JSON.stringify(user));

// // -2.
// console.log(JSON.parse(localStorage.getItem('user')));

// // -3.
// // 데이터 가져오기
// const data = JSON.parse(localStorage.getItem('user'));

// // 나이 바꾸기
// data.나이 = 30;

// // 데이터 저장하기
// localStorage.setItem('user', JSON.stringify(data));

// // -4.
// localStorage.removeItem('user');

// // 1.

// METHOD: GET
// https://jsonplaceholder.typicode.com/posts

// response:
//     [
//         { id: number, title: string, body: string, userId: number },
//         { id: number, title: string, body: string, userId: number },
//         /* 생략  */
//         { id: number, title: string, body: string, userId: number },
//       ];
