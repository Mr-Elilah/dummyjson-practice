import{a as c}from"./assets/vendor-N5iQpiFS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();c.defaults.baseURL="https://dummyjson.com/recipes";async function a(s){const{data:o}=await c(`/${s}`);return o}a(1);const u=document.getElementById("open-modal"),m=document.getElementById("close-modal"),i=document.getElementById("modal"),d=document.getElementById("modal-overlay");function f(){i.classList.add("active"),d.classList.add("active")}function p(){i.classList.remove("active"),d.classList.remove("active")}u.addEventListener("click",f);m.addEventListener("click",p);
//# sourceMappingURL=index.js.map