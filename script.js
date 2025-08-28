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


// Call Part

const coinElement = document.getElementById("coin-count");
let coins = parseInt(coinElement.innerText);
const callButtons = document.querySelectorAll(".call-btn");
const callHistory = document.getElementById("call-history");

callButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".flex.flex-col");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

     if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return; 
    }
    alert(`Calling ${serviceName} at ${serviceNumber}`);

     coins -= 20;
    coinElement.innerText = coins;
    const li = document.createElement("li");
    li.innerText = `${serviceName} - ${serviceNumber}`;
    callHistory.appendChild(li);
  });
});