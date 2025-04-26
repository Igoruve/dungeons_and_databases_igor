import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Money = connection.define("money", {
  money_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  platinum: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  gold: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  silver: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  copper: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  character_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: "character",
      key: "character_id",
    },
  },
});

export default Money;
