import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const Class = connection.define(
  "class",
  {
    class_id: {
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
    hit_die: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    main_stat: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    caster: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    saving_throw_proficiencies: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    tool_proficiencies: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    weapon_proficiencies: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    skill_proficiencies: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    armor_training: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { freezeTableName: true, tableName: "class" }
);

export default Class;
