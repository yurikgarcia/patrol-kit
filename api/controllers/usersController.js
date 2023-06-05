const db = require("../config/dbConn.js").connect();

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await db.Users.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await db.Users.findByPk(req.params.uuid);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await db.Users.create(req.body);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await db.Users.update(req.body, {
      where: {
        uuid: req.params.uuid,
      },
    });
    if (updatedUser[0] === 1) {
      res.json({ message: "User updated successfully" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const rowsDeleted = await db.Users.destroy({
      where: {
        uuid: req.params.uuid,
      },
    });
    if (rowsDeleted === 1) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    next(err);
  }
};
