import itemController from "./itemController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const item = await itemController.GetByID(id);
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getAll(req, res) {
  try {
    const item = await itemController.GetAll();
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

async function getByCharacterID(req, res) {
  try {
    const characterId = req.params.id;
    const items = await itemController.GetByCharacterID(characterId);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    const response = await itemController.Create(req.body);
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
    const response = await itemController.Edit(id, req.body);
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
    const response = await itemController.Remove(id);
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
