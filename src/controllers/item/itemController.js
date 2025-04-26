import { Item, Character } from "../../models/index.js";

async function GetByID(id) {
  const item = await Item.findByPk(id, {
    attributes: {
      exclude: ["item_id"],
    },
    include: [
      {
        model: Character,
        as: "character",
        attributes: ["character_id"],
        through: { attributes: ["quantity"] },
      },
    ],
  });
  return item;
}

async function GetAll() {
  const items = await Item.findAll({
    include: [
      {
        model: Character,
        as: "character",
        attributes: ["character_id"],
        through: { attributes: ["quantity"] },
      },
    ],
  });
  return items;
}

async function GetByCharacterID(character_id) {
  const items = await Item.findAll({
    include: [
      {
        model: Character,
        as: "character",
        where: {
          character_id: character_id,
        },
        attributes: ["first_name", "last_name"],
        through: { attributes: ["quantity"] },
      },
    ],
  });
  return items;
}

async function Create(data) {
  const result = await Item.create(data);
  return result;
}

async function Edit(id, data) {
  const item = await Item.findByPk(id);
  const result = await item.update(data, {
    where: {
      item_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await Item.destroy({
    where: {
      item_id: id,
    },
  });
  return result;
}

export default {
  GetByID,
  GetAll,
  GetByCharacterID,
  Create,
  Edit,
  Remove,
};
