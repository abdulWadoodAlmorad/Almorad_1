// let nums= document.querySelectorAll(".nums .num");
let progressSpans = document.querySelectorAll(".the-progress span");
let up = document.querySelector(".up");
let section = document.querySelector(".our-skills");
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;


// nums.forEach((num)=>startCount(num));
window.onscroll=function(){
    // Start Skills 
    if(window.scrollY >= section.offsetTop - 200 ){
        progressSpans.forEach((span) => {
    span.style.width = span.dataset.width
    });  
       }
       // End Skills 
    //    Start Scrolling 
    if(window.scrollY >= 1000){
        up.classList.add("show");
    }else{
        up.classList.remove("show");
    }
        //    End Scrolling 
        // Start Counter 
        if(window.scrollY >= statsSection.offsetTop){
            if(!started){
                nums.forEach((number) => startCount(number));
            } 
            started = true;
        }


};

up.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function startCount(el){
    let goal=el.dataset.goal;
    let count= setInterval(() =>{
        el.textContent++;
        if(el.textContent == goal ){
            clearInterval(count);
        }
    },10 /goal)
}
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();    
let counterTime = setInterval(() =>{
    // Get Date Now 
let dateNow = new Date().getTime();
// Find Date the Date between Now and Countdown Date  
let dateDiff = countDownDate - dateNow;


// Get Time Unit 
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000)); 

document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes; 
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds ;

if(dateDiff < 0) {
    clearInterval(counterTime);
}
},1000);