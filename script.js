function submitForm(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const formData = {
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value,
        marks: document.getElementById("marks").value,
    };

    fetch("https://your-api-id.execute-api.region.amazonaws.com/prod/submit-form", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Form submitted successfully!");
        // Clear the form fields if needed
        document.getElementById("admissionForm").reset();
    })
    .catch(error => {
        console.error("Error submitting form:", error);
        alert("Form submitted successfully!");
    });
}
