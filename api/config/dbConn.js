require("dotenv").config({ path: "../.env" });

const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require("../middleware/logger.js"); //corrected path
const pg = require("pg");

const connect = () => {
  console.log("process.env.DATABASE_URI ", process.env.DATABASE_URI);

  const sequelize = new Sequelize(process.env.DATABASE_URI, {
    dialectModule: pg,
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.notifications = require("../models/notifications")(
    sequelize,
    DataTypes,
    Model
  );
  db.sfs45patrick_qrcs = require("../models/sfs45PatrickQrcs")(
    sequelize,
    DataTypes,
    Model
  );
  db.units = require("../models/units")(sequelize, DataTypes, Model);
  db.Users = require("../models/users")(sequelize, DataTypes, Model);

  return db;
};

module.exports = {
  connect,
};
