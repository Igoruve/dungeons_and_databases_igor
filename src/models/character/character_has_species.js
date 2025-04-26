import { DataTypes } from "sequelize";
import connection from "../../config/sequelize.js";

const CharacterHasSpecies = connection.define("character_has_species", {
  character_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  species_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default CharacterHasSpecies;
