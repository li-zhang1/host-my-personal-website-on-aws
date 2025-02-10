
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("https://your-api-gateway-url.execute-api.your-region.amazonaws.com/prod/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert("Message sent successfully!");
    } else {
        alert("Failed to send message.");
    }
});
