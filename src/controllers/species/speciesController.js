import { Species } from "../../models/index.js";

async function GetByID(id) {
  const species = await Species.findByPk(id, {
    attributes: {
      exclude: ["species_id", "character_id", "species_feature_id"],
    },
  });
  return species;
}

async function GetAll() {
  const species = await Species.findAll({
    attributes: {
      exclude: ["character_id", "species_feature_id"],
    },
  });
  return species;
}

async function GetByCharacterID(id) {
  const species = await Species.findAll({
    where: {
      character_id: id,
    },
    attributes: {
      exclude: ["character_id", "species_id", "species_feature_id"],
    },
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
      Species_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await Species.destroy({
    where: {
      Species_id: id,
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
