import{a as n,S as c,N as d,P as l}from"./assets/vendor-CoeS5t_-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();n.defaults.baseURL="https://wedding-photographer.b.goit.study/api";async function p(s=10,r=1){return(await n.get("/feedbacks",{params:{limit:s,page:r}})).data}const f=document.querySelector(".feedbacks-list");async function u(){try{const s=await p();f.innerHTML=s.feedbacks.map(({_id:r,name:i,descr:o})=>`
        <li class="feedbacks-list-card swiper-slide" data-id="${r}">
          <p class="feedbacks-card-description">
            ${o}
          </p>

          <p class="feedbacks-card-author">
            ${i}
          </p>
        </li>
      `).join("")}catch(s){console.error("Failed to fetch feedbacks:",s)}}function b(){new c(".swiper",{modules:[d,l],slidesPerView:1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}u();b();
//# sourceMappingURL=index.js.map
