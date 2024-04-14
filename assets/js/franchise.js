// Get the modal
var modal = document.getElementById("franchiseModal");

// Get the button that opens the modal
var btn = document.getElementById("franchiseButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById("franchiseForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  // Here you can add code to handle form submission, like sending data to a server
  document.getElementById("submitMessage").innerText = "You have successfully submitted and our franchise team will be connect as soon as possible.";
  document.getElementById("submitMessage").style.display = "block";
  console.log("Form submitted!");
});

// Generate random captcha code
function generateCaptcha() {
  var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var captchaLength = 6;
  var captcha = '';
  for (var i = 0; i < captchaLength; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

// Display captcha text
function displayCaptcha() {
  var captchaText = generateCaptcha();
  document.getElementById("captchaText").innerText = captchaText;
}

// Refresh captcha
document.getElementById("refreshCaptcha").addEventListener("click", function() {
  displayCaptcha();
});

// Display initial captcha
displayCaptcha();