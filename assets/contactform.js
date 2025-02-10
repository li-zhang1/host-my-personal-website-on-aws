document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

     // Disable the submit button to prevent multiple submissions
     const submitButton = document.querySelector('button[type="submit"]');
     submitButton.disabled = true;


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

        // Handle the response from the API
        if (response.ok) {
        const responseData = await response.json();
        alert('Your message has been sent successfully!'); // Show a success message
        console.log(responseData);

        // Empty the form fields after successful submission
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById("name").value = '';
        } else {
        alert('Something went wrong. Please try again.');
        throw new Error('Failed to send the message');
        }
        } catch (error) {
         console.error('Error submitting form:', error);
         alert('There was an error submitting your form.');
        } finally {
            // Re-enable the submit button after alert is closed
            submitButton.disabled = false;
        }
    
});
