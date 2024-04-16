function openModal() {
    document.getElementById("myModal").style.display = "block";
    generateCaptcha();
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function validateForm() {
    // Check if all mandatory fields are filled
    var inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert("Please fill in all mandatory fields.");
            return false;
        }
    }

    // Validate captcha code
    var captchaInput = document.getElementById("captchaInput").value;
    var captchaCode = document.getElementById("captcha").innerText;
    if (captchaInput.toUpperCase() !== captchaCode) {
        alert("Captcha code is incorrect!");
        return false;
    }

    return true; // Return false if form is invalid
}

function generateCaptcha() {
    var captcha = Math.random().toString(36).slice(-6).toUpperCase(); // Generate a random string
    document.getElementById("captcha").innerText = captcha;
}