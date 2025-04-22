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

export default {
  getAll,
  getByID,
  getByCharacterID,
};
