import characterModel from "../../models/characterModel.js";
import Class from "../../models/classModel.js";
import Species from "../../models/speciesModel.js";
import Stats from "../../models/statsModel.js";
import User from "../../models/userModel.js";
import Item from "../../models/itemModel.js";
import Money from "../../models/moneyModel.js";

async function GetByID(id) {
  const character = await characterModel.findByPk(id, {
    attributes: {
      exclude: [
        "character_id",
        "class_id",
        "species_id",
        "stats_id",
        "money_id",
        "user_id",
      ],
    },
    include: [
      { model: Class, as: "class", attributes: ["name"] },
      { model: Species, as: "species", attributes: ["name"] },
      {
        model: Stats,
        as: "stats",
        attributes: { exclude: ["stats_id", "character_id"] },
      },
      { model: Item, as: "item", attributes: ["name"] },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
    ],
  });
  return character;
}

async function GetAll() {
  const characters = await characterModel.findAll({
    attributes: {
      exclude: ["class_id", "species_id", "stats_id", "money_id"],
    },
    include: [
      { model: Class, as: "class", attributes: ["name"] },
      { model: Species, as: "species", attributes: ["name"] },
      {
        model: Stats,
        as: "stats",
        attributes: { exclude: ["stats_id", "character_id"] },
      },
      { model: Item, as: "item", attributes: ["name"] },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
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
      exclude: ["class_id", "species_id", "stats_id", "money_id", "user_id"],
    },
    include: [
      { model: Class, as: "class", attributes: ["name"] },
      { model: Species, as: "species", attributes: ["name"] },
      {
        model: Stats,
        as: "stats",
        attributes: { exclude: ["stats_id", "character_id"] },
      },
      { model: Item, as: "item", attributes: ["name"] },
      {
        model: Money,
        as: "money",
        attributes: { exclude: ["money_id", "character_id"] },
      },
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
