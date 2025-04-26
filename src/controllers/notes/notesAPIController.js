import notesController from "./notesController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const notes = await notesController.GetByID(id);
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getAll(req, res) {
  try {
    const notes = await notesController.GetAll();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getByUserID(req, res) {
  try {
    const userId = req.params.id;
    const notes = await notesController.GetByUserID(userId);
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    const noteData = { ...req.body };
    noteData.user_id = req.user.user_id;
    const response = await notesController.Create(noteData);
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function edit(req, res) {
  try {
    const noteId = req.params.id;
    const userId = req.user.user_id;
    const existingNote = await notesController.GetByID(noteId);
    if (!existingNote) {
      return res.status(404).json({ error: "Not found" });
    }
    if (existingNote.user_id !== userId) {
      return res.status(403).json({
        error: "Unauthorized",
      });
    }
    const updateData = { ...req.body };
    delete updateData.user_id;
    const response = await notesController.Edit(noteId, updateData);
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function remove(req, res) {
  try {
    const noteId = req.params.id;
    const userId = req.user.user_id;
    const existingNote = await notesController.GetByID(noteId);
    if (!existingNote) {
      return res.status(404).json({ error: "Not found" });
    }
    if (existingNote.user_id !== userId) {
      return res.status(403).json({
        error: "Unauthorized",
      });
    }
    const response = await notesController.Remove(noteId);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAll,
  getByID,
  getByUserID,
  create,
  edit,
  remove,
};
