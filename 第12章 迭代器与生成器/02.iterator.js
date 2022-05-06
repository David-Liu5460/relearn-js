class Range {
  constructor (from, to) {
    this.from = from;
    this.to = to;
  }
  
  // 让range对象像数值的集合一样
  has (x) {
    return typeof x === 'number' && this.from <= x && x <= this.to;
  }

  toString () {
    return `{x | ${this.from} <= x <= ${this.to}}`;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      next () {
        return (next < last) 
            ? { value : next++ }
            : { done: true };
      },

      [Symbol.iterator]() { return this; }
    };
  };
}

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...myIterable]);