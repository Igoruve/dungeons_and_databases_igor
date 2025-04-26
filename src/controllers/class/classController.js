import { Class, Character, ClassFeature } from "../../models/index.js";

async function GetByID(id) {
  const clas = await Class.findByPk(id, {
    attributes: {
      exclude: ["class_id"],
    },
    include: [
      {
        model: ClassFeature,
        as: "class_feature",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  return clas;
}

async function GetAll() {
  const clas = await Class.findAll({
    include: [
      {
        model: ClassFeature,
        as: "class_feature",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  return clas;
}

async function GetByCharacterID(character_id) {
  const clas = await Class.findAll({
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
      {
        model: ClassFeature,
        as: "class_feature",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  return clas;
}

async function Create(data) {
  const result = await Class.create(data);
  return result;
}

async function Edit(id, data) {
  const clas = await Class.findByPk(id);
  const result = await clas.update(data, {
    where: {
      class_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await Class.destroy({
    where: {
      class_id: id,
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
