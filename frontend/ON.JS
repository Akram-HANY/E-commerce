// Basic form validation example
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from submitting for demonstration purposes
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!email || !password) {
      alert('Please fill out all fields');
    } else {
      alert(`Email: ${email}, Password: ${password}`);
      // Add actual form submission logic here
    }
  });
  