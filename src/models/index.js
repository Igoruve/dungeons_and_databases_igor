import connection from "../config/sequelize.js";
import User from "./userModel.js";
import Notes from "./notesModel.js";
import Item from "./itemModel.js";
import Class from "./classModel.js";
import Character from "./characterModel.js";
import Species from "./speciesModel.js";
import Stats from "./statsModel.js";
import Money from "./moneyModel.js";

User.hasMany(Notes, { foreignKey: "user_id", as: "notes" });

Notes.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasMany(Character, { foreignKey: "user_id", as: "character" });

Character.belongsTo(User, { foreignKey: "user_id", as: "user" });

Character.hasMany(Item, { foreignKey: "character_id", as: "item" });

Item.belongsTo(Character, { foreignKey: "character_id", as: "character" });

Character.belongsTo(Species, { foreignKey: "species_id", as: "species" });
Character.belongsTo(Stats, { foreignKey: "stats_id", as: "stats" });
Character.belongsTo(Class, { foreignKey: "class_id", as: "class" });
Character.belongsTo(Money, { foreignKey: "money_id", as: "money" });

export {
  connection,
  User,
  Notes,
  Item,
  Class,
  Character,
  Species,
  Stats,
  Money,
};
