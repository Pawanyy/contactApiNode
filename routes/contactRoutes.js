import express from "express";

export const router = express.Router();

router.route("/").get((req, res) => {
  return res.status(200).json({ message: "All Contacts" });
});

router.route("/:id").get((req, res) => {
  return res
    .status(200)
    .json({ message: "Contact with id : " + req.params.id });
});

router.route("/").post((req, res) => {
  return res.status(200).json({ message: "create" });
});

router.route("/:id").put((req, res) => {
  return res
    .status(200)
    .json({ message: "Update Contact with id : " + req.params.id });
});

router.route("/:id").delete((req, res) => {
  return res
    .status(200)
    .json({ message: "Delete Contact  with id : " + req.params.id });
});
