// models/units.model.js
module.exports = (sequelize, DataTypes, Model) => {
  class Units extends Model {}

  Units.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Units",
      freezeTableName: true,
    }
  );

  return Units;
};
