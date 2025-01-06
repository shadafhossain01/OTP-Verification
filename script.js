let allInput=document.querySelectorAll("input");
let randomNumber=document.querySelector(".randomNumber");
let submitBtn=document.querySelector(".submitBtn");
let finalText=document.querySelector(".finalText")
let count=document.querySelector(".count");
let number;
let userInput="";


function randomOTP(){
    number=Math.floor(1000+Math.random()*9000);
randomNumber.innerHTML=`Your Generate OTP : ${number}`
}

randomOTP();

function userThing(){
let arr=Array.from(allInput);
arr.map((user)=>{
  user.addEventListener("input",(e)=>{
    let val=e.target.value;
      if (isNaN(val)) {
       val="";
     } 
    else {
      userInput += val;
      let next = e.target.nextElementSibling;
        if(next){
          next.focus();
        }
    }
  })
})

}

userThing()

submitBtn.addEventListener("click",()=>{
  if(number===parseInt(userInput)){
      finalText.innerHTML="OTP has been validate successfully";
      finalText.style.color="green";
      finalText.style.borderColor="green";
      clearInterval(clear);
      count.innerHTML="";
      
  }
  else{
      finalText.innerHTML="OTP is Invalid"
        finalText.style.color="red";
      finalText.style.borderColor="red";
      clearInterval(clear);
      randomNumber.innerHTML=`New OTP Is: ${number}`
      count.innerHTML="";
  }
})

let start=1000;
let end=15000;
let divide=end/start;

let clear=setInterval(function(){
    count.innerHTML=`OTP will expire in ${divide} seconds`;
    divide--
},1000);

setTimeout(function(){
    clearInterval(clear);
    count.innerHTML=`OTP is expired`;
    count.style.color="red";
},end)