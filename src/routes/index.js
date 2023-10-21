const { check, postMessage, insertUsers } = require("./crudRoutes");

function getRoutes(app) {
  app.get("/check/:params", check);
  app.post("/post", postMessage);
  app.post("/users/create",insertUser)
}

exports.getRoutes = getRoutes;
