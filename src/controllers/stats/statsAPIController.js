import statsController from "./statsController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const stats = await statsController.GetByID(id);
    res.json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getAll(req, res) {
  try {
    const stats = await statsController.GetAll();
    res.json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getByCharacterID(req, res) {
  try {
    const characterId = req.params.id;
    const stats = await statsController.GetByCharacterID(characterId);
    res.json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    const response = await statsController.Create(req.body);
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
    const id = req.params.id;
    const response = await statsController.Edit(id, req.body);
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
    const id = req.params.id;
    const response = await statsController.Remove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAll,
  getByID,
  getByCharacterID,
  create,
  edit,
  remove,
};
