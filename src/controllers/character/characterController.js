import characterModel from "../../models/characterModel.js";

async function GetByID(id) {
  const character = await characterModel.findByPk(id);
  return character;
}

async function GetAll() {
  const character = await characterModel.findAll();
  return character;
}

async function GetByUserID(id) {
  const character = await characterModel.findAll({
    where: {
      user_id: id,
    },
  });
  return character;
}

async function Create(data) {
  const result = await characterModel.create(data);
  return result;
}

async function Edit(id, data) {
  const note = await characterModel.findByPk(id);
  const result = await note.update(data, {
    where: {
      character_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await characterModel.destroy({
    where: {
      character_id: id,
    },
  });
  return result;
}

export default {
  GetByID,
  GetAll,
  GetByUserID,
  Create,
  Edit,
  Remove,
};
