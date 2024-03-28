const threshold = 1.5;
const input = [0, 1, 1];
const weight = [0.4, 0.7, 0.4];

const calculate = () => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum = input[i] + weight[i];
  }

  return sum;
};

const res = calculate();
console.log(res);

if (threshold < res) {
  console.log('Bugun oqishga boraman');
} else {
  console.log('Bugun oqishga boramayman');
}
