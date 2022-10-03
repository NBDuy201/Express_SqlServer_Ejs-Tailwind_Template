import indexRouter from "../routes/index.route.js";

export default function (app) {
  app.use("/", indexRouter);
}
