import { ClassFeature, Class } from "../../models/index.js";

async function GetByID(id) {
  const classFeature = await ClassFeature.findByPk(id, {
    attributes: {
      exclude: ["class_feature_id"],
    },
  });
  return classFeature;
}

async function GetAll() {
  const classFeature = await ClassFeature.findAll();
  return classFeature;
}

async function GetByClassID(id) {
  const classFeature = await ClassFeature.findAll({
    include: [
      {
        model: Class,
        as: "class",
        where: {
          class_id: id,
        },
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
    attributes: {
      exclude: ["class_id"],
    },
  });
  return classFeature;
}

async function Create(data) {
  const result = await ClassFeature.create(data);
  return result;
}

async function Edit(id, data) {
  const classFeature = await ClassFeature.findByPk(id);
  const result = await classFeature.update(data, {
    where: {
      class_feature_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await ClassFeature.destroy({
    where: {
      class_feature_id: id,
    },
  });
  return result;
}

export default {
  GetByID,
  GetAll,
  GetByClassID,
  Create,
  Edit,
  Remove,
};
