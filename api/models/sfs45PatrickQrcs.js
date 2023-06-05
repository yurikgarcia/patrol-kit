// models/sfs45patrick_qrcs.model.js
module.exports = (sequelize, DataTypes, Model) => {
  class Sfs45PatrickQrcs extends Model {}

  Sfs45PatrickQrcs.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      item_number: {
        type: DataTypes.STRING,
      },
      sfs_action: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "sfs45PatrickQrcs",
    }
  );

  return Sfs45PatrickQrcs;
};
