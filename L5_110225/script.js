// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3);
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(3);
// },5000)
// console.log(6);

// function display(){
// for(var i =1; i<=6; i++){
//     setTimeout(()=>{
//         console.log(i);// results in 7 (var is global)
//     },1000);
// }
// }
// display();


// function x(){
//     var a=7;
//     function y(){
//       console.log(a);
//     }
//     a=100;
//     return y;
//   }
//   var z=x();
//   console.log(z);
//   z();

// var count = 0;
// for(var i=1;i<=3;i++){
//     function print(){
//         count++;
//     }
//     print();
// }
// console.log(count);

function counter(){
    var count = 0;
    return function increment(){
        count++;
        console.log(count);
    }
}

var counter1=counter();
counter1();
counter1();
counter1();







