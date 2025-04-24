import { Skill } from "../../models/index.js";

async function GetByID(id) {
  const skill = await Skill.findByPk(id, {
    attributes: {
      exclude: ["skill_id"],
    },
  });
  return skill;
}

async function GetAll() {
  const skill = await Skill.findAll();
  return skill;
}

async function Create(data) {
  const result = await Skill.create(data);
  return result;
}

async function Edit(id, data) {
  const skill = await Skill.findByPk(id);

  const result = await skill.update(data, {
    where: {
      item_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const skill = await Skill.findByPk(id);
  const result = await skill.destroy({
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
