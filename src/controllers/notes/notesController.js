  import notesModel from "../../models/notesModel.js";

  async function GetByID(id) {
    const notes = await notesModel.findByPk(id, {
      attributes: {
        exclude: ["notes_id"],
      },
    });
    return notes;
  }

  async function GetAll() {
    const notes = await notesModel.findAll();
    return notes;
  }

  async function GetByUserID(id) {
    const notes = await notesModel.findAll({
      where: {
        user_id: id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    });
    return notes;
  }

  async function Create(data) {
    const result = await notesModel.create(data);
    return result;
  }

  async function Edit(id, data) {
    const note = await notesModel.findByPk(id);
    if (!note) {
      throw new Error("Not found");
    }
    const result = await note.update(data);
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
    GetByUserID,
    Create,
    Edit,
    Remove,
  };
