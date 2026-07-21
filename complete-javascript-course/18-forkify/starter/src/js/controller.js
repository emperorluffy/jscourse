import * as model from './model.js';
import recipe_view from './views/recipe_view.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
const recipeContainer = document.querySelector('.recipe');

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // Render the spinner
    recipe_view.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 2) Rendering recipe
    recipe_view.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipe_view.addHandlerRender(controlRecipes);
};

init();
