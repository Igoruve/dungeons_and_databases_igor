import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const CharacterHasItem = connection.define("character_has_item", {
  character_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  item_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default CharacterHasItem;
