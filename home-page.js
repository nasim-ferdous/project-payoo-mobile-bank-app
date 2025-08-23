const validPin = 1234;
// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addPin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length !== 11) {
      alert("PLease provide a valid Account number");
      return;
    }

    if (addPin !== validPin) {
      alert("Please provide a valid pin number");
      return;
    }

    console.log(availableBalance);
    const totalAvailableBalance = availableBalance + addAmount;
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });

// Cash Out feature
document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseInt(document.getElementById("cashout-ammount").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutPIn = document.getElementById("cash-out-pin").value;

    if (agentNumber.length !== 11) {
      alert("Please provide a valid account number");
      return;
    }
    if (cashOutPIn !== validPin) {
      alert("please provide a valid pin");
      return;
    }

    const newAvailableBalance = availableBalance - amount;

    document.getElementById("available-balance").innerText =
      newAvailableBalance;
  });

// toggling feature
// for add money button
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
// for cash out button
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});
