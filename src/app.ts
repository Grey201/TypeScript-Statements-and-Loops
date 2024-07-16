// const  initData: number[] = [...Array(100).keys()];
// console.log(initData);

let initData: number[] = [];
for (let i = 1; i <= 100; i++) {
  initData.push(i);
}
// console.log(initData);

let results: number[] = [];

for (let num in initData) {
  if (initData[num] % 2 === 0) results.push(initData[num] + 2);
}
console.log(results);

let squareRootResults: number[] = [];

for (let num in results) {
  squareRootResults.push(Math.sqrt(results[num]));
}
console.log(squareRootResults);

for (let num in squareRootResults) {
  if (squareRootResults[num] > 7) {
    console.log(squareRootResults[num]);
    break;
  }
}
