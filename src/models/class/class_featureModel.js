import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const ClassFeature = connection.define(
  "class_feature",
  {
    class_feature_id: {
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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true, tableName: "class_feature" }
);

export default ClassFeature;
