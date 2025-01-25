import { getAllRecipes, getRecipeById } from './dummyJson-api';
import { openModal } from './modal';
import { renderRecipeList, renderRecipesInModal } from './render-functions';

export async function onDOMContentLoaded() {
  try {
    const { recipes } = await getAllRecipes();
    renderRecipeList(recipes);
    console.log(recipes);
  } catch (error) {
    console.log(error);
  }
}

export async function onRecipeListItemClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  try {
    const recipeID = evt.target.closest('.recipeCard').dataset.id;

    const recipe = await getRecipeById(recipeID);
    renderRecipesInModal(recipe);
    openModal();
  } catch (error) {
    console.log(error);
  }
}
