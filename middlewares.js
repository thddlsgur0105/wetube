import routes from "./routes";

export const localsMiddleware = function(req, res, next) {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();
};