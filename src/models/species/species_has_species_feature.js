import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const SpeciesHasSpeciesFeature = connection.define("species_has_species_feature", {
  species_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  species_feature_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default SpeciesHasSpeciesFeature;
