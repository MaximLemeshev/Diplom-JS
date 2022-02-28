// //  Задание 1
// // а) Создать свою реализацию функции map

// // let arr1 = [1, 2, 3];
// // arr1[10] = 10;

// // // своя реализация метода forEach

// // Array.prototype.forEach2 = function (callback, thisArg) {
// //   if (this == null) {
// //     throw new Error("Cant interate over undefined or null");
// //   }

// //   let context = this;

// //   let O = Object(this);

// //   if (arguments.length > 1) {
// //     context = thisArg;
// //   }

// //   if (typeof callback !== "function") {
// //     throw new Error(" Callback is not funtion");
// //   }

// //   let len = O.length;

// //   let i = 0;

// //   while (i < len) {
// //     if (i in O) {
// //       callback.call(context, this[i], i, O);
// //     }

// //     i++;
// //   }
// // };
// // arr1.forEach2((el, i, array) => {
// //   console.log({ el, i });
// // });

// //  Своя реализация метода Filter

// // let arr2 = [
// //   1, 7, 2, 345, -546, 123, -1424, 0, -13, -509, 13, 55422, 42342, 5, 13, 87,
// // ];

// // function isPrime(num) {
// //   if (num <= 1) {
// //     return false;
// //   } else if (num == 2) {
// //     return true;
// //   } else {
// //     for (let i = 2; i < num; i++) {
// //       if (num % i === 0) {
// //         return false;
// //       }
// //     }
// //     return true;
// //   }
// // }

// // Array.prototype.filter2 = function (callback, thisArg) {
// //   if (this == null) {
// //     throw new Error("Cant interate over undefined or null");
// //   }

// //   let context = this;

// //   let O = Object(this);

// //   if (arguments.length > 1) {
// //     context = thisArg;
// //   }

// //   if (typeof callback !== "function") {
// //     throw new Error(" Callback is not funtion");
// //   }

// //   let len = O.length;

// //   let res = [];

// //   for (let i = 0; i < len; i++) {
// //     if (i in O) {
// //       let current = this[i];
// //       if (callback.call(context, current, i, O)) {
// //         res.push(current);
// //       }
// //     }
// //   }
// //   return res;
// // };

// // // let prime = arr2.filter2(isPrime);
// // // console.log(prime);

// // //  своя реализация метода Map

// // let arr2 = [1, 7, 2, 345, 107, 123, 1424, 0, -13, -509, 13, 51, 2, 5, 13, 87];

// // Array.prototype.map2 = function (callback, thisArg) {
// //   if (this == null) {
// //     throw new Error("Cant interate over undefined or null");
// //   }

// //   let context = this;

// //   let O = Object(this);

// //   if (arguments.length > 1) {
// //     context = thisArg;
// //   }

// //   if (typeof callback !== "function") {
// //     throw new Error(" Callback is not funtion");
// //   }

// //   let len = O.length;

// //   let newArray = [];

// //   let i = 0;

// //   while (i < len) {
// //     let newValue;

// //     if (i in O) {
// //       newArray[i] = callback.call(context, this[i], i, O);
// //     }

// //     i++;
// //   }
// //   return newArray;
// // };

// // const increase1 = (num) => num + 1;
// // console.log(arr2.map2(increase1).filter2(isPrime));

// // своя реализация метода reduce

// let arr3 = [1, 2, 3, 7];

// Array.prototype.reduce2 = function (f, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = f(result, this[i], i, this);
//   }
//   return result;
// };

// console.log(arr3.reduce2((acc, item) => acc + item));

//  задача на простые числа
// function isPrimes(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrimes(4));
// console.log(isPrimes(3));
// console.log(isPrimes(4));
// console.log(isPrimes(5));
// console.log(isPrimes(6));
// console.log(isPrimes(7));

// function getPrimes(num) {
//   let arr3 = [];
//   for (let i = 0; i < num; i++) {
//     if (isPrimes(i)) {
//       arr3.push(i);
//     }
//   }
//   return arr3;
// }

// console.log(getPrimes(10));

// б) Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }.
// Использовать функцию map

let newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg&quot",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470&quot",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg&quot",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470&quot",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg&quot",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470&quot",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// const check = (el) => {
//   for (let key in el) {
//     if (key == "id") {
//     } else if (key == "title") {
//     } else if (key !== "id") {
//       delete el[key];
//     }
//   }
//   return el;
// };

// let arr = newReleases.map(check);
// console.log(arr);

// let arr = newReleases.map(check);

// г) Выведете массив ids для видео у которых рейтинг 5.0. В качестве входных данных используйте newReleases из предыдущих заданий .

// let arr1 = [];
// for (let i = 0; i < newReleases.length; i++) {
//   if (newReleases[i].rating[0] == 5.0) {
//     arr1.push(newReleases[i].id);
//   }
// }
// console.log(arr1);

//  з) Преобразуйте массив в объект используя функцию reduce. Используйте начальное значение

// let videos = [
//   { id: 65432445, title: "The Chamber" },
//   { id: 675465, title: "Fracture" },
//   { id: 7011470, title: "Die Hard" },
//   { id: 654356453, title: "Bad Boys" },
// ];

// const obj = videos.reduce((res, key) => {
//   res[key.id] = key.title;
//   return res;
// }, {});
// console.log(obj);

//  ж) С помощью функций map, reduce  вывести url у которого самая большая площадь

let boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

// const square = (el) => {
//   return el.width * el.height;
// };

// let getSquareArr = boxarts.map(square);

// let getUrlArr = boxarts.reduce(function checr3(acc, el) {
//   acc.push(el.url);
//   return acc;
// }, []);

// let ind = getSquareArr.indexOf(Math.max.apply(null, getSquareArr));

// console.log(getUrlArr[ind]);

// e) с помощью функции reduce получить максимальное значение в массиве

// let ratings = [2, 3, 6, 19, 5];
// let maxValue = ratings.reduce(function getMax(acc, el, i, arr) {
//   return Math.max.apply(null, arr);
// });
// console.log(maxValue);
// д) Привести данные к указанному виду,boxarts преобразовать в boxart,где значение это ссылка на видео размером 150х200.
// Используйте следующие функции filter,map,concat.

// let movieList = [
//   {
//     name: "Instant Queue",
//     videos: [
//       {
//         id: 70111470,
//         title: "Die Hard",
//         boxarts: [
//           {
//             width: 150,
//             height: 200,
//             url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
//           },
//           {
//             width: 150,
//             height: 200,
//             url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
//           },
//         ],
//         url: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: 4.0,
//         bookmark: [],
//       },
//       {
//         id: 654356453,
//         title: "Bad Boys",
//         boxarts: [
//           {
//             width: 200,
//             height: 200,
//             url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
//           },
//           {
//             width: 150,
//             height: 200,
//             url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
//           },
//         ],
//         url: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: 5.0,
//         bookmark: [{ id: 432534, time: 65876586 }],
//       },
//     ],
//   },
// ];

//  Задание 2
// 1

let Robot = function (name) {
  this.name = name;
};
function add(op1, op2) {
  this.name = this.name || "Human";
  return this.name + " can count to " + (op1 + op2);
}

let voltron = new Robot("Voltron");

// Тоже самое что и
//  let voltron = {
// name='Voltron'}

// console.log(add(0, 1));

// 2

// console.log(add.call(voltron, 1, 2));

// 3
// console.log(add.apply(voltron, [20, 30]));

// 4

// let fff = add.bind(voltron, "drinking", "beer");

// function showName() {
//   return setTimeout("console.log(fff())", 1000);
// }
// console.log(showName());

// Задача 3

// А
//  Создать кнопку по нажатию на которую в консоль выведет фразу 'Hello World' с задержкой в 5 секунд,
// при повторном нажатии в течении 5 секунд время должно пойти заново

// const btn1 = document.querySelector(".btn.task1");
// const fff = () => {
//   console.log("Hello World");
// };
// btn1.addEventListener("click", () => {

//   return setTimeout(fff, 5000);
// });

// function go() {
//   // return setTimeout(() => {
//   //   console.log("Hello World");
//   // }, 5000);

//   let zzz = setTimeout(() => {s
//     console.log("Hello World");
//   }, 5000);
//   setTimeout(() => {
//     clearTimeout(zzz);
//   }, 4999);
// }

// Б
// Создать кнопку по нажатию на которую будет выводить
//  в консоль 'You are welcome' каждые 3 секунды ,пока не нажмем на кнопку еще раз

// Задача 4
//  А)

// let f = new Promise((resolve, reject) => {
//   function sayHi() {
//     console.log("hi");
//   }
//   let hello = setTimeout(sayHi, 2000);
//   resolve(hello);
// });

// Б)

// let g = new Promise((resolve, reject) => {
//   let result = 10;
//   return setTimeout(() => {
//     result;
//     resolve(result);
//   }, 3000);
// });
// g.then((result) => {
//   console.log(result);
//   result = result * 2;

//   return result;
// })
//   .then((result) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(result);
//         let res = result * 2;
//         resolve(res);
//       }, 2000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   });
//  В)
// Написать Promise который выводит console.log в случае если время
// выполнения не превысило 2 секунд, и console.error в случае если
// превысило. Время должно определяться случайным образом,
// использовать внутренний обработчик ошибок для Promise

let j = new Promise((resolve, reject) => {
  min = Math.ceil(1);
  max = Math.floor(6);
  let time = Math.floor(Math.random() * (max - min + 1) * 1000) + min;

  setTimeout(() => {
    if (time < 2000) {
      resolve(time);
    } else reject(time);
  }, time);
});

j.then((time) => {
  console.log("Время не превысело 2 сек", time);
}).catch((time) => {
  console.error("Время превысело 2 сек", time);
});
