import { onDOMContentLoaded, onRecipeListItemClick } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

refs.recipeList.addEventListener('click', onRecipeListItemClick);
