import { refs } from './refs';

export function renderRecipeList(resipes) {
  const markup = resipes
    .map(({ image, name, cuisine, difficulty, id }) => {
      return `<li class="recipeCard" data-id="${id}">
   <img class="gallery-img" src="${image}" alt="${name}"/>
   <p class="name-text">Name:${name}</p>
   <p class="cuisine-text">Cuisine:${cuisine}</p>
   <p class="difficultiy-text">Difficultiy:${difficulty}</p>
  </li>`;
    })
    .join('');

  refs.recipeList.insertAdjacentHTML('beforeend', markup);
}
export function renderRecipesInModal({
  name,
  image,
  tags,
  cuisine,
  difficulty,
  ingredients,
  instructions,
  rating,
}) {
  const recipesCard = `
              <img class="modal-img" src="${image}" alt="${tags}" width="360" height="200" title="" /></a>
            <div class="modal-info">
              <h3 class="modal-name">${name}</h3>
              <p class="modal-cuisine">Cuisine: ${cuisine}</p>
              <p class="modal-text">Difficulty: ${difficulty}</p>
              <p class="modal-ingredients">Ingredients: </p>
                <ul class="ingredients-list">${ingredients
                  .map(ingredient => `<li>${ingredient}</li>`)
                  .join('')}</ul>
              <p class="modal-instruction">Instruction: </p>
                <ul class="instruction-list">${instructions
                  .map(instruction => `<li>${instruction}</li>`)
                  .join('')}</ul>
              <p class="modal-rating">${rating}</p>
            </div>
        `;

  refs.modalCard.innerHTML = recipesCard;
}
