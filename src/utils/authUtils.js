// src/utils/authUtils.js
import bcrypt from "bcryptjs";

// get users array from localStorage
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

// save users array back
export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// find user by email
export const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
};

// create user (hash password)
export const createUser = ({ name, email, password }) => {
  const hashed = bcrypt.hashSync(password, 8);
  const user = {
    id: Date.now(),
    name,
    email,
    password: hashed,
  };
  const users = getUsers();
  users.push(user);
  saveUsers(users);
  return user;
};

// validate password
export const validatePassword = (plain, hashed) => {
  return bcrypt.compareSync(plain, hashed);
};
