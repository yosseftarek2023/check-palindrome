 const text = document.querySelector("input")
 const button = document.querySelector(".check-btn")
 const msg = document.querySelector(".msg")

 button.addEventListener("click",() =>{
    let filter = text.value.replace(/[^A-Z0-9]/ig,"");
    console.log(filter)
    let reverse = filter.split("").reverse().join("");
    if(filter != reverse){
        msg.innerHTML = `No,"${text.value}" is not a Palindrome`
    }else{
        msg.innerHTML = `YES, "${text.value}" is a Palindrome`
    }
    msg.classList.add("show");
 });


 

//  function stringD(string){
//     let result = [];
//     for(i = 0; i < string.length; i++){
//         result.push(string[i]);
//         result.push(string[i]);
//     }
//     return result.join("");
//  }
//  console.log(stringD("hhh"));





// function evaly(op,p1,p2){
//     let value = String(p1) + String(op) + String(p2)
//     return eval(`${value}`)
// }

// console.log(evaly('/','1','2'))





 
//  function checkPalindrome(string) {

//     const len = string.length;

//     for (let i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             
//             return 
//         }
//     }
//     var x = document.createTextNode("this is Palindrome");
//     msg.appendChild(x);

//     msg.classList.add("show");
// }