// console.log("firsttttuhhhhh")
// document.getElementById("para").innerHTML="nojiii"
// document.getElementsByClassName("xxx")[1].innerHTML="firsttttuhhhhh"
// document.getElementsByTagName("p")[1].innerHTML="noooooooo"
// document.getElementById("para1").innerHTML="jooooo"
// document.getElementsByClassName("xxx")[2].innerHTML="hello world"
// document.getElementsByTagName("h2")[0].innerHTML="hello hello"

// document.querySelector(".demo").innerHTML=("hello world ooooo")
// // document.querySelector("tittle").innerHTML=("hello hello hello")
// document.querySelector("p").innerHTML=("hello dude hello dude")
// document.querySelector(".box").innerHTML=("no bro no bro")
// document.querySelectorAll(".demo")[0].innerHTML=(" hii hello everyone ")
// function new1(){
//     document.getElementById("one").style.backgroundColor="green"
// }
// function new2(){
//      document.getElementById("two").style.backgroundColor="blue"
// }
// function new3(){
//      document.getElementById("three").style.backgroundColor="red"
//      document.getElementById("hlo1").style.visibility="visible"
     
// }
// function new4(){
//      document.getElementById("one").style.backgroundColor="green"
//       document.getElementById("two").style.backgroundColor="green"
//       document.getElementById("three").style.backgroundColor="green"

// }

    // document.getElementById("vasu").style.display="none"
    // function toggleMode(){
    //     if(isDark){
    //         document.body.style.backgroundColor="black";
    //         document.body.color="white";
    //         isDark=false;
    //     }else{ document.body.style.backgroundColor="black";
    //         document.body.color="white";
    //         isDark=true;

    //     }
    // }
    // function hii(){
    //     if(document.getElementById("header1").style.backgroundColor==="black"){
    //     document.getElementById("header1").style.backgroundColor="white"
    //     document.getElementById("header1").style.color="black";

    //     }else{
    //         document.getElementById("header1").style.backgroundColor="black"
    //         document.getElementById("header1").style.color="white"
    //     }
    // }
// let count1=0
// function to(){
//     count1++
//     document.getElementById("count").innerText=count1
// }
// function too(){
//     count1--
//     document.getElementById("count").innerText=count1
    
// }
 
// function calculate(op){
//   let a = document.getElementById("num1").value;
//   let b = document.getElementById("num2").value;

//   if (a === "" || b === "") {
//     document.getElementById("result").innerText = "Please enter numbers";
//     return;
//   }

//   a = Number(a);
//   b = Number(b);

//   let res;

//   if (op === '+') res = a + b;
//   else if (op === '-') res = a - b;
//   else if (op === '*') res = a * b;
//   else if (op === '/') res = a / b;

//   document.getElementById("result").innerText = "Result: " + res;
// }
// {/* <script>
// function add() {
//     let total =
//         (+n1.value) +
//         (+n2.value) +
//         (+n3.value);

//     res.innerText = total;
// }
// </script> 
// function addValue(val) {
//     document.getElementById("display").value += val;
// }

// function calculate() {
//     let exp = document.getElementById("display").value;
//     document.getElementById("display").value = eval(exp);
// }

// function clearDisplay() {
//     document.getElementById("display").value = "";
// }


// function append(value) {
//   document.getElementById("display").value += value;
// }

// function clearDisplay() {
//   document.getElementById("display").value = "";
// }

// function del() {
//   let val = document.getElementById("display").value;
//   document.getElementById("display").value = val.slice(0, -1);
// }

// function calculate() {
//   let exp = document.getElementById("display").value;
//   try {
//     document.getElementById("display").value = eval(exp);
//   } catch {
//     document.getElementById("display").value = "Error";
//   }
// }

// function findNextBirthday() {
//     let dob = document.getElementById("dob").value;

//     if (!dob) {
//         document.getElementById("result").innerText = "Please enter DOB";
//         return;
//     }

//     let dobDate = new Date(dob);
//     let today = new Date();

//     let nextYear = today.getFullYear() + 1;

//     let nextBirthday = new Date(
//         nextYear,
//         dobDate.getMonth(),
//         dobDate.getDate()
//     );

//     document.getElementById("result").innerText =
//         "Next Year Birthday: " + nextBirthday.toDateString();
// }

// function calculateAge() {
//     let dob = document.getElementById("dob").value;

//     if (dob === "") {
//         document.getElementById("result").innerText = "Please select your DOB";
//         return;
//     }

//     let birthDate = new Date(dob);
//     let today = new Date();

//     let age = today.getFullYear() - birthDate.getFullYear();

//     let monthDiff = today.getMonth() - birthDate.getMonth();

//     if (
//         monthDiff < 0 || 
//         (monthDiff === 0 && today.getDate() < birthDate.getDate())
//     ) {
//         age--;
//     }

//     document.getElementById("result").innerText = 
//         "Your Age is: " + age + " years";
// }

// function birthdayCountdown() {
//     let dob = document.getElementById("dob").value;

//     if (!dob) {
//         document.getElementById("result").innerText = "Please select your DOB";
//         return;
//     }

//     let birthDate = new Date(dob);
//     let today = new Date();

//     // Next birthday this year
//     let nextBirthday = new Date(
//         today.getFullYear(),
//         birthDate.getMonth(),
//         birthDate.getDate()
//     );

//     // If already passed, move to next year
//     if (nextBirthday < today) {
//         nextBirthday.setFullYear(today.getFullYear() + 1);
//     }

//     // Calculate difference in milliseconds
//     let diff = nextBirthday - today;

//     // Convert to days
//     let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

//     // Birthday check
//     if (daysLeft === 0) {
//         document.getElementById("result").innerText = "🎉 Happy Birthday!";
//     } else {
//         document.getElementById("result").innerText =
//             daysLeft + " days left for your birthday ";
//     }


    
// }


function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");

    // Simple validation
    if (username === "" || password === "") {
        errorMsg.innerText = "Error!";
        return;
    }

    // Demo login (change this)
    if (username === "admin" && password === "1234") {
        alert("Login Successful ✅");
        errorMsg.innerText = "";
    } else {
        errorMsg.innerText = "Invalid username or password ❌";
    }
}