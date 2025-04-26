class UserNameNotProvided extends Error {
  constructor() {
    super("User name not provided");
    this.statusCode = 400;
  }
}

class UserLastNameNotProvided extends Error {
  constructor() {
    super("User last name not provided");
    this.statusCode = 400;
  }
}

class UserNicknameNotProvided extends Error {
  constructor() {
    super("User nickname not provided");
    this.statusCode = 400;
  }
}

class UserEmailNotProvided extends Error {
  constructor() {
    super("User email not provided");
    this.statusCode = 400;
  }
}

class UserPasswordNotProvided extends Error {
  constructor() {
    super("User password not provided");
    this.statusCode = 400;
  }
}

class UserRoleIncorrect extends Error {
  constructor() {
    super("User role is not correct, it must be 'customer' or 'seller'");
    this.statusCode = 400;
  }
}

class UserEmailAlreadyExists extends Error {
  constructor() {
    super("User email already exists");
    this.statusCode = 400;
  }
}

class UserInvalidCredentials extends Error {
  constructor() {
    super("Invalid credentials");
    this.statusCode = 401;
  }
}

class NotLogIn extends Error {
  constructor() {
    super("You have to be logged to enter to your basket");
    this.statusCode = 401;
  }
}

export {
  UserNameNotProvided,
  UserLastNameNotProvided,
  UserNicknameNotProvided,
  UserEmailNotProvided,
  UserPasswordNotProvided,
  UserRoleIncorrect,
  UserEmailAlreadyExists,
  UserInvalidCredentials,
  NotLogIn,
};
