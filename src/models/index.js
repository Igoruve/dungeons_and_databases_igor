import connection from "../config/sequelize.js";
import User from "./userModel.js";
import Notes from "./notesModel.js";
import Item from "./itemModel.js";
import Class from "./classModel.js";

User.hasMany(Notes, { foreignKey: "user_id", as: "notes" });

Notes.belongsTo(User, { foreignKey: "user_id", as: "user" });

export { connection, User, Notes, Item, Class };
