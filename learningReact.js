// SPREAD OPERATORS

// let a = [1, 5, 11, 4];
// let b = [...a, 5, 6]
// let c = [9, 10, ...b, ...a, 11];
// console.log(c);

// function e() {
//     let a = "HI"
//     console.log(a);
// }
// e();

// ARRAY Destructuring

// let bikes = ["RE", "KTM", "RX100", "PLATINA"];
// [a, b, c, d] = bikes;
// console.log(a, d);

//Object Destructuring

let car = {
    name: "BMW",
    color: "White",
    style: "mad finish",
    price: 2000000
}

let { color } = car;
console.log(color)