require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV || "postgres",
    password: process.env.DB_PASSWORD_DEV || "postgres",
    database: process.env.DB_DEV || "ch8-challenge_development",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME_TEST || "postgres",
    password: process.env.DB_PASSWORD_TEST || "postgres",
    database: process.env.DB_TEST || "ch8-challenge_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME_PROD || "postgres",
    password: process.env.DB_PASSWORD_PROD || "postgres",
    database: process.env.DB_PROD || "ch8-challenge_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
