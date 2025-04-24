import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const CharacterHasSkill = connection.define("character_has_skill", {
  character_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  skill_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  proficiency: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default CharacterHasSkill;
