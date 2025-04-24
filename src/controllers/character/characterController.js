import characterModel from "../../models/character/characterModel.js";
import Class from "../../models/class/classModel.js";
import Species from "../../models/species/speciesModel.js";
import Stats from "../../models/statsModel.js";
import User from "../../models/userModel.js";
import Item from "../../models/itemModel.js";
import Money from "../../models/moneyModel.js";
// import Skill from "../../models/skillModel.js";

async function GetByID(id) {
  const character = await characterModel.findByPk(id, {
    attributes: {
      exclude: ["character_id"],
    },
    include: [
      {
        model: Class,
        as: "class",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Species,
        as: "species",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Stats,
        as: "stats",
        attributes: { exclude: ["stats_id", "character_id"] },
      },
      {
        model: Item,
        as: "items",
        attributes: ["name"],
        through: { attributes: ["quantity"] },
      },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
      // {
      //   model: Skill,
      //   as: "skill", // Relación de muchos a muchos con Habilidades
      //   attributes: ["name"],
      //   through: { attributes: [] },
      // },
    ],
  });
  return character;
}

async function GetAll() {
  const characters = await characterModel.findAll({
    include: [
      {
        model: Class,
        as: "class",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Species,
        as: "species",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Stats,
        as: "stats",
        attributes: { exclude: ["stats_id", "character_id"] },
      },
      {
        model: Item,
        as: "items",
        attributes: ["name"],
        through: { attributes: ["quantity"] },
      },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
      // {
      //   model: Skill,
      //   as: "skill", // Relación con Habilidades
      //   attributes: ["name"],
      //   through: { attributes: [] },
      // },
    ],
  });
  return characters;
}

async function GetByUserID(id) {
  const characters = await characterModel.findAll({
    where: {
      user_id: id,
    },
    attributes: {
      exclude: ["user_id"],
    },
    include: [
      {
        model: Class,
        as: "class",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Species,
        as: "species",
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Stats,
        as: "stats",
        attributes: { exclude: ["stats_id", "character_id"] },
      },
      {
        model: Item,
        as: "items",
        attributes: ["name"],
        through: { attributes: ["quantity"] },
      },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
      // {
      //   model: Skill,
      //   as: "skill", // Relación con Habilidades
      //   attributes: ["name"],
      //   through: { attributes: [] },
      // },
    ],
  });
  return characters;
}

async function Create(data) {
  const result = await characterModel.create(data);
  return result;
}

async function Edit(id, data) {
  const character = await characterModel.findByPk(id);
  const result = await character.update(data, {
    where: {
      character_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await characterModel.destroy({
    where: {
      character_id: id,
    },
  });
  return result;
}

export default {
  GetByID,
  GetAll,
  GetByUserID,
  Create,
  Edit,
  Remove,
};
