import { NextFunction, Request, Response } from "express";
import passport from "passport";

const authorize = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};

export default authorize;
