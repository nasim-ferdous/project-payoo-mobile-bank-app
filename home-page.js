const validPin = 1234;
const transactionData = [];
const validCoupon = 12345;

// reusable function
// function to get input values
function getInputValueNumber(id) {
  const input = document.getElementById(id);
  const inputValue = input.value;
  const inputValueNumber = parseInt(inputValue);
  return inputValueNumber;
}

function getInputValue(id) {
  const input = document.getElementById(id);
  const inputValue = input.value;
  return inputValue;
}
// function to get inner text
function getTextValue(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// function to set inner text
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function for toggling
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle buttons
function handleToggleButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btns of formBtns) {
    btns.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btns.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;

    // const accountNumber = document.getElementById("account-number").value;
    const accountNumber = getInputValue("account-number");

    // const addAmount = parseInt(document.getElementById("add-amount").value);
    const addAmount = getInputValueNumber("add-amount"); // using reusable function

    if (addAmount <= 0) {
      alert("invalid amount");
      return;
    }

    // const addPin = parseInt(document.getElementById("add-pin").value);
    const addPin = getInputValueNumber("add-pin");

    // const availableBalance = parseInt(
    //   document.getElementById("available-balance").innerText
    // );
    const availableBalance = getTextValue("available-balance");

    if (accountNumber.length !== 11) {
      alert("PLease provide a valid Account number");
      return;
    }

    if (addPin !== validPin) {
      alert("Please provide a valid pin number");
      return;
    }

    // console.log(availableBalance);
    const totalAvailableBalance = availableBalance + addAmount;

    // document.getElementById("available-balance").innerText =
    //   totalAvailableBalance;
    setInnerText(totalAvailableBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    // console.log(transactionData);
  });

// Cash Out feature
document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // const amount = parseInt(document.getElementById("cashout-amount").value);
    const amount = getInputValueNumber("cashout-amount");

    // const availableBalance = parseInt(
    //   document.getElementById("available-balance").innerText
    // );
    const availableBalance = getTextValue("available-balance");

    if (amount <= 0 || amount > availableBalance) {
      alert("invalid amount");
      return;
    }

    // const agentNumber = document.getElementById("agent-number").value;
    const agentNumber = getInputValue("agent-number");

    // const cashOutPIn = parseInt(document.getElementById("cash-out-pin").value);
    const cashOutPIn = getInputValueNumber("cash-out-pin");

    if (agentNumber.length !== 11) {
      alert("Please provide a valid account number");
      return;
    }
    if (cashOutPIn !== validPin) {
      alert("please provide a valid pin");
      return;
    }

    const newAvailableBalance = availableBalance - amount;

    // document.getElementById("available-balance").innerText =
    //   newAvailableBalance;
    setInnerText(newAvailableBalance);

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    console.log(transactionData);
  });

// transfer money feature
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueNumber("transfer-amount");
    const availableBalance = getTextValue("available-balance");
    if (amount <= 0 || amount > availableBalance) {
      alert("invalid amount");
      return;
    }

    const userAccountNumber = getInputValue("transfer-number");

    const transferPIn = getInputValueNumber("transfer-pin");
    if (userAccountNumber.length !== 11) {
      alert("invalid Account number");
      return;
    }
    if (transferPIn !== validPin) {
      alert("invalid pin number");
      return;
    }

    const transferAvailableBalance = availableBalance - amount;

    setInnerText(transferAvailableBalance);

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    console.log(transactionData);
  });

// get bonus feature
document
  .getElementById("bonus-coupon-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const coupon = getInputValueNumber("bonus-coupon");
    const availableBalance = getTextValue("available-balance");

    if (coupon !== validCoupon) {
      alert("Invalid coupon number");
      return;
    }
    const bonusAvailableBalance = availableBalance + 5000;
    setInnerText(bonusAvailableBalance);

    const data = {
      name: "Get bonus",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    console.log(transactionData);
  });

// pay bill feature

document
  .getElementById("pay-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("pay-bill-bank").value;
    const accountNumber = getInputValue("pay-bill-account-number");
    const amount = getInputValueNumber("pay-bill-amount");

    const availableBalance = getTextValue("available-balance");
    if (amount <= 0 || amount > availableBalance) {
      alert("Invalid amount");
      return;
    }
    const payPin = getInputValueNumber("pay-bill-pin");

    if (accountNumber.length !== 11) {
      alert("Invalid Account Number");
      return;
    }

    if (payPin !== validPin) {
      alert("Invalid Pin Number ");
    }

    const payAvailableBalance = availableBalance - amount;
    setInnerText(payAvailableBalance);

    const data = {
      name: "Pay Bill",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    console.log(transactionData);
  });

// transaction feature
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div
            class="flex justify-between items-center bg-white rounded-xl p-3 mt-3"
          >
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" alt="" class="" />
              </div>
              <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
      `;
      transactionContainer.appendChild(div);
    }
  });

// toggling feature
// for add money button
document.getElementById("add-money").addEventListener("click", function () {
  // document.getElementById("cash-out-parent").style.display = "none";
  // document.getElementById("add-money-parent").style.display = "block";
  // document.getElementById("transfer-money-parent").style.display = "none";
  // better way to toggle

  // const forms = document.getElementsByClassName("form");
  // console.log(forms);

  // for (const form of forms) {
  //   console.log(form);
  //   form.style.display = "none";
  // }
  // document.getElementById("add-money-parent").style.display = "block";

  // toggling using reusable function
  handleToggle("add-money-parent");

  // button toggling
  // const formBtns = document.getElementsByClassName("form-btn");
  // for (const btns of formBtns) {
  //   btns.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //   btns.classList.add("border-gray-300");
  // }

  // document.getElementById("add-money").classList.remove("border-gray-300");
  // document
  //   .getElementById("add-money")
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

  // with reusable function
  handleToggleButton("add-money");
});
// for cash out button
document.getElementById("cash-out-btn").addEventListener("click", function () {
  // document.getElementById("add-money-parent").style.display = "none";
  // document.getElementById("cash-out-parent").style.display = "block";
  // document.getElementById("transfer-money-parent").style.display = "none";
  // better way to toggle

  // const forms = document.getElementsByClassName("form");

  // for (const form of forms) {
  //   form.style.display = "none";
  // }
  // document.getElementById("cash-out-parent").style.display = "block";

  // toggling using reusable function
  handleToggle("cash-out-parent");

  // button toggling
  //   const formBtns = document.getElementsByClassName("form-btn");
  //   for (const btns of formBtns) {
  //     btns.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //     btns.classList.add("border-gray-300");
  //   }

  //   document.getElementById("cash-out-btn").classList.remove("border-gray-300");
  //   document
  //     .getElementById("cash-out-btn")
  //     .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  // });

  // with reusable function
  handleToggleButton("cash-out-btn");
});

// for transfer money button
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    // document.getElementById("add-money-parent").style.display = "none";
    // document.getElementById("cash-out-parent").style.display = "none";
    // document.getElementById("transfer-money-parent").style.display = "block";
    // better way to toggle

    // const forms = document.getElementsByClassName("form");

    // for (const form of forms) {
    //   form.style.display = "none";
    // }
    // document.getElementById("transfer-money-parent").style.display = "block";

    // toggling using reusable function
    handleToggle("transfer-money-parent");

    // button toggling
    // const formBtns = document.getElementsByClassName("form-btn");
    // for (const btns of formBtns) {
    //   btns.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    //   btns.classList.add("border-gray-300");
    // }

    // document
    //   .getElementById("transfer-money")
    //   .classList.remove("border-gray-300");
    // document
    //   .getElementById("transfer-money")
    //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

    // with reusable function
    handleToggleButton("transfer-money");
  });

document.getElementById("bonus-button").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");

  // for (const form of forms) {
  //   form.style.display = "none";
  // }
  // document.getElementById("get-bonus-parent").style.display = "block";

  // toggling using reusable function
  handleToggle("get-bonus-parent");

  // button toggling
  // const formBtns = document.getElementsByClassName("form-btn");
  // for (const btns of formBtns) {
  //   btns.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //   btns.classList.add("border-gray-300");
  // }

  // document.getElementById("bonus-button").classList.remove("border-gray-300");
  // document
  //   .getElementById("bonus-button")
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

  // with reusable function
  handleToggleButton("bonus-button");
});

// for pay bill button
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    handleToggle("pay-bill-parent");
    handleToggleButton("pay-bill-button");
  });

// for transaction button
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    handleToggle("transaction-parent");
    handleToggleButton("transaction-button");
  });
