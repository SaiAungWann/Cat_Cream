const express = require("express");
const RecipesController = require("../controllers/recipesController");
const { body } = require("express-validator");
const handleErrorMessage = require("../middleWare/handleErrorMessage");

const router = express.Router();

// Route to get all recipes
router.get("", RecipesController.index);

// Route to create a new recipe
router.post(
  "",
  [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("ingredients").notEmpty().isArray({ min: 1 }),
  ],
  handleErrorMessage,
  RecipesController.store
);
// Route to get a single recipe by ID
router.get("/:id", RecipesController.show);

// Route to update an existing recipe
router.put(
  "/:id",
  [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("ingredients").notEmpty().isArray({ min: 1 }),
  ],
  handleErrorMessage,
  RecipesController.update
);

// Route to delete a recipe
router.delete("/:id", RecipesController.delete);

module.exports = router;
