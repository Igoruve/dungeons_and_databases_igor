import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Species = connection.define("species", {
  species_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  creature_type: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  size: {
    type: DataTypes.ENUM("small", "medium"),
    allowNull: false,
  },
  speed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  darkvision: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  species_feature_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

export default Species;
