<script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js"></script>


        document.addEventListener("DOMContentLoaded", () => {
            let btn = document.querySelector("button")

            function clear(select) {

                document.querySelector(select).textContent = ""
            }

            btn.addEventListener("click", () => {
                let name = document.querySelector("#name").value;
                let email = document.querySelector("#email").value;
                let password = document.querySelector("#password").value;

                if (name === "" || email === "" || password === "") {
                    document.querySelector("#response").textContent = "All fields are required"
                    document.querySelector("#response").style.color = "red"
                    if (name === "") {
                        document.querySelector("#name-error").textContent = "Input Name"
                        document.querySelector("#name-error").style.color = "red"
                    } else {
                        document.querySelector("#name-error").textContent = ""
                    }
                    if (email === "") {
                        document.querySelector("#email-error").textContent = "Input Email"
                        document.querySelector("#email-error").style.color = "red"
                    } else {
                        document.querySelector("#email-error").textContent = ""
                    }
                    if (password === "") {
                        document.querySelector("#password-error").textContent = "Input Password"
                        document.querySelector("#password-error").style.color = "red"
                    } else {
                        document.querySelector("#password-error").textContent = ""
                    }
                } else {
                    bcrypt.hash(password, 12, function (err, hasedPassword) {
                        if (err) {
                            document.querySelector('#response').textContent = "error hashing password";
                            document.querySelector('#response').style.color = "red";
                        } else {
                            document.querySelector("#response").textContent = "Registration Successful"
                            document.querySelector("#response").style.color = "limegreen"

                            let userData = { name, email, password: hasedPassword };
                            localStorage.setItem('userData', JSON.stringify(userData));

                            localStorage.setItem('isLoggedIn', 'true');


                            setTimeout(() => {
                                window.location.href = "login.html";
                            }, 1000);
                        }
                    });
                }

            })
        })
