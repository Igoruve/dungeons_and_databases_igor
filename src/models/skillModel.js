import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Skill = connection.define(
  "skill",
  {
    skill_id: {
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
    associated_stat: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { freezeTableName: true, tableName: "skill" }
);

export default Skill;
