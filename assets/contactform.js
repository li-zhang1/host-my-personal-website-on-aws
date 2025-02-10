document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();


    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://xtbdx23d21.execute-api.us-east-1.amazonaws.com/prod/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        responseMessage.textContent = result.message || "Error sending email";
    } catch (error) {
        responseMessage.textContent = "An error occurred!";
    }
});
