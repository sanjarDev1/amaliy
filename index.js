const data = [
  [2, 1, 3],
  [4, 2, 1],
  [2, 5, 3],
  [3, 4, 5],
  [5, 3, 4],
];

const newData = [1, 5, 2];

let sinf = [1, 2, 1, 2, 1];

let k = 3;

let res = [];
for (let i = 0; i < data.length; i++) {
  let count = 0;
  for (let j = 0; j < data[i].length; j++) {
    count += Math.pow(data[i][j] - newData[j], 2);
  }
  res.push({ value: Math.sqrt(count), class: sinf[i] });
}

res = res.sort((a, b) => a.value - b.value);

if (k % 2 === 0) {
  throw new Error('k ning qiymati tub son');
}

if (k > data.length) {
  throw new Error('k ning qiymati obyektlar sonidan katta');
}

res.length = k;
const findClass = (array) => {
  let classCounts = {};
  array.forEach((object) => {
    let classValue = object.class;
    classCounts[classValue] = (classCounts[classValue] || 0) + 1;
  });
  console.log(classCounts);

  let maxClass = Object.keys(classCounts).reduce((a, b) =>
    classCounts[a] > classCounts[b] ? a : b
  );
  console.log(maxClass);
};

findClass(res);
