import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const User = connection.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("player", "master"),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  { freezeTableName: true, tableName: "user" }
);

export default User;
