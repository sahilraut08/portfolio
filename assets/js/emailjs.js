document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const templateParams = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };

    // Send email using EmailJS
    emailjs.send("service_fr7ep22", "service_fr7ep22", templateParams).then(
      function (response) {
        alert("Email sent successfully!");
      },
      function (error) {
        alert("Failed to send email. Please try again.");
        console.log("Failed to send email:", error);
      }
    );
  });
