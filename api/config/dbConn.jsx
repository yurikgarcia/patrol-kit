// /Users/parissyoungblood/dev/securityforces/SKIES/api/config/dbConn.jsx
const knex = require("knex");

const connectDB = knex({
  client: "pg",
  connection: process.env.DATABASE_URI,
});

module.exports = connectDB;
