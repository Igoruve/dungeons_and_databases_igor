import speciesController from "./speciesController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const species = await speciesController.GetByID(id);
    res.json(species);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAll(req, res) {
  try {
    const species = await speciesController.GetAll();
    res.json(species);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getByCharacterID(req, res) {
  try {
    const characterId = req.params.id;
    const species = await speciesController.GetByCharacterID(characterId);
    res.json(species);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
async function create(req, res) {
  try {
    const response = await speciesController.Create(req.body);
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
    const response = await speciesController.Edit(id, req.body);
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
    const response = await speciesController.Remove(id);
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
