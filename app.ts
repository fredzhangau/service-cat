import config from "config";
import express from "express";
import connect from "./src/db/connect";
import routes from "./src/routes";
import { deserializeUser } from "./src/middleware";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(deserializeUser);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}`);
  connect();

  routes(app);
});
