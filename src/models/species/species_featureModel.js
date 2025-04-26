import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const SpeciesFeature = connection.define(
  "species_feature",
  {
    species_feature_id: {
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
  },
  { freezeTableName: true, tableName: "species_feature" }
);

export default SpeciesFeature;
