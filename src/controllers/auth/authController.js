import User from "../../models/userModel.js";
import { hash, compare } from "../../utils/bcrypt.js";
import {
  UserNameNotProvided,
  UserLastNameNotProvided,
  UserNicknameNotProvided,
  UserEmailNotProvided,
  UserPasswordNotProvided,
  UserRoleIncorrect,
  UserEmailAlreadyExists,
  UserInvalidCredentials,
} from "../../utils/errors.js";

async function register(userData) {
  console.log(userData);
  if (!userData.first_name) {
    throw new UserNameNotProvided();
  }
  if (!userData.last_name) {
    throw new UserLastNameNotProvided();
  }
  if (!userData.nickname) {
    throw new UserNicknameNotProvided();
  }
  if (!userData.email) {
    throw new UserEmailNotProvided();
  }
  if (!userData.password) {
    throw new UserPasswordNotProvided();
  }
  userData.created_at = new Date();
  userData.role = userData.role ? userData.role.toLowerCase() : "player";
  const roles = ["player", "master"];
  if (!roles.includes(userData.role)) {
    throw new UserRoleIncorrect();
  }
  const oldUser = await User.findOne({
    where: {
      email: userData.email,
    },
  });
  if (oldUser) {
    throw new UserEmailAlreadyExists();
  }
  const hashedPassword = await hash(userData.password);
  userData.password = hashedPassword;
  const result = await User.create(userData);
  return result;
}

async function login(email, password) {
  if (!email) {
    throw new UserEmailNotProvided();
  }
  if (!password) {
    throw new UserPasswordNotProvided();
  }
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    throw new UserInvalidCredentials();
  }
  const isSamePassword = await compare(password, user.password);
  if (isSamePassword) {
    return user;
  } else {
    throw new UserInvalidCredentials();
  }
}

export default {
  register,
  login,
};
