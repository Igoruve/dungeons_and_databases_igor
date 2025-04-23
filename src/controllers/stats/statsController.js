import Stats from "../../models/statsModel.js";

async function GetByID(id) {
  const stats = await Stats.findByPk(id);
  return stats;
}

async function GetAll() {
  const stats = await Stats.findAll();
  return stats;
}

async function GetByCharacterID(id) {
  const stats = await Stats.findAll({
    where: {
      character_id: id,
    },
  });
  return stats;
}

async function Create(data) {
  const result = await Stats.create(data);
  return result;
}

async function Edit(id, data) {
  const stats = await Stats.findByPk(id);
  const result = await stats.update(data, {
    where: {
      stats_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await Stats.destroy({
    where: {
      stats_id: id,
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
