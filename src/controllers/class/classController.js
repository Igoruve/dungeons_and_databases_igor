import { Class } from "../../models/index.js";

async function GetByID(id) {
  const clas = await Class.findByPk(id, {
    attributes: {
      exclude: ["class_id"],
    },
  });
  return clas;
}

async function GetAll() {
  const clas = await Class.findAll();
  return clas;
}

async function Create(data) {
  const result = await Class.create(data);
  return result;
}

async function Edit(id, data) {
  const clas = await Class.findByPk(id);
  const result = await clas.update(data, {
    where: {
      class_id: id,
    },
  });
  return result;
}

async function Remove(id) {
  const result = await Class.destroy({
    where: {
      class_id: id,
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
