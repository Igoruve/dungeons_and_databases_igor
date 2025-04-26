import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Stats = connection.define("stats", {
  stats_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Dexterity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Wisdom: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Strength: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Constitution: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Intelligence: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Charisma: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  character_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    unique: true,
    allowNull: false,
    references: {
      model: "character",
      key: "character_id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});

export default Stats;
