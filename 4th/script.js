// 1.

const people = [
  { 이름: '철수', 나이: 19, 성별: '남' },
  { 이름: '짱구', 나이: 20, 성별: '남' },
  { 이름: '유리', 나이: 21, 성별: '여' },
];

console.log(people);

// 2.

// const peopleContainer = document.querySelector('.people-container');
// const names = document.querySelectorAll('.name');
// const ages = document.querySelectorAll('.age');
// const genders = document.querySelectorAll('.gender');

// people.forEach(function (people) {
//   let html템플릿 = `<div class="person">
//     <h3 class="name">이름: ${people.이름}</h3>
//     <h4 class="age">나이: ${people.나이}</ㅗ>
//     <h4 class="gender">성별: ${people.성별}</h4>
//   </div>`;
//   peopleContainer.insertAdjacentHTML('beforeend', html템플릿);
// });

// 3.

const female = people.find((person) => {
  return person.성별 === '여';
});

console.log(female);

// 4.

const male = people.filter((person) => {
  return person.성별 === '남';
});

console.log(male);

// 5.

const addAge = people.map((person) => {
  return { 이름: person.이름, 나이: person.나이 + 10, 성별: person.성별 };
});

console.log(addAge);
console.log(people);

// 6.

let arr = [...people];
arr.sort((a, b) => {
  return b.나이 - a.나이;
});

console.log(arr);
console.log(people);

// 7.

const user = {
  이름: '병수',
  나이: 20,
  주소: '시골',
};

const userName = user.이름;
const userAge = user.나이;
const userAdd = user.주소;

console.log(userName);
console.log(userAge);
console.log(userAdd);
