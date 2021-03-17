import express from "express";
import { getJoin, postJoin, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

// 상수에 메소드를 넣어 준다? 이해 잘 안감..
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;