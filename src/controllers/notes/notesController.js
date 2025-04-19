import notesModel from "../../models/notesModel.js";

async function GetByID(id) {
  const notes = await notesModel.findByPk(id);
  return notes;
}

async function GetAll() {
  const notes = await notesModel.findAll();
  return notes;
}

async function Create(data) {
  const result = await notesModel.create(data);
  return result;
}

async function Edit(id, data) {
  const note = await notesModel.findByPk(id);
  const result = await note.update(data, {
    where: {
      notes_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await notesModel.destroy({
    where: {
      notes_id: id,
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
