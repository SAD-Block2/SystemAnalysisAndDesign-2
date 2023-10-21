const { check, postMessage, createUser } = require("./crudRoutes");

function getRoutes(app) {
  app.get("/check/:params", check);
  app.post("/post/message", postMessage);
  app.post('/create-user', createUser)
}

exports.getRoutes = getRoutes;
