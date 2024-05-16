// 1.
const box = document.querySelectorAll('.box');

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function (event) {
    if (event.target === box[i]) {
      box[i].classList.add('clicked');
    }
  });
}

// 2.
function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
