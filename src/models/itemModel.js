import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Item = connection.define("item", {
  item_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM(
      "weapon",
      "consumable",
      "armor",
      "tool",
      "wondrous",
      "instrument",
      "staff"
    ),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  rarity: {
    type: DataTypes.ENUM(
      "common",
      "uncommon",
      "rare",
      "very rare",
      "legendary",
      "artifact"
    ),
    allowNull: false,
  },
  magic: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
});

export default Item;
