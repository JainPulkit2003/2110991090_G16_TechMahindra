
//SUM OF ARRAY 

const arr = [5,7,3,1,8];

// var sumOfArr = 0;
// for(let i=0;i<arr.length;i++){
//     sumOfArr+=arr[i];
// }
// console.log(sumOfArr);


//MORE PRECISE AND OPTIMISED WAY FOR SUM OF ARRAY
// const ans = arr.reduce(function(acc,curr){
//    acc=acc+curr;
//    return acc;
// },0);
// console.log(ans);



// const users =[
//     {firstName : "Pulkit", lastName: "Jain", age:22},
//     {firstName : "Ayush", lastName: "Singla", age:24},
//     {firstName : "Keshav", lastName: "Singla", age:28},
//     {firstName : "Manush", lastName: "battamiz", age:40},
//     {firstName : "Ayush", lastName: "aggarwal", age:29},
//     {firstName : "Ravi", lastName: "Wipro", age:29},
// ]

// let ans ={}

// const ans = users.reduce(function (acc,curr){
//     if(!acc[curr.age]){
//         acc[curr.age] = 1;
//     }
//     else{
//         acc[curr.age]++;
//     }
//     return acc;
// },{});

// console.log(ans);


//MAX ELEMENT IN AN ARRAY USING REDUCE
// datamap = [2,4,5,3,4,7,9,10];

// const ans = datamap.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// })
// console.log(ans);


//CALLBACK VS PROMISES

//PROMISES -> 

// reachedRestaurant(function() {
//     console.log("I have reached Eagle Motel");
// })
// .then(tableFinding)
// .then(MenuDiscover)
// .then(PriceCheck)
// .then(starterOrder)
// .then(mainCourse)

// const myRestaurantPromise = new Promise(resolve,reject){
//     if(1:30>time>2:30){
//         resolve("YES SUCCESSFULLY REACHED");
//     }
//     else{
//         reject("Can't reach at time");
//     }
// }

//USE CASE
// const githubData = fetch("https://github.com/JainPulkit2003/2110991090_Pulkit-Jain")
//     // setTimeout(()=>{
//     //     console.log(githubData)
//     // },1000);
//     console.log(githubData);

//LET'S MAKE WEBSITE 

// const cart = ["shoes","watches","bags","glasses","shirts"];

// createorder(cart,callback){
//     console.log("ORDER CREATION")

//     orderPayment(orderId, callback){
//         console.log("ORDER PAYMENT");
//     }
//     orderSummary(orderId, callback){
//         console.log("ORDER SUMMARY")
//         updateWallet(){
//             console.log("WALLET UPDATED");
//         }
//     }
// }


//OPTIMISED ONE NOW

const cart = ["shoes","watches","bags","glasses","shirts"];

function createOrder(cart){
    const myPromise = new Promise(function(resolve,reject){
        if(cart.length>0){
            console.log("Order Created Successfully");
        }
        else{
            const err = new Error("ORDER FAILED")
            reject(err.message);
        }
    });
    return myPromise;
}

function orderPayment(orderId){
    console.log("Order Payment Succesfull", orderId);
}

function orderSummary(orderId){
    console.log("Order Summary Succesfull", orderId);
}

function updateWallet(){
    console.log("Wallet Updated");
}

console.log(createOrder(cart));


createOrder(cart)
.then(function(orderId){
    return orderPayment(orderId)
})
.then(function (orderId){
    return orderSummary(orderId)
})
.then(function (){
    return updateWallet()
})


// createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("Order Payment Successful")
// })
// .then(function orderSummary(orderId){
//     console.log("Order Summary", orderId)
// })
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)

//Promise API
// Promise.all();
// Promise.allSettled();
// Promise.any();
// Promise.race();

// Promise.allSettled mein comes all which are fullfilled irrespective any other
// promise is failed or not..
// Also, it return in array form like [P1,P2,P3]..

// Promise.any() returns immediately which run First, and if niether of
// promise run that it runs with and error like [error,error,error,error]

// Promise.race() returns in a format like which promise runs first comes first in output
// also , runs with and error like [error,error,error,error]

//THE END
