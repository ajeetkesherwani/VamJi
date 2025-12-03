const express = require("express");

const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");

exports.appRoutes = (app) => {
  app.use("/public", express.static("public"));
  app.use("/api/admin", adminRoutes);
  app.use("/api/user", userRoutes);
};
