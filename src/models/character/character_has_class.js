import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const CharacterHasClass = connection.define("character_has_class", {
  character_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  class_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default CharacterHasClass;
