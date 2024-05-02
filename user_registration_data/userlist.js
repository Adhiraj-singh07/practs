document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
  
    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Display user data in a list
    users.forEach((user, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `User ${index + 1}: Username - ${user.username}, Email - ${user.email}`;
      userList.appendChild(listItem);
    });
  });
  