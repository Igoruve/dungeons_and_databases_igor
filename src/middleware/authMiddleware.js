import { verifyToken } from "../utils/token.js";

function isLoggedInSession(req, res, next) {
  const user = req.session.user;
  if (!user) {
    return res.redirect("/login?error=You+are+not+logged+in");
  }
  next();
}

function isLoggedInAPI(req, res, next) {
  const authorization = req.headers.authorization;
  console.log("authorization", authorization);
  if (!authorization) {
    res.status(401).json({ error: "Unauthorized" });
  }
  let token = authorization.split(" ");
  token = token.pop();
  const result = verifyToken(token);
  console.log("token verified", result);
  if (result) {
    req.user = {
      user_id: result.user_id,
      role: result.role,
    };
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
}

function isMaster(req, res, next) {
  if (req.user.role !== "master") {
    return res.status(403).json({ error: "Forbidden: Only masters allowed" });
  }
  next();
}

function isSameUser(req, res, next) {
  if (parseInt(req.params.id) !== req.user.user_id) {
    return res.status(403).json({ error: "Forbidden: You can only edit yourself" });
  }
  next();
}


export { isLoggedInSession, isLoggedInAPI, isMaster, isSameUser };
