import{a}from"./assets/vendor-N5iQpiFS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();a.defaults.baseURL="https://dummyjson.com/recipes";async function f(){const{data:t}=await a();return t}async function g(t){const{data:s}=await a(`/${t}`);return s}document.getElementById("open-modal");const y=document.getElementById("close-modal"),d=document.getElementById("modal"),u=document.getElementById("modal-overlay");function L(){d.classList.add("active"),u.classList.add("active")}function $(){d.classList.remove("active"),u.classList.remove("active")}y.addEventListener("click",$);const l={recipeList:document.querySelector(".recipe-list"),modalCard:document.querySelector(".modal-card")};function h(t){const s=t.map(({image:o,name:c,cuisine:e,difficulty:i,id:n})=>`<li class="recipeCard" data-id="${n}">
   <img class="gallery-img" src="${o}" alt="${c}"/>
   <p class="name-text">Name:${c}</p>
   <p class="cuisine-text">Cuisine:${e}</p>
   <p class="difficultiy-text">Difficultiy:${i}</p>
  </li>`).join("");l.recipeList.insertAdjacentHTML("beforeend",s)}function v({name:t,image:s,tags:o,cuisine:c,difficulty:e,ingredients:i,instructions:n,rating:m}){const p=`
              <img class="modal-img" src="${s}" alt="${o}" width="360" height="200" title="" /></a>
            <div class="modal-info">
              <h3 class="modal-name">${t}</h3>
              <p class="modal-cuisine">Cuisine: ${c}</p>
              <p class="modal-text">Difficulty: ${e}</p>
              <p class="modal-ingredients">Ingredients: </p>
                <ul class="ingredients-list">${i.map(r=>`<li>${r}</li>`).join("")}</ul>
              <p class="modal-instruction">Instruction: </p>
                <ul class="instruction-list">${n.map(r=>`<li>${r}</li>`).join("")}</ul>
              <p class="modal-rating">${m}</p>
            </div>
        `;l.modalCard.innerHTML=p}async function I(){try{const{recipes:t}=await f();h(t),console.log(t)}catch(t){console.log(t)}}async function C(t){if(t.target!==t.currentTarget)try{const s=t.target.closest(".recipeCard").dataset.id,o=await g(s);v(o),L()}catch(s){console.log(s)}}document.addEventListener("DOMContentLoaded",I);l.recipeList.addEventListener("click",C);
//# sourceMappingURL=index.js.map
