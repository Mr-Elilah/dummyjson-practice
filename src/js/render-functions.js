export function renderRecipeList(resipes) {
  const markup = resipes.map(({ image, name, cuisine, difficulty }) => {
    `<li class="recipeCard">
   <img class="gallery-img" src="${image}"/>
   <p class="name-text">Name:${name}</p>
   <p class="cuisine-text">Cuisine:${cuisine}</p>
   <p class="difficultiy-text">Difficultiy:${difficulty}</p>
  </li>`;
  });
}
