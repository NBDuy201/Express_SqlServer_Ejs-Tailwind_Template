import express from "express";
import { select, modify } from "../utils/database.js";

const router = express.Router();

router.get("/", async (req, res) => {
  /*Select */
  // const result = await select("Select * From Boo");

  /*Insert, update, delete */
  // const result = await modify(
  //   "INSERT INTO Boo (BookName, Price, CateID1) VALUES ('Test Book Insert', 10, 2)"
  // );
  // const result = await modify("Delete from Book Where BookID = 5");
  // if (result) {
  //   console.log("Modify success");
  // } else {
  //   console.log("Modify failed");
  // }
  // console.log(
  //   "🚀 ~ file: index.route.js ~ line 8 ~ router.get ~ result",
  //   result
  // );

  // Render in the view folder
  res.render("index");
});

export default router;
