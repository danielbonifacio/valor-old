const router = require('express').Router();
const fixMiddlewares = middlewares => middlewares || [];

const crash = message => {
  throw new Error(message + '\n\n');
};

class Route {
  constructor(routes) {
    this.routes = routes;
    this.router = router;
  };

  register() {
    this.routes.map(route => {
      !('controller' in route) && crash(`Controller not setted in route '${route.name || route.path}'`);
      const middlewares = fixMiddlewares(route.middlewares);
      
      if ('children' in route) {
        const base_path = route.path;
        route.children.map(child => {
          this.router[child.method](base_path + child.path, fixMiddlewares(child.middlewares), child.controller);
        });
      }

      this.router[route.method](route.path, ...middlewares, route.controller);
    });
    return this.router;
  };
};

module.exports = Route;
