import "dotenv/config";
import express from "express";
import routes from "./routes";
import { userController } from "./api/controllers";
import User from "./api/models/user.model";
import Role from "./api/models/role.model";
import knexConfig from "../knexfile";

const app = express();

const APP_PORT =
  (process.env.NODE_ENV === "test"
    ? process.env.TEST_APP_PORT
    : process.env.APP_PORT) ||
  process.env.PORT ||
  "3000";

const APP_HOST = process.env.APP_HOST || "0.0.0.0";

app.set("port", APP_PORT);
app.set("host", APP_HOST);

app.use(express.json());

app.use("/api", routes);

console.log(process.env.DB_NAME);
console.log(process.env.DB_HOST);
console.log("User Model:", User);
console.log("Role Model:", Role);
console.log("Knex Instance:", knexConfig);

app.listen(app.get("port"), app.get("host"), () => {
  console.log(
    `Server started at http://${app.get("host")}:${app.get("port")}/api`
  );
});

export default app;
