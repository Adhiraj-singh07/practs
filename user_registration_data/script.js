document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
  
    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const userData = { username, email, password };
  
      // Push data to local storage
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
  
      // Redirect to new page with user data list
      window.location.href = 'userlist.html';
    });
  });
  