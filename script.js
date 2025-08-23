// login button functionality
document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const inputMobileNumber = document.getElementById("mobile-number").value;
  const convertedInputMobileNumber = parseInt(inputMobileNumber);

  const inputPinNumber = document.getElementById("pin-number").value;
  const convertedInputPinNumber = parseInt(inputPinNumber);
  //   console.log(convertedInputMobileNumber, convertedInputPinNumber);

  if (
    convertedInputMobileNumber === mobileNumber &&
    convertedInputPinNumber === pinNumber
  ) {
    window.location.href = "./home-page.html";
  } else {
    alert("Invalid credential");
  }
});
