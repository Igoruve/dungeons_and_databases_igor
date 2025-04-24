import connection from "../config/sequelize.js";
import User from "./userModel.js";
import Notes from "./notesModel.js";
import Item from "./itemModel.js";
import Class from "./class/classModel.js";
import Character from "./character/characterModel.js";
import Species from "./species/speciesModel.js";
import Stats from "./statsModel.js";
import Money from "./moneyModel.js";
import Skill from "./skillModel.js";
import ClassFeature from "./class/class_featureModel.js";
import SpeciesFeature from "./species/species_featureModel.js";

User.hasMany(Notes, { foreignKey: "user_id", as: "notes" });
Notes.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasMany(Character, { foreignKey: "user_id", as: "characters" });
Character.belongsTo(User, { foreignKey: "user_id", as: "user" });

Character.hasOne(Money, { foreignKey: "character_id", as: "money" });
Money.belongsTo(Character, { foreignKey: "character_id", as: "character" });

Character.hasOne(Stats, { foreignKey: "character_id", as: "stats" });
Stats.belongsTo(Character, { foreignKey: "character_id", as: "character" });

Character.belongsToMany(Class, {
  through: "character_has_class",
  foreignKey: "character_id",
  otherKey: "class_id",
  as: "class",
});

Class.belongsToMany(Character, {
  through: "character_has_class",
  foreignKey: "class_id",
  otherKey: "character_id",
  as: "character",
});

Character.belongsToMany(Species, {
  through: "character_has_species",
  foreignKey: "character_id",
  otherKey: "species_id",
  as: "species",
});

Species.belongsToMany(Character, {
  through: "character_has_species",
  foreignKey: "species_id",
  otherKey: "character_id",
  as: "character",
});

Character.belongsToMany(Skill, {
  through: "character_has_skill",
  foreignKey: "character_id",
  otherKey: "skill_id",
  as: "skill",
});

Skill.belongsToMany(Character, {
  through: "character_has_skill",
  foreignKey: "skill_id",
  otherKey: "character_id",
  as: "character",
});

Character.belongsToMany(Item, {
  through: "character_has_item",
  foreignKey: "character_id",
  otherKey: "item_id",
  as: "items",
});

Item.belongsToMany(Character, {
  through: "character_has_item",
  foreignKey: "item_id",
  otherKey: "character_id",
  as: "character",
});

Class.belongsToMany(ClassFeature, {
  through: "class_has_class_feature",
  foreignKey: "class_id",
  otherKey: "class_feature_id",
  as: "class_feature",
});

ClassFeature.belongsToMany(Class, {
  through: "class_has_class_feature",
  foreignKey: "class_feature_id",
  otherKey: "class_id",
  as: "class",
});

Species.belongsToMany(SpeciesFeature, {
  through: "species_has_species_feature",
  foreignKey: "species_id",
  otherKey: "species_feature_id",
  as: "species_feature",
});

SpeciesFeature.belongsToMany(Species, {
  through: "species_has_species_feature",
  foreignKey: "species_feature_id",
  otherKey: "species_id",
  as: "species",
});

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
  Skill,
  ClassFeature,
  SpeciesFeature,
};
