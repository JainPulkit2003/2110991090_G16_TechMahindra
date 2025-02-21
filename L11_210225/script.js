// // call(),apply(),bind()

// let studentDetails={
//     firstName:"Pulkit",
//     lastName:"Jain",

//     // getResult:function(){
//     //     console.log("pass");
//     // }
//     getName:function(){
//         console.log(this.firstName);
//     }
// };
// // console.log(studentDetails.firstName+studentDetails.lastName);
// // studentDetails.getResult();

// let studentJasjot ={
//     firstName:"jasjot",
//     lastName:"singh",
//     getresult:function(){
//         console.log("failed");
//     }
// }
// // call
// let getName=function(){
//     console.log(this.firstName);
// }
// // getName.call(studentDetails);
// // getName.call(studentJasjot)

// let getName2 = function(classStudent){
//     console.log(this.firstName+" "+this.lastName+" "+classStudent);
// }
// const ans1 =getName2.call(studentDetails,["g6","g5"]);        //CALL() me arguments ek object,ek argument
// // console.log(ans1)        
// const ans2 = getName2.apply(studentDetails,["g6","g10","g20"])  //APPLY() 
// // console.log(ans2)

// //bind

// const getStudentBind = getName.bind(studentDetails,"G16");
// console.log(getStudentBind())
// console.log(getStudent1);

// const ans3 = getName2.bind(studentDetails,"G16","G11");
// console.log(ans3());


//************************************************************************** */

// Event bubbling & Event capturing

// document.getElementById("grandparent").addEventListener("click",()=>{
//     console.log("THIS IS GRAND PARENT DIV");
// },false)

// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("THIS IS PARENT DIV");
// },false)

// document.getElementById("child").addEventListener("click",()=>{
//     console.log("THIS IS CHILD DIV");
// },false)


//EVENT BUBBLING IS HAPPENING FROM CHILD TO GRAND PARENT(FALSE IS USED FOR BUBBLING)
// EVENT CAPTURING IS HAPPENING FROM GRAND PARENT TO CHILD(TRUE IS USED FOR CAPTURING)

//BY DEFAULT IT IS FALSE , IT WORKS AS EVENT BUBBLING

// document.getElementById("cs").addEventListener("click",()=>{
//     window.location.href = "localhost/cs"
// });

// document.getElementById("ece").addEventListener("click",()=>{
//     window.location.href = "localhost/ece"
// });

// document.getElementById("me").addEventListener("click",()=>{
//     window.location.href = "localhost/me"
// });


// document.getElementById("subjects").addEventListener("click",(e)=>{
//     console.log(e);
//     window.location.href = e.target.id;
//     console.log("https://localhost/" + e.target.id);
// })


//Time delay is added in placeholder words count to increase optimisation
document.getElementById("search").addEventListener("input", debouncingFunction);
let whichCall = 0

function fetchData(){
    console.log("Fetching the API Data",whichCall++);
}

function debouncingFunction(){
    setTimeout(fetchData,2000);
}

// let debouncingFunction = ()=>[
//     setTimeout(()=>)
// ]