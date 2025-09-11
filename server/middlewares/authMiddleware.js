import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(201).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(JWT_SECRET, token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(201).json({ message: "Access denied" });
  }
};
