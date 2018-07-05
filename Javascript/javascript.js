console.log("Hello world");

var aString = 'A string';
// console.log(typeof(aString));
//4 loai co ban + null, symbol, object;
//json = JavaScript Object Notation
var anArray =[1,2,3 ];
/* var anArray = {
    0 =1;
    1 = 2;
    2 = 3;
    length =3;
}*/

// function saysomething() { // funcion chỉ là object
//     console.log("Something");
// }
// var anotherfuntion = function() {// cách viết khác
//     console.log("a function");
// }
// // type - first class citizen
// // first class functionZ
// // saysomething();

// var alsoSaySomething = saysomething;

// alsoSaySomething();

//callback
// setTimeout(saysomething, 1000);

//function-scope variable
function someFunction() {
    var a = 6;
    console.log(a);
}
// someFunction();


// function countDown(number) {
//     for (var i = number; i>=0; i--) {
//         (function () {
//         var j =i;
//         setTimeout(function inra() {console.log(j);}, (number-j)*1000);
    
//     }());
//     }
//  }

// countDown(5);


function anotherCountDown(number) {
    var i=number;
    if (number >=0) {
        setTimeout( function() {console.log(number)}, (number-i)*1000);
        anotherCountDown(number); 
    }
    i--;
}

anotherCountDown(6);


//Block-scoped variable\
