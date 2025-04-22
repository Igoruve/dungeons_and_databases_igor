import { UserNameNotProvided, UserRoleIncorrect } from "../../utils/errors.js";
import { User, Notes } from "../../models/index.js";

async function GetByID(id) {
  const user = await User.findByPk(id)
  return user;
}

async function GetAll() {
  const user = await User.findAll()
  return user;
}

async function Create(data) {
  const result = await User.create(data);
  return result;
}

async function Edit(id, data) {
  const userRole = ["player", "master"];
  if (data.role) {
    data.role = data.role.toLowerCase();
    if (!userRole.includes(data.role)) {
      throw new UserRoleIncorrect();
    }
  }
  const result = await User.update(data, {
    where: {
      user_id: id,
    },
  });
  const updatedUser = await User.findByPk(id);
  return updatedUser;
}

async function Remove(id) {
  const result = await User.destroy({
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
