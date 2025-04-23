import connection from "../config/sequelize.js";
import User from "./userModel.js";
import Notes from "./notesModel.js";
import Item from "./itemModel.js";
import Class from "./classModel.js";
import Character from "./characterModel.js";
import Species from "./speciesModel.js";
import Stats from "./statsModel.js";

User.hasMany(Notes, { foreignKey: "user_id", as: "notes" });

Notes.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasMany(Character, { foreignKey: "user_id", as: "character" });

Character.belongsTo(User, { foreignKey: "user_id", as: "user" });

Character.hasMany(Item, { foreignKey: "character_id", as: "item" });

Item.belongsTo(Character, { foreignKey: "character_id", as: "character" });

Character.hasMany(Species, { foreignKey: "character_id", as: "species" });

Species.belongsTo(Character, { foreignKey: "character_id", as: "character" });

Character.hasMany(Stats, { foreignKey: "character_id", as: "stat" });

Stats.belongsTo(Character, { foreignKey: "character_id", as: "character" });

export { connection, User, Notes, Item, Class, Species, Stats };
