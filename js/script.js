const contact = 
document.getElementById("contactForm");

if (contact) {
document.getElementById("contactForm").addEventListener("submit", function(event) {

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    event.preventDefault();
  }

  else if (!email.includes("@")) {
    alert("Please enter a valid email address");
    event.preventDefault();
  }

  else {
   alert("Message sent successfully!");
   contact .reset();
   event .preventDefault();
  }

    document .getElementById("contactForm").reset()
  }

)};
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");

messageBox.addEventListener("input", function() {
  let length = messageBox.value.length;
  charCount.textContent = length + " characters";
});

  const form = document.getElementById("enquiryForm");

  if (form) {

    form.addEventListener("submit", function (event) {

      event.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("contact").value.trim();
      let service = document.getElementById("service").value;
      let message = document.getElementById("message").value.trim();

      let response = document.getElementById("enquiryResponse");

      if (name === "" || email === "" || phone === "" || service === "" || message === "") {
        response.textContent = "Please fill in all fields";
      }
      else {
        response.textContent = "Hi " + name + ", your " + service + " booking has been received!";

        form.reset();
      }
    
    })
}
