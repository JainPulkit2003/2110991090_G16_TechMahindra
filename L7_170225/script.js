// const button1 = document.getElementById('btn-1');

// button1.addEventListener("click", function(){
//     console.log("clicked");
// })


// const button2 = document.getElementById('btn-2');

// button2.addEventListener("click", function(){
//     console.log("clicked");
// })

// const button3 = document.getElementById('btn-3');

// button3.addEventListener("click", function(){
//     console.log("clicked");
// })

// const button4 = document.getElementById('btn-4');

// button4.addEventListener("click", function(){
//     console.log("clicked");
// })

// const button5 = document.getElementById('btn-5');

// button5.addEventListener("click", function(){
//     console.log("clicked");
// })


// Task -> 
function reachedRestaurant(callback){
    console.log("You reached");
    setTimeout(callback,1000);
  }
  
  function tableFinding(callback){
    console.log("Table Finding");
    setTimeout(callback,1000);
  }
  
  function menuDiscover(callback){
    console.log("Menu Discover")
    setTimeout(callback,1000);
  }
  
  function priceCheck(callback){
    console.log("Price Check");
    setTimeout(callback,1000);
  }
  
  function starterOrder(callback){
    console.log("Starter Order");
    setTimeout(callback,1000);
  }
  
  function mainCourse(callback){
    console.log("Main Course");
    setTimeout(callback,1000);
  }
  
  function dessert(callback){
    console.log("Dessert");
    setTimeout(callback,1000);
  }
  
  function payBill(callback){
    console.log("Pay Bill");
    setTimeout(callback,1000);
  }
  
  // Chaining the Callbacks
  reachedRestaurant(()=>{
    tableFinding(()=>{
      menuDiscover(()=>{
        priceCheck(()=>{
          starterOrder(()=>{
            mainCourse(()=>{
              dessert(()=>{
                payBill(()=>{               
                })
              })
            })
          })
        })
      })
    })
  })

  // This situation also called Pyramid of doom.
  //Bad Readability
  //Debugging is way to impossible.