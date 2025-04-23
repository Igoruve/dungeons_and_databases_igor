import { UserNameNotProvided, UserRoleIncorrect } from "../../utils/errors.js";
import { User, Notes } from "../../models/index.js";
import Character from "../../models/characterModel.js";

async function GetByID(id) {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ["user_id", "password"],
    },
    include: [
      {
        model: Notes,
        as: "notes",
        attributes: { exclude: ["notes_id", "user_id", "created_at"] },
      },
    ],
  });
  return user;
}

async function GetAll() {
  const user = await User.findAll({
    attributes: {
      exclude: ["password"],
    },
    include: [
      {
        model: Notes,
        as: "notes",
        attributes: { exclude: ["notes_id", "user_id", "created_at"] },
      },
    ],
  });
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
