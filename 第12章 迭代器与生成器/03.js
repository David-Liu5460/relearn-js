// const iter = {};

// iter[Symbol.iterator] = function * () {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// for (let i of iter) {
//   console.log(i);
// }

// function * generate() {
//   yield 2;
//   yield 3;
//   yield 5;
// }

// let primes = generate();

// console.log(primes.next());
// console.log(primes.next());
// console.log(primes.next());
// console.log(primes.next());

// console.log(primes[Symbol.iterator]());

// const seq = function * (from, to) {
//   for (let i = from; i <= to; i++) {
//     yield i;
//   }
// }
// const a = seq(2,4);
// console.log(a.next(), [...a]);

function * generateSeq () {
  let x = 0, y = 1;
  for(;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}