import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const CharacterHasSkill = connection.define(
  "character_has_skill",
  {
    character_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: "character",
        key: "character_id",
      },
      onDelete: "CASCADE",
    },
    skill_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "skill",
        key: "skill_id",
      },
      onDelete: "CASCADE",
    },
    proficiency: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default CharacterHasSkill;