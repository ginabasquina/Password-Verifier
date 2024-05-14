// Function to verify the password
function verifyPassword(password) {
    const minLength = 8;
    let hasNumber = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;

    for (let i = 0; i < password.length; i++) {
        const char = password.charAt(i);

        if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if ("!@#$%^&*()".includes(char)) {
            hasSpecialChar = true;
        }
    }

    const errors = [];

    if (password.length < minLength) {
        errors.push("Password is too short.");
    }

    if (!hasNumber) {
        errors.push("Password must contain at least one number.");
    }

    if (!hasLowerCase) {
        errors.push("Password must contain at least one lowercase letter.");
    }

    if (!hasUpperCase) {
        errors.push("Password must contain at least one uppercase letter.");
    }

    if (!hasSpecialChar) {
        errors.push("Password must contain at least one special character.");
    }

    return {
        valid: errors.length === 0,
        errors: errors,
    };
}

document.getElementById("verifyButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const passwordInput = document.getElementById("passwordInput").value;
    const resultMessage = document.getElementById("result");
    
    const verificationResult = verifyPassword(passwordInput);

    if (passwordInput.trim() === "") {
        resultMessage.textContent = "Please enter a password.";
        resultMessage.style.color = "blue";
    } else if (verificationResult.valid) {
        resultMessage.textContent = "This password is strong and secure!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.innerHTML = verificationResult.errors.join("<br>");
        resultMessage.style.color = "red";
    }   
});

