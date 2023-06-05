// models/notifications.model.js
module.exports = (sequelize, DataTypes, Model) => {
  class Notifications extends Model {}

  Notifications.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      position_title: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      rank: {
        type: DataTypes.STRING,
      },
      phone_numbers: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Notifications",
    }
  );

  return Notifications;
};
