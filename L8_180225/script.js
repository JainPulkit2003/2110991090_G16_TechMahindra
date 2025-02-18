// function Check(callback){
//     console.log("check table");
//     setTimeout(callback,1000);
// }

// function Starter(callback){
//     console.log("starters");
//     setTimeout(callback,1000);
// }

// function Dessert(callback){
//     console.log("Desert");
//     setTimeout(callback,1000);
// }

// function Bill(callback){
//     console.log("payout");
//     setTimeout(callback,1000);
// }


//HIGHER ORDER FUNCTION(HOF)

// data = [2,4,6,8,10];

// function doubleOfData(data){
//     doubleDataArr=[];
//     for(let i=0;i<=data.length;i++){
//         doubleDataArr.push(data[i]*2);
//     }
// }

// const calculateDoubleData = function (data){
//     var output = [];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }

// const calculateHalfData = function(data){
//     var output=[];
//     for(let i =0;i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }

// const calculateAddTen = function(data){
//     const output = [];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]+10);
//     }
//     return output;
// }

// console.log(calculateDoubleData(data));
// console.log(calculateHalfData(data));
// console.log(calculateAddTen(data));


//my approach
// const ui = function(data){
//     const output = [];
//     for(let i = 0;i<data.length;i++){
//         output.push(data[i]*2);
//         output.push(data[i]/2);
//         output.push(data[i]+10);
//     }
//     return output;
// }
// console.log(ui(data));



// function double(doubleData){
//     var ans = doubleData*2;
//     return ans;
// }
// function half(halfData){
//     var ans = halfData/2;
//     return ans;
// }

// function addten(insideData){
//     var ans = insideData+10;
//     return ans;
// }

// const calculateData = function(data, callback){
//     console.log("We are inside calculateData");
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(callback(data[i]));
//     }
//     return output;
// }

// console.log(calculateData(data,double));
// console.log(calculateData(data,half));
// console.log(calculateData(data,addten));



// Polyfill of Map Feature of Javascript;
//By Using Prototype

// Array.prototype.mapp = function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(data.mapp(double));


// const data2=[2,5,6,9];

// const area = data2.map((a)=>{
//     return 3.14*(a*a);
// })

// const circumference = data2.map((b)=>{
//     return (2*3.14)*b;
// })

// const diameter = data2.map((c)=>{
//     return c*2;
// })

// console.log(area);
// console.log(circumference);
// console.log(diameter);

// const data = [2,3,4,5,6,7,8,9];
// const findOdd = function(data){
//     const output = [];
//     for(let i=0;i<data.length;i++){
//         if(data[i]%2!=0)
//         output.push(data[i]);
//     }
//     return output;
// }
// console.log(findOdd(data));


const users =[
    {firstName : "Pulkit", lastName: "Jain", age:22},
    {firstName : "Ayush", lastName: "Singla", age:24},
    {firstName : "Keshav", lastName: "Singla", age:28},
    {firstName : "Manush", lastName: "battamiz", age:40},
    {firstName : "Ayush", lastName: "aggarwal", age:29},
]

// let's combine first name and last name

const fullname = users.map((user)=>user.firstName+ " " + user.lastName);
console.log(fullname);

// let's filter out age above 24, there full name 

const filtered = users.map((user)=>{})