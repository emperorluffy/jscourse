import * as model from './model.js';
import recipe_view from './views/recipe_view.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

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
    recipe_view.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    await model.loadSearchResults(query);
    console.log(model.state.search.results);

    resultsView.render(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};
// controlSearchResults();

const init = function () {
  recipe_view.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
