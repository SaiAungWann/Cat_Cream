const Recipe = require("../model/Recipe");
const mongoose = require("mongoose");

const RecipesController = {
  index: async (req, res) => {
    // to get all recipes
    try {
      const recipe = await Recipe.find();
      return res.json({ recipe });
    } catch (error) {
      return res.status(404).json({ error: "404 Items Not Found" });
    }
  },
  store: async (req, res) => {
    // to create a new recipe
    const { title, description, ingredients } = req.body;

    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
    });
    return res.json({ create: "Recipes Created!" });
  },
  show: async (req, res) => {
    // to get a single recipe by ID
    try {
      let id = req.params.id;

      // check if recipe type is correct

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Not a valid id" });
      }

      let recipe = await Recipe.findById(id);

      if (!recipe) {
        return res.status(404).json({ message: "Recipe Not found" });
      }
      return res.json(recipe);
    } catch (error) {
      return res.status(500).json({ message: "Internet Server Error" });
    }
  },
  update: async (req, res) => {
    // to update an existing recipe
    try {
      let id = req.params.id;

      // check if recipe type is correct

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Not a valid id" });
      }

      let recipe = await Recipe.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true },
        { runValidators: true }
      );

      // delete image
      // await removeFile(__dirname + "/../public" + recipe.recipePhoto);

      if (!recipe) {
        return res.status(404).json({ message: "Recipe Not found" });
      }
      return res.json(recipe, { message: "Recipe Updated!" });
    } catch (error) {
      return res.status(404).json({ message: "Recipe Not found" });
    }
  },

  delete: async (req, res) => {
    // to delete a recipe
    try {
      let id = req.params.id;

      // check if recipe type is correct

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Not a valid id" });
      }

      let recipe = await Recipe.findByIdAndDelete(id);

      // delete image
      // await removeFile(__dirname + "/../public" + recipe.recipePhoto);

      if (!recipe) {
        return res.status(404).json({ message: "Recipe Not found" });
      }
      return res.json(recipe, { message: "Recipe Deleted!" });
    } catch (error) {
      return res.status(404).json({ message: "Recipe Not found" });
    }
  },
};

module.exports = RecipesController;
