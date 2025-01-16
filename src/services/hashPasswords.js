const bcrypt = require("bcryptjs");

// Admin passwords to be hashed
const passwords = [
  "samichhya123", // Replace with actual passwords for admins
  "pratigya123",
  "shejar123",
];

// Hash each password and log the result
const hashPasswords = async () => {
  for (let password of passwords) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
      console.log(`Original: ${password}, Hashed: ${hashedPassword}`);
    } catch (err) {
      console.error("Error hashing password", err);
    }
  }
};

hashPasswords();
