// 3.
window.addEventListener('scroll', function () {
  console.log(scrollY);
});

// 4.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 5.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// 6.
setTimeout(() => {
  console.log('3초 후에 출력되는 텍스트입니다.');
}, 3000);