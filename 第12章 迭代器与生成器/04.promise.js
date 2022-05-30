let p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { console.log('one'); resolve() }, 1400);
  })
};
let p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { console.log('two'); resolve() }, 1300);
  })
};
 
let p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { console.log('three'); resolve() }, 1200);
  })
};
let p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { console.log('four'); resolve() }, 1100);
  })
};

// [p1, p2, p3, p4].reduce( (p, fn) => {
//   return p.then(fn);
// }, Promise.resolve() );
// function iterator (arr) {
//   for (let i = 0 ; i < arr.length; i++) {
//     arr[i]().then(() => { return arr[i+1]});
//   }
// }

// 可迭代方法
// function iterator (arr) {
//   let gen = Promise.resolve();
//   arr.forEach(element => {
//     gen = gen.then(() => element() );
//   });
// }

// iterator([p1,p2,p3,p4]);

// 迭代器
// reduce 
// let obj = {};
// obj[Symbol.iterator] = function * () {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// console.log([...obj]);

// let iterable = [99, 67];
// const iterator = iterable[Symbol.iterator]();
// for (let result = iterator.next(); !result.done; result = iterator.next ()) {
//   console.log(result.value);
// }

// function * iterator (arr = [p1,p2,p3,p4]) {
//  for (let i = 0; i < arr.length; i++) {
//    yield arr[i]();
//  }
// }

// function run(gen) {
//   const g = gen()

//   function next() {
//       const result = g.next()
//       if (result.done) return result.value
//       result.value.then(function (data) {
//           next()
//       })
//   }

//   next()
// }

// run(iterator);

let obj1 = {
  "a": 1,
  "$a": 2
}
function a (obj) {
  Object.keys(obj).forEach(item => {
    let value = obj[item];
    if (item.indexOf('$') > -1) {
      Object.defineProperty(obj, item, {
        get() {
            let newItem = item.replace('$', '');
            // console.log(obj[newItem], 22222)
            return obj[newItem];
      
        }
      })
    }
  })
  // for (let item in obj) {
  //   if (item.indexOf('$') > -1) {
  //     Object.defineProperty(obj, item, {
  //       get() {
  //         let newItem = item.replace('$', '');
  //         // console.log(obj[newItem], 22222)
  //         return obj[newItem];
  //       }
  //     })
  //   }
  // }
}

function b(obj) {
  for (let key in obj) {
      if (key && key.indexOf('$') > -1) {
          Object.defineProperty(obj, key, {
              get() {
                  let value = obj[key.replace('$', '')];
                  const type = Object.prototype.toString.call(value);
                  if (type === '[object Array]' || type === '[object Object]') {
                      value = JSON.stringify(value);
                  }
                  return value;
              }
          })
      }
  }
}

a(obj1);


console.log(obj1['$a']);


