import { Character, Stats } from "../../models/index.js";

async function GetByID(id) {
  const stats = await Stats.findByPk(id, {
    attributes: {
      exclude: ["stats_id"],
    },
  });
  return stats;
}

async function GetAll() {
  const stats = await Stats.findAll();
  return stats;
}

async function GetByCharacterID(character_id) {
  const stats = await Stats.findAll({
    attributes: {
      exclude: ["character_id"],
    },
    include: [
      {
        model: Character,
        as: "character",
        where: {
          character_id: character_id,
        },
        attributes: ["first_name", "last_name"],
      },
    ],
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
