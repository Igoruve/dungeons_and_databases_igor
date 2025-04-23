import { Money } from "../../models/index.js";

async function GetByID(id) {
  const money = await Money.findByPk(id, {
    attributes: {
      exclude: ["character_id", "money_id"],
    },
  });
  return money;
}

async function GetAll() {
  const money = await Money.findAll();
  return money;
}

async function GetByCharacterID(id) {
  const money = await Money.findAll({
    where: {
      character_id: id,
    },
    attributes: {
      exclude: ["character_id", "money_id"],
    },
  });
  return money;
}

async function Create(data) {
  const result = await Money.create(data);
  return result;
}

async function Edit(id, data) {
  const money = await Money.findByPk(id);
  const result = await money.update(data, {
    where: {
      money_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await Money.destroy({
    where: {
      money_id: id,
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
