/*
 * File: complex_code.js
 * Description: This code demonstrates a complex implementation of a user management system.
 * Author: [Your Name]
 * Version: 1.0
 * Date: [Current Date]
 */

// Class representing a user
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Method to log in a user
  login() {
    console.log(`Welcome back, ${this.username}!`);
  }

  // Method to log out a user
  logout() {
    console.log(`Goodbye, ${this.username}!`);
  }
}

// Class representing a user management system
class UserManagementSystem {
  constructor() {
    this.users = [];
  }

  // Method to add a new user to the system
  addUser(username, email, password) {
    const newUser = new User(username, email, password);
    this.users.push(newUser);
    console.log(`${username} has been added to the system.`);
  }

  // Method to find a user by their username
  findUserByUsername(username) {
    const foundUser = this.users.find(user => user.username === username);
    return foundUser ? foundUser : null;
  }

  // Method to remove a user from the system
  removeUser(username) {
    const index = this.users.findIndex(user => user.username === username);
    if (index !== -1) {
      const removedUser = this.users.splice(index, 1)[0];
      console.log(`${removedUser.username} has been removed from the system.`);
    } else {
      console.log(`User ${username} not found.`);
    }
  }

  // Method to list all users in the system
  listUsers() {
    console.log("Users in the system:");
    this.users.forEach(user => console.log(user.username));
  }
}

// Create a new user management system
const ums = new UserManagementSystem();

// Add users to the system
ums.addUser("john123", "john@gmail.com", "password123");
ums.addUser("jane456", "jane@gmail.com", "mypassword");

// Log in a user
const user1 = ums.findUserByUsername("john123");
if (user1) {
  user1.login();
}

// List all users
ums.listUsers();

// Remove a user
ums.removeUser("john123");

// Log out the remaining user
const user2 = ums.findUserByUsername("jane456");
if (user2) {
  user2.logout();
}
/* ... (more lines of code) */