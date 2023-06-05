// models/users.model.js
module.exports = (sequelize, DataTypes, Model) => {
  class Users extends Model {}

  Users.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      dod_id: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      unit: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  return Users;
};
