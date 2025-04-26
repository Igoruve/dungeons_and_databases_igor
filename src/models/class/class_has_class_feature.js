import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const ClassHasClassFeature = connection.define("class_has_class_feature", {
  class_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  class_feature_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default ClassHasClassFeature;
