process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err.name, err.message);
  console.log(err.stack);
  process.exit(1);
});

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const app = require("./src/app");
const connectDB = require("./src/config/db");
const config = require("./src/config/config");

const startServer = async () => {
  await connectDB(); // ensure DB is connected first

  const server = app.listen(config.PORT, () =>
    console.log(`Server running on port: ${config.PORT}`)
  );

  process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! Shutting down...");
    console.log(err.name, err.message);
    server.close(() => process.exit(1));
  });

  process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down gracefully.");
    server.close(() => console.log("Process terminated!"));
  });
};

startServer();
