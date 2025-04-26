import classFeatureController from "./classFeatureController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const classFeature = await classFeatureController.GetByID(id);
    res.json(classFeature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAll(req, res) {
  try {
    const classFeature = await classFeatureController.GetAll();
    res.json(classFeature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getByClassID(req, res) {
  try {
    const classId = req.params.id;
    const classFeature = await classFeatureController.GetByClassID(classId);
    res.json(classFeature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    const response = await classFeatureController.Create(req.body);
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
    const response = await classFeatureController.Edit(id, req.body);
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
    const response = await classFeatureController.Remove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAll,
  getByID,
  getByClassID,
  create,
  edit,
  remove,
};
