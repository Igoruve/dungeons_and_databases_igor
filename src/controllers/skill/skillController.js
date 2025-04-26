import { Skill, Character } from "../../models/index.js";

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

async function GetByCharacterID(character_id) {
  const skills = await Skill.findAll({
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
  return skills;
}

async function Create(data) {
  const result = await Skill.create(data);
  return result;
}

async function Edit(id, data) {
  const skill = await Skill.findByPk(id);
  const result = await skill.update(data, {
    where: {
      skill_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await Skill.destroy({
    where: {
      skill_id: id,
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
