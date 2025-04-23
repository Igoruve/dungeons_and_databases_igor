import { Item } from "../../models/index.js";

async function GetByID(id) {
  const item = await Item.findByPk(id, {
    attributes: {
      exclude: ["character_id", "item_id"],
    },
  });
  return item;
}

async function GetAll() {
  const item = await Item.findAll();
  return item;
}

async function GetByCharacterID(id) {
  const items = await Item.findAll({
    where: {
      character_id: id,
    },
    attributes: {
      exclude: ["character_id", "item_id"],
    },
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
