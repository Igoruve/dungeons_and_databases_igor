import { Item } from "../../models/index.js";

async function GetByID(id) {
  const item = await Item.findByPk(id);
  return item;
}

async function GetAll() {
  const item = await Item.findAll();
  return item;
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
  Create,
  Edit,
  Remove,
};
