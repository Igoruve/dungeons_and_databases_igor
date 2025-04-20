import { UserNameNotProvided, UserRoleIncorrect } from "../../utils/errors.js";
import userModel from "../../models/userModel.js";

async function GetByID(id) {
  const user = await userModel.findByPk(id);
  return user;
}

async function GetAll() {
  const user = await userModel.findAll();
  return user;
}

async function Create(data) {
  const result = await userModel.create(data);
  return result;
}

async function Edit(id, data) {
  const userRole = ["customer", "seller"];
  if (data.role) {
    data.role = data.role.toLowerCase();
    if (!userRole.includes(data.role)) {
      throw new UserRoleIncorrect();
    }
  }
  const result = await userModel.update(data, {
    where: {
      user_id: id,
    },
  });
  const updatedUser = await userModel.findByPk(id);
  return updatedUser;
}

async function Remove(id) {
  const result = await userModel.destroy({
    where: {
      user_id: id,
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
