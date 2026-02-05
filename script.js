document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let height = document.getElementById("height").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let address = document.getElementById("address").value.trim();

    // check blank fields
    if (name === "" || age === "" || height === "" || phone === "" || dob === "" || address === "") {
        alert("Fill this field!");
        return;
    }

    // regex rules
    let nameRegex = /^[A-Za-z\s]+$/;
    let intRegex = /^[0-9]+$/;

    // validation checks
    if (!nameRegex.test(name)) {
        alert("Name must contain only letters!");
        return;
    }

    if (!intRegex.test(age)) {
        alert("Age must be an integer!");
        return;
    }

    if (!intRegex.test(height)) {
        alert("Height must be an integer!");
        return;
    }

    if (!intRegex.test(phone)) {
        alert("Phone number must contain only digits!");
        return;
    }

    // success
    alert("Form submitted successfully ✅");
});
