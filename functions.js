//function Statement

function a() {
    let c = 2 + 1
    console.log(c, "a CAlled")
}
a();

// function expression

let add = function b(param1) {
    let d = 3;
}
add(function() {
    console.log(d, "b Called");

});


// Anonoynoums function 

// function() {

// }