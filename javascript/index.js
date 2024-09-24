const theme = document.getElementsByTagName("html")[0];
theme.setAttribute("data-theme", "light");

// Donate for Flood at Noakhali 01
document
  .getElementById("noakhali-onate-btn")
  .addEventListener("click", function () {
    const noakhaliInput = parseFloat(
      document.getElementById("noakhali-input").value
    );

    if (noakhaliInput > 0 && noakhaliInput !== "string") {
      let totalAmount = parseFloat(
        document.getElementById("total-amount").innerText
      );

      if (totalAmount >= noakhaliInput) {
        let totalBalance = totalAmount - noakhaliInput;
        document.getElementById("total-amount").innerText = totalBalance;
        let noakhaliAmount = parseFloat(
          document.getElementById("noakhali-amount").innerText
        );
        let newBalance = noakhaliAmount + noakhaliInput;
        document.getElementById("noakhali-amount").innerText = newBalance;
        document.getElementById("my_modal_1").showModal();

        let historyall = document.getElementById("history-section");

        // History
        let historyItems = document.createElement("div");
        historyItems.className =
          // History Round Border
          "bg-white p-4 rounded-md border mt-4 ";
        historyItems.innerHTML = `
               <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
               <h2 class="font-bold text-xl mb-2">${noakhaliInput} Taka is Donate for Flood at Noakhali, Bangladesh </h2>`;
        historyall.insertBefore(historyItems, historyall.firstChild);
      } else {
        alert("insufficent balance");
      }
    } else {
      alert("Failed to add money");
    }
  });

// Donate for Flood Relief in Feni,02

document
  .getElementById("feni-onate-btn")
  .addEventListener("click", function () {
    let feniInput = parseFloat(document.getElementById("feni-input").value);

    if (feniInput > 0 && feniInput !== "string") {
      let totalAmount = parseFloat(
        document.getElementById("total-amount").innerText
      );

      if (totalAmount >= feniInput) {
        let total = totalAmount - feniInput;
        document.getElementById("total-amount").innerText = total;

        let feniAmount = parseFloat(
          document.getElementById("feni-amount").innerText
        );

        let newBalance = feniAmount + feniInput;
        document.getElementById("feni-amount").innerText = newBalance;
        document.getElementById("my_modal_1").showModal();

        // history
        let historyall = document.getElementById("history-section");

        let historyItems = document.createElement("div");
        historyItems.className =
          // History Round Border
          "bg-white p-4 rounded-md border mt-4 ";
        historyItems.innerHTML = `
        <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
        <h2 class="font-bold text-xl mb-2">${feniInput} Tk is Donate for Flood Relief in Feni,Bangladesh </h2>`;
        historyall.insertBefore(historyItems, historyall.firstChild);
      } else {
        alert("insufficent balance");
      }
    } else {
      alert("Failed to add money");
    }
  });

// Aid for Injured in the Quota Movement 03

document
  .getElementById("quota-onate-btn")
  .addEventListener("click", function () {
    let quotaInput = parseFloat(document.getElementById("quota-input").value);

    if (quotaInput > 0 && quotaInput) {
      let totalAmount = parseFloat(
        document.getElementById("total-amount").innerText
      );

      if (totalAmount >= quotaInput) {
        let total = totalAmount - quotaInput;
        document.getElementById("total-amount").innerText = total;

        let quotaAmount = parseFloat(
          document.getElementById("quota-amount").innerText
        );
        let newBalance = quotaAmount + quotaInput;
        document.getElementById("quota-amount").innerText = newBalance;
        document.getElementById("my_modal_1").showModal();

        // history
        let historyall = document.getElementById("history-section");

        let historyItems = document.createElement("div");
        historyItems.className =
          // History Round Border
          "bg-white p-4 rounded-md border mt-4 ";
        historyItems.innerHTML = `
        <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
        <h2 class="font-bold text-xl mb-2">${quotaInput} Tk is Aid for Injured in the Quota Movement </h2>`;
        historyall.insertBefore(historyItems, historyall.firstChild);

        
      } else {
        alert("insufficent balance");
      }
    } else {
      alert("Failed to add money");
    }
  });

// --------------------------history-btn------------------------------------

let donationBtn = document.getElementById("donation-btn");
let historyBtn = document.getElementById("history-btn");
const history = document
  .getElementById("history-btn")
  .addEventListener("click", function () {
    historyBtn.classList.add("bg-btnColor");
    donationBtn.classList.remove("bg-btnColor");

    document.getElementById("donation-setion").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
  });

document.getElementById("donation-btn").addEventListener("click", function () {
  donationBtn.classList.add("bg-btnColor");
  historyBtn.classList.remove("bg-btnColor");

  document.getElementById("donation-setion").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});







let historyall = document.getElementById("history-section");

let historyItems = document.createElement("div");
historyItems.className =
  // History Round Border
  "bg-white p-4 rounded-md border mt-4";
historyItems.innerHTML = `
     <p class="text-smallText">Date :
     ${new Date().toLocaleDateString()} 
     ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>

     <h2 class="font-bold text-xl mb-2">${noakhaliInput} Taka is Donated for famine-2024 at Feni, Bangladesh </h2>
    
  `;
historyall.insertBefore(historyItems, historyall.firstChild);
