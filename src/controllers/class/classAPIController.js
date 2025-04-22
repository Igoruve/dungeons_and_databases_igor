import classController from "./classController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const clas = await classController.GetByID(id);
    res.json(clas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAll(req, res) {
  try {
    const clas = await classController.GetAll();
    res.json(clas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

export default {
  getAll,
  getByID,
};
