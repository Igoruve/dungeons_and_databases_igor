import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const CharacterHasStats = connection.define(
  "CharacterHasStats",
  {
    character_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "character", // Match your actual table name
        key: "character_id",
      },
      onDelete: "CASCADE",
    },
    stat_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "character_has_stats",
    timestamps: false,
  }
);

export default CharacterHasStats;
