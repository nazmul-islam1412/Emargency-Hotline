// Increasing Heart Icon
const heartCountElement=document.getElementById("heart-count");
let heartCount=parseInt(heartCountElement.innerText);

const hearts=document.querySelectorAll(".heart-icon");

hearts.forEach(function(heart){
    heart.addEventListener("click",function(){
        heartCount++;
        heartCountElement.innerText=heartCount;
    })
})