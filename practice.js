


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














// timing events
// var count=10;
// function timer(){
//   console.log(count)
//   count--
//   if(count == 0){
//     clearInterval(id)
//   }
// }
// var id =setInterval(timer,1000)
// var sec=1;
// function hello(){
//   console.log("after",sec);
//   sec++
//   if(sec ==6){
//     clearInterval(id)
//   }
  
// }
// //setTimeout(hello, 2000) excecute only once
// var id= setInterval(hello, 1000) // execute multiple times



// var student = {
//   "name" : "vikas",
//   rollNo : 120,
//   marks : 35,
//  address :{
//   pinCode: 110006,
//   City : "New Delhi"
  
// }
// };
// // var keys=Object.keys(student)
// console.log(student)
// object is a collection of key value pairs
// for(var i in student){
//   console.log(i, student[i])
// }


// const input=document.querySelector("#input")
// console.dir(input)

// // const onChangeFunc = () =>{
// //   console.log("changed")
// // }

// input.addEventListener("change", (event) => { // e just for referenec
//   console.log(event.target.value)
  
//   //console.log(input ==event.target )

// })

// const cBox=document.querySelector("#c-box")

// cBox.addEventListener("change", (event)=>{
//   console.log(event.target.checked)
// })

//checbox
// const checkBoxes=document.querySelector(".checkBox");


//  checkBoxes.addEventListener("input", event =>{
//  if(event.target.getAttribute("name") === "color"){
//   console.log(event.target)
//  }
//  const checkBoxArr=document.querySelectorAll("input[name =color]");
//  console.log(checkBoxArr)

//  const checkBoxes=[];
//  checkBoxArr.forEach((val) => {
//   if(val.checked){
//     checkBoxes.push(val.value);
//   }
//  });
//   console.log(checkBoxes)

//  });










//Arrays
//  var arr=[1,2,3,4,5,67,8]

//  //For Each method The forEach() 
//  //method calls a function for each element 
//  //in an array. The forEach()
//  // method is not executed for empty elements

//  function print(element){
//      console.log(element)
//  }
//  arr.forEach(print)


// iterate over array
// for(var i=1; i<= arr.length;i++){
//      console.log(arr[i])
// }
 // splice funtion
//  arr.splice(1,1)  
  //arr.splice(1)
//arr.splice(2,0,23)
//arr.splice(2,2,33,50)

 //console.log(arr)

//  arr.push(12)
//  arr.pop(12)
//  arr.shift()
//  arr.unshift(6)
// console.log(arr)

// var newArray= new Array(1,2,35,5,8)
// newArray[2]=23;
// newArray.length
// console.log(newArray)






// Function Expression

// var factorial = function fact(n)
// {
//      var ans=1;
//      for(var i=1; i<=n; i++){
//           ans=ans*i
//      }
//      return ans;
// };
// console.log(factorial(5));




// function inside function
// var name="abc"
// function outer(){
//      var name="outer"
//      var outerVar=10;
//      function inner(){
//           var name="inner"
//           var innerVar=20;
//           console.log(name)
//      }
//      inner()
//      console.log(name)
// }
// console.log(name)
// outer()

                            //< vvip></vvip>//
// let theme=true;

//  const onButtonClick = () => {
//   //debugger
//      console.log('Clicked', theme)
//      if(theme){
//       //document.body.style.cssText +=" background-color:black; color:white ";
//       document.body.style.backgroundColor = "black"
//       document.body.style.color = "white"
//       theme=!theme // for reversing thats why we make as false  
//      }else{
//       // document.body.style.cssText +=`
//       // background-color: "green", color: "yellow"`;
//       document.body.style.backgroundColor = "white"
//       document.body.style.color = "black"
//       theme =!theme
//      }
//  }

 
//  const btn=document.querySelector("button")
//  btn.addEventListener('click', onButtonClick)

                              // vvipm //


// // addeventListener function fist we passed (event, callBackFunction)

//  const btn=document.querySelector("button")
//  //btn.onclick=onButtonClick   ()// do not need to initialized
//  btn.addEventListener('click', onButtonClick)
//  console.dir(btn)

// const div=document.querySelector("#parent-div");
// div.style.backgroundColor="red"
// div.style.fontSize="40px"
// div.style.color="white"

//div.setAttribute("class", "div-new")


// const input=document.querySelector("input");
// const button=document.querySelector("button");
// r// input.setAttribute("type", "date");
// // input.setAttribute("min", "2022-10-06");
// // input.setAttribute("max", "2022-10-10");
// input.setAttribute("placeholder","Name")
// input.setAttribute("value","Abc")
// button.setAttribute("onClick", "onClickHandler")
 
// console.log(input.getAttribute("placeholder"))
// console.log(input)  

// function onClickHandler(){
//      console.log("click")
// }   


//  const paraDiv=document.querySelector(".para-class")
// //  paraDiv.setAttribute("id","para-id")
// //  paraDiv.setAttribute("name","paragraph")
// paraDiv.id="para-id"
// paraDiv.classList.add("Hi")
// paraDiv.className += " Baby"
// // paraDiv.classList.remove("Hi")
// // console.log(paraDiv.classList.contains("Hi"))
// console.dir(paraDiv)
//  console.log(paraDiv.classList.value == paraDiv.className)
// // paraDiv.removeChild(paraDiv.children[1])

// deep copy an shelloCopy
// let cloneP1=paraDiv.cloneNode(true) // deep if true Orr false if false
// document.body.appendChild(cloneP1)

// console.dir(paraDiv)

// // for insert
// const ul=document.querySelector('.ul')
// const newli=document.createElement('li')
// newli.innerHTML="insert"
// ul.insertBefore(newli,ul.children[4])

// const newDiv=document.createElement('div')
// newDiv.innerHTML="new Div is created ";

// //paraDiv.appendChild(newDiv)
// document.body.prepend(newDiv)

// const arrListedItems=["signUp", "signOut", "cart"]
// //paraDiv.after(newDiv)

// arrListedItems.forEach(item => {
//      const newLi= document.createElement('li')
//      newLi.innerText=item
//      ul.append(newLi)

// });


// const newLi=document.createElement('li')
// newLi.innerText="create user"
// //parentNode.replaceChild(newChild,oldchild)

// ul.replaceChild(newLi ,ul.children[2])






// How we create element Dynamically using JS

// const a=document.createElement('a');
//  a.innerText="New Anchor tag created "

// console.dir(a);

// //append means adding
// document.body.appendChild(a)

//const parentDiv=document.querySelector('#parent-div');


// const newDiv=document.createElement('div');
// const h1=document.createElement('h1'):
// h1.innerText="New heading for div";

// newDiv.appendChild(new1);

// const newDiv=document.querySelector("#parent-div")
// console.dir(newDiv.children[2])

//  const newDiv=document.createElement('div');
//  const newH1=document.createElement('h1');

// newH1.innerText=" newHeading created"

//  parentDiv.appendChild(newDiv);
//  newDiv.appendChild(newH1);

//  const div2=document.createElement('div')
//  div2.innerHTML=`
//  <h2> Heading2</h2>
//  `
//  parentDiv.appendChild(div2)








//Dom manupulations(Its manupulating the HTML element)
// or also HTML document as Hierachy of the nodes considered as the following HTML document

//console.dir(document.body.children[1].firstElementChild)
// console.dir(window.document)
      // BY ID
// const para1=document.getElementById("para1")
// console.dir(para1.lastElementChild);

     //BY CLASS
 //const para1=document.getElementById("para1")
     //const para=document.getElementsByTagName("p");
// const para1=document.getElementsByClassName("para-class")
     //console.log(para1);
      
     //const para1=document.querySelector("#para1")
     //console.log(para1);
     
     // const parentDiv=document.querySelector("#parent-div")
     // console.dir(parentDiv.children);

     //const para1=parentDiv.lastElementChild
     //console.dir(para1.previousSibling.previousSibling.previousSibling.previousSibling)
    // console.dir(para1.nextElementSibling)
     //console.dir(parentDiv.children[4]);


 




























// function showAlert(){
//    console.log("hey are you okay")
// }
// showAlert();

// function sum(a,b){
//    return a+b;
// }
// var result=sum(15);
// console.log(result);

// function hoistDemo(){
//    var i=10;
//    console.log(i)
   
// }
// hoistDemo();
//   var name="global scope";
//   console.log(name);

// function scopDemo(){
//     var name ="irshad"
//    console.log(name)
// }
// scopDemo();
// console.log(name);
// function c(){
//    console.log("inside c")
// }
// function b(){
//    c()
//    console.log("inside b")
// }
// function a(){
//    b()
//    console.log("inside a")
// }
// a()
// console.log("global-context")

// // that maches you the first element that matches the css selector
// const plus=document.querySelector(".plus");
// const minus=document.querySelector(".minus");
// const num=document.querySelector(".num");

// let a=1;

// //The addEventListener () is an inbuilt function in JavaScript which takes the event to listen for,Waits for an event to occur
// //and a second argument to be called whenever the described event gets fired.

// plus.addEventListener("click",  ()=> {
//    a++
//    console.log(a);

//    //This property is used to set or return the HTML content inside an element.
//    num.innerHTML=a;
// });
// minus.addEventListener("click",  ()=> {

// if(a>1){
//    a--
//    //This property is used to set or return the HTML content inside an element.
//    num.innerHTML=a;
// }
// });





// // async function getCountry(){
// //    const username= document.getElementById("username").value;

// //    if(!username){
// //       alert("please enter usename.");
// //       return;
// //    }
// //    const endpoint=new URL(`https://www.themealdb.com/api/json/v1/1/search.php?s=${username}`)
// //    endpoint.searchParams.set("token"," my_token");
// //    console.log(endpoint.toString());

// // }
// // fetch('https://www.themealdb.com/api.php')



// // reduce method ; allows you singal value 

// // callback function on each element of the array,
// // in order, passing in the return value from the calculation on the preceding element
// //  let number =[1,2,3,4,5,6];
// //  let total=number.reduce( function(accumlator,n){
// //     return accumlator+n;
// //  });
// //  console.log(total);


// // filter method
// // create a new array from a given array consisting of
// // only those elements from the given array which satisfy a condition set by the argument method
// // let numbers=[67,5,43,34,22,23];
 
// // let newNumbers=numbers.filter(n => n % 2 ==0);
// // //  let evenNumbers=numbers.filter(function (n){

// // //     return !(n%2 ==0);
// // //  });

// //   console.log(newNumbers);




// // map() method allows you to iterate over an array and modify its elements using a callback function.
// // The callback function will then be executed on each of the array's elements.
// // const result=[12,34,21,34,45,67,81];

// // const newArray=result.map(function(n){
// //     return n*2;
// // });
// // console.log(newArray);



// // // Self invoking funtions thta rae execute themselves 

// // const someComplexValue = (() => {
// //     const a=25;
// //     const b=20;

// //     if(a>b){
// //         return a*b;
// //     }
// //     return 0;
// // }) ();



// // const number =[1,24,54,76,90];
// // const wd=Array.from(new Set(number));
// // console.log(wd);



// const occupations =[
//     "Engineer",
//     "Doctor",
//     "Pharma",
//     "lawyer",
//     "Chef"
