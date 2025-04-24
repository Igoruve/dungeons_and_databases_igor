import { SpeciesFeature, Species } from "../../models/index.js";

async function GetByID(id) {
  const speciesFeature = await SpeciesFeature.findByPk(id, {
    attributes: {
      exclude: ["species_feature_id"],
    },
  });
  return speciesFeature;
}

async function GetAll() {
  const speciesFeature = await SpeciesFeature.findAll();
  return speciesFeature;
}

async function GetBySpeciesID(id) {
  const speciesFeature = await SpeciesFeature.findAll({
    include: [
      {
        model: Species,
        as: "species",
        where: {
          species_id: id,
        },
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
    attributes: {
      exclude: ["species_id"],
    },
  });
  return speciesFeature;
}

async function Create(data) {
  const result = await SpeciesFeature.create(data);
  return result;
}

async function Edit(id, data) {
  const speciesFeature = await SpeciesFeature.findByPk(id);
  const result = await speciesFeature.update(data, {
    where: {
      species_feature_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await SpeciesFeature.destroy({
    where: {
      species_feature_id: id,
    },
  });
  return result;
}

export default {
  GetByID,
  GetAll,
  GetBySpeciesID,
  Create,
  Edit,
  Remove,
};
