import { verifyToken } from "../utils/token.js";
import characterModel from "../models/character/characterModel.js";

function isLoggedInSession(req, res, next) {
  const user = req.session.user;
  if (!user) {
    return res.redirect("/login?error=You+are+not+logged+in");
  }
  next();
}

function isLoggedInAPI(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  let token = authorization.split(" ").pop();
  const result = verifyToken(token);
  if (result) {
    req.user = {
      user_id: result.user_id,
      role: result.role,
    };
    next();
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
}

function isMaster(req, res, next) {
  if (req.user.role !== "master") {
    return res.status(403).json({ error: "Forbidden: Only masters allowed" });
  }
  next();
}

async function isOwnerOfCharacter(req, res, next) {
  try {
    const characterId = req.params.id;
    const loggedUserId = req.user.user_id;
    const character = await characterModel.findByPk(characterId);
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    if (character.user_id !== loggedUserId && req.user.role !== "master") {
      return res
        .status(403)
        .json({ error: "Forbidden: You don't own this character" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}

function isOwner(model, foreignKey = "character_id") {
  return async (req, res, next) => {
    try {
      const id = req.params.id;
      const loggedUserId = req.user.user_id;
      const resource = await model.findByPk(id);
      if (!resource) {
        return res.status(404).json({ error: "Not found" });
      }
      const characterId = resource[foreignKey];
      const character = await characterModel.findByPk(characterId);
      if (!character) {
        return res.status(404).json({ error: "Character not found" });
      }
      if (character.user_id !== loggedUserId && req.user.role !== "master") {
        return res
          .status(403)
          .json({ error: "Forbidden: You don't own this character" });
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  };
}

function isOwnerUser(req, res, next) {
  const requestedUserId = parseInt(req.params.id);
  const loggedUserId = req.user.user_id;

  if (requestedUserId !== loggedUserId && req.user.role !== "master") {
    return res
      .status(403)
      .json({ error: "Forbidden: You don't have access to this user" });
  }
  next();
}

export {
  isLoggedInSession,
  isLoggedInAPI,
  isMaster,
  isOwnerOfCharacter,
  isOwner,
  isOwnerUser,
};
