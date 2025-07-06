 // Password toggle for Sign In
        const passwordInputSignin = document.getElementById("password_signin");
        const passwordToggleSignin = document.getElementById("passwordToggle_signin");
        passwordToggleSignin.addEventListener("click", function () {
            togglePasswordVisibility(passwordInputSignin, passwordToggleSignin);
        });

        // Password toggles for Registration
        const passwordInputRegister = document.getElementById("password_register");
        const passwordToggleRegister = document.getElementById("passwordToggle_register");
        const confirmPasswordInputRegister = document.getElementById("confirm_password_register");
        const confirmPasswordToggleRegister = document.getElementById("confirmPasswordToggle_register");

        passwordToggleRegister.addEventListener("click", function () {
            togglePasswordVisibility(passwordInputRegister, passwordToggleRegister);
        });
        confirmPasswordToggleRegister.addEventListener("click", function () {
            togglePasswordVisibility(confirmPasswordInputRegister, confirmPasswordToggleRegister);
        });

        function togglePasswordVisibility(input, toggleElement) {
            if (input.type === "password") {
                input.type = "text";
                toggleElement.textContent = "🙈";
            } else {
                input.type = "password";
                toggleElement.textContent = "👁️";
            }
        }

        // Basic form validation for Registration (client-side)
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const password = document.getElementById('password_register').value;
            const confirmPassword = document.getElementById('confirm_password_register').value;
            const errorDiv = document.getElementById('registrationError');
            errorDiv.style.display = 'none'; // Hide previous errors

            if (password !== confirmPassword) {
                errorDiv.textContent = 'Passwords do not match.';
                errorDiv.style.display = 'block';
                return;
            }

            // In a real application, you would send this data to a server
            // For now, we'll just log it and simulate success
            console.log("Registration data:", {
                username: document.getElementById('username_register').value,
                email: document.getElementById('email_register').value,
                password: password
            });
            alert('Registration successful! (This is a client-side simulation)');
            // You might redirect here after a real successful registration
            // window.location.href = '#signin';
        });