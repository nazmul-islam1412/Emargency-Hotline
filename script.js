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

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const li = document.createElement("li");
    li.innerHTML = `<div class="flex justify-between items-center">
        <div>
          <strong>${serviceName}</strong><br>
          ${serviceNumber}
        </div><span class="text-gray-500 text-sm">${timeString}</span></div>`;
    li.classList.add("bg-gray-200", "p-2","mt-5","rounded-[8px]");
    callHistory.appendChild(li);
  });
});

// Clear Button part
const clearHistoryBtn = document.getElementById("clear-history");

clearHistoryBtn.addEventListener("click", function() {
    callHistory.innerHTML = ""; 
});

// Copy Part

function setupCopyButtons() {
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const card = btn.closest(".flex.flex-col");
            const serviceNumber = card.querySelector(".service-number").innerText;

            navigator.clipboard.writeText(serviceNumber);
            alert("Copied: " + serviceNumber);

            const copyCountElement = document.querySelector(".copy-count");
            let copyCount = parseInt(copyCountElement.innerText);
            copyCount++;
            copyCountElement.innerText = copyCount;
        });
    });
}

setupCopyButtons();






