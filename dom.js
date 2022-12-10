const toggle=document.getElementById("toggle")
const  curr=document.getElementById("circle")
toggle.onclick= function(){
      toggle.classList.toggle('active')
      curr.classList.toggle('active')
}




// var box=document.getElementById("box")
// var clickCount=document.getElementById("click-count")
//  var count=0
// box.addEventListener('click', function(){
//       count++;
//       console.log(count)
//       clickCount.innerHTML=count;
// })


//       const abc=[1,2,3,4,56,8,9]  
      
//       const myVa=abc.map(abc=>
//       {
//          return (abc*2);
//       })
//      console.log(myVa)
        
        
        // We have another method i.e Async Await
//            const num=1
// const newPromises= new Promise((resolve,reject) =>{
//  if(num === 2){
//     setTimeout(() => {
//         resolve("success")
//     }, 5000)
    
//  }else{
//    setTimeout(() =>{
//       reject("failed")
//    },5000)
    
//  }
// })
//             const message=""
//             const callPromise = async () => {
              
//               try{ let  resultMessage = await newPromises
//                console.log(resultMessage)
//             }catch(error) {
//             console.log(error)
//          }
//       }
//             callPromise()
               
            
            
            
            
            
            // Promises
// const num=2
// const newPromises= new Promise((resolve,reject) =>{
//  if(num === 2){
//     setTimeout(() => {
//         resolve("success")
//     }, 5000)
    
//  }else{
//     reject("failed")
//  }
// })
// console.log(newPromises)
// newPromises
// .then((response) =>console.log(response))
// .then((error) => console.log(error))

      //Clousers
// const outer=() => {
//     let a='b'
//     const inner= () => {
//         let b='c'
//         console.log(a)
//         const inerrOuter= () =>{
//             console.log(b)
//         }
//         return inerrOuter
//     }
//     return inner
// }
// // console.log(outer())
// // outer()
// const newOuter=outer()()()
// console.log(newOuter)
 //newOuter()

// // Destructuring
// const arr1=[12,3,4,5,67,8]
// const arr2=[1,2,3,4,5,6,7]

// let arr3=[...arr1, ...arr2]
// console.log(arr3)

// // destructuring
// let [one, two, three, ...param]= arr1

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(param)






//  function sum(num1,num2, ...param){
//    console.log(num1,num2, param)
//    console.log(param[2] + param[4])
//    return num1+num2
//  }
//  console.log(sum(3,4,5,6,2,1,6))
 
 
//  //BIND
//  const user ={
//    firstName: "Irshad",
//    lastName: "Alam",
//    printFullName : function(){
//    console.log(`${this.firstName} ${this.lastName}`)
//    }
//  }

//  const user2={
//    firstName : "ashu",
//    lastName : "sri"
//   }

//   const user3={...user, ...user2}
//   console.log(user3)
 // function borrowing
//  let changeMyName=user.printFullName.bind(user2)
//  changeMyName()
 // advantage is we can store and use anywhere
 //user.printFullName.call(user2)
 //user.printFullName()
 
 
 
 
 
 
 // propogation event
//  var innerDiv=document.getElementById("inner")
//  innerDiv.addEventListener("click", function(event){
//     console.log("click Inner Div")
//     event.stopPropagation()
//  })
//  var outerDiv=document.getElementById("outer")
//  outerDiv.addEventListener("click", function(){
//     console.log("click Outer Div")
//  })
 
 
 
 
 
 // mouse over and out 

// var outerDiv=document.getElementById("outer")
// outerDiv.addEventListener("mouseover", function(){
//     console.log("mouse Over")
// });
// outerDiv.addEventListener("mouseout", function(){
//     console.log("mouse Out")
// });
// var searchInput=document.getElementById("search")
// searchInput.addEventListener("keydown", function(event){
//     console.log("key down",event.keyCode );
// })

// addEventListener() is the function name
 //two argument first is the event we want to handle 
// 2nd is function we want to perform 
 
 
 
 
 
 
 
 
 //Event Handling
//  const helloButton=document.getElementById("btn");

//  console.log(helloButton)
// helloButton.addEventListener('click',function(){
//     alert('Hi There')
// })
// function say(){
// alert("Hello!!")
// }
// var sayHello=document.getElementById("btn")
// console.log(sayHello)
// sayHello.addEventListener('click', say)

// addEventListener() is the function name
 //two argument first is the event we want to handle 
// 2nd is function we want to perform 
 
 //  Fetching the Element
// console.log(document)

// const ids=document.getElementById("one")

// ids.style.color="white"
// ids.style.backgroundColor="red"

// console.log(ids)

// var headings=document.getElementsByTagName('h1')
// headings[0].innerText="First Heading"
// console.log(headings)

// var className=document.getElementsByClassName("para")
// className[0].style.backgroundColor="red"
// console.log(className)