import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const Character = connection.define("character", {
  character_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  alignment: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  appearance: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lore: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  personality: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: "user",
      key: "user_id",
    },
  },
});

export default Character;
