// utils/authUtils.js
export const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");

export const findUserByEmail = (email) => getUsers().find(u => u.email === email);

export const createUser = ({ name, email, password }) => {
  const users = getUsers();
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  return newUser;
};
