// 7.
const counter = document.querySelector('#counter');

let count = Number(counter.textContent);

const Interval = setInterval(() => {
  if (count < 5) {
    count = count + 1;
    counter.textContent = count;
  } else {
    counter.style.display = 'none';
    console.log('종료');
    clearInterval(Interval);
  }
}, 1000);
