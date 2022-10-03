import express from "express";
import expressLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";
import { dirname } from "path";
import routeMdw from "./middlewares/routes.mdw.js";
import config from "./utils/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));

routeMdw(app);

app.listen(config.port || 3000, () => {
  console.log(
    `Example app listening on http://localhost:${config.port || 3000}`
  );
});
