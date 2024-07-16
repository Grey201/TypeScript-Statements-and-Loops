// const  initData: number[] = [...Array(100).keys()];
// console.log(initData);
var initData = [];
for (var i = 1; i <= 100; i++) {
    initData.push(i);
}
// console.log(initData);
var results = [];
for (var num in initData) {
    if (initData[num] % 2 === 0)
        results.push(initData[num] + 2);
}
console.log(results);
var squareRootResults = [];
for (var num in results) {
    squareRootResults.push(Math.sqrt(results[num]));
}
console.log(squareRootResults);
for (var num in squareRootResults) {
    if (squareRootResults[num] > 7) {
        console.log(squareRootResults[num]);
        break;
    }
}
