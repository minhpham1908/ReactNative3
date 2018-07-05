// arrow function
var aFunction3 = () => { }

//vd:
var add = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

var addTo10 = i => i + 10;

//curry function
var addor function(a) {
    return function (b) {
        return a + b;
    }
}
//arrow curry
var addor = a => b => a + b;

// ` `

//destructing
var aFunction = ({ username, password }) => console.log(`$username $password`);

//...: chuyển array thành các parameter
var clone = [...user]; // copy 2 array

// Big 3 of ES6
map, filter, reduce

var user = [
    {
        username: "VAT",
        score: 6
    },
    {
        username: "VAT2",
        score: 1
    },
    {
        username: "VAT3",
        score: 7
    },
    {
        username: "VAT4",
        score: 10
    },
];

var scores = user.map(user => user.score);
//-> socres = [6,1,7,10]

var maxScore = Math.max[...scores];
// var maxScore = Math.max(... user.map(user => user.score));

//filter
var moreThan5 = user.filter(user => user.sscore > 5); //return array moreThan5
var sumOfScore = users.reduce(
    (prev, user) => prev + user.score
);// tính tổng;


//Functional Programming

//OOPAÂ