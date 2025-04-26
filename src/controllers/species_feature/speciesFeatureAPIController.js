import speciesFeatureController from "./speciesFeatureController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const speciesFeature = await speciesFeatureController.GetByID(id);
    res.json(speciesFeature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAll(req, res) {
  try {
    const speciesFeature = await speciesFeatureController.GetAll();
    res.json(speciesFeature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getBySpeciesID(req, res) {
  try {
    const speciesId = req.params.id;
    const speciesFeature = await speciesFeatureController.GetBySpeciesID(speciesId);
    res.json(speciesFeature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    const response = await speciesFeatureController.Create(req.body);
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
    const response = await speciesFeatureController.Edit(id, req.body);
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
    const response = await speciesFeatureController.Remove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAll,
  getByID,
  getBySpeciesID,
  create,
  edit,
  remove,
};
