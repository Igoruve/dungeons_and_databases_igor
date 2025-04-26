import { Character, Species } from "../../models/index.js";

async function GetByID(id) {
  const species = await Species.findByPk(id, {
    attributes: {
      exclude: ["species_id"],
    },
    include: [
      {
        model: Character,
        as: "character",
        attributes: ["character_id"],
        through: { attributes: [] },
      },
    ],
  });
  return species;
}

async function GetAll() {
  const species = await Species.findAll({
    include: [
      {
        model: Character,
        as: "character",
        attributes: ["character_id"],
        through: { attributes: [] },
      },
    ],
  });
  return species;
}

async function GetByCharacterID(character_id) {
  const species = await Species.findAll({
    include: [
      {
        model: Character,
        as: "character",
        where: {
          character_id: character_id,
        },
        attributes: ["first_name", "last_name"],
        through: { attributes: [] },
      },
    ],
  });
  return species;
}

async function Create(data) {
  const result = await Species.create(data);
  return result;
}

async function Edit(id, data) {
  const species = await Species.findByPk(id);

  const result = await species.update(data, {
    where: {
      item_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const species = await Species.findByPk(id);
  const result = await species.destroy({
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
