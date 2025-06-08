document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop the form from refreshing the page

    // Simple validation (you can expand this)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    // Simulate form processing
    alert('Thank you for reaching out, Toyosi will get back to you shortly!');

    // Optional: Reset the form
    form.reset();
  });
});
