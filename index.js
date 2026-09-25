import{a as p,S as w,N as h,P as m,A as y,b}from"./assets/vendor-xIPoRiw5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();p.defaults.baseURL="https://wedding-photographer.b.goit.study/api";async function L(e=10,t=1){return(await p.get("/feedbacks",{params:{limit:e,page:t}})).data}const g="https://wedding-photographer.b.goit.study/api";async function v(){const e=await fetch(`${g}/categories`);if(!e.ok)throw new Error(`Помилка HTTP: ${e.status}`);return await e.json()}async function P(e,t=1,r=9){const n=e!=="all"?`&categoryId=${e}`:"",s=`${g}/wedding-photos?page=${t}&limit=${r}${n}`,o=await fetch(s);if(!o.ok)throw new Error(`Помилка HTTP: ${o.status}`);return await o.json()}const i={filtersList:document.querySelector(".portfolio-filters"),galleryList:document.querySelector(".portfolio-list"),loader:document.getElementById("portfolio-loader"),showMoreBtn:document.getElementById("show-more-btn")};let d=1,l="all",a=9;async function k(){const e=await v();e&&e.length>0&&B(e),i.filtersList.addEventListener("click",$),i.showMoreBtn.addEventListener("click",S),await u()}async function $(e){var n;const t=e.target.closest(".filter-btn");if(!t)return;const r=t.dataset.category;r!==l&&((n=document.querySelector(".filter-btn.active"))==null||n.classList.remove("active"),t.classList.add("active"),l=r,d=1,a=9,i.galleryList.innerHTML="",await u())}async function S(){d+=1,a=3,await u()}async function u(){C(),f();try{const e=await P(l,d,a),t=e.weddingPhotos||[],r=e.totalItems||0;t.length>0&&M(t),t.length===a?A():f()}catch(e){console.error("Помилка завантаження фотографій:",e)}finally{E()}}function B(e){const t=e.map(({_id:r,category:n})=>`
      <li class="filter-item">        
        <button class="filter-btn" type="button" data-category="${r}">
          ${n}
        </button>
      </li>
    `).join("");i.filtersList.insertAdjacentHTML("beforeend",t)}function M(e){const t=e.map(r=>`
      <li class="portfolio-item">
        <img src="${r.img}" alt="${r.title}" loading="lazy">
      </li>
    `).join("");i.galleryList.insertAdjacentHTML("beforeend",t)}function C(){i.loader.classList.remove("is-hidden")}function E(){i.loader.classList.add("is-hidden")}function A(){i.showMoreBtn.classList.remove("is-hidden")}function f(){i.showMoreBtn.classList.add("is-hidden")}k();const I=document.querySelector(".feedbacks-list");async function O(){try{const e=await L();I.innerHTML=e.feedbacks.map(({_id:t,name:r,descr:n})=>`
        <li class="feedbacks-list-card swiper-slide" data-id="${t}">
          <p class="feedbacks-card-description">
            ${n}
          </p>

          <p class="feedbacks-card-author">
            ${r}
          </p>
        </li>
      `).join("")}catch(e){console.error("Failed to fetch feedbacks:",e)}}function T(){new w(".swiper",{modules:[h,m,y],slidesPerView:1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}O();T();new b(".answers-accordion",{elementClass:"answers-list-item",triggerClass:"answers-toggle",panelClass:"answer-panel",activeClass:"is-open",duration:400,showMultiple:!0,openOnInit:[],ariaEnabled:!0,onOpen:e=>{var t;(t=e.querySelector("use"))==null||t.setAttribute("href","../img/sprite.svg#icon-close")},onClose:e=>{var t;(t=e.querySelector("use"))==null||t.setAttribute("href","../img/sprite.svg#icon-add")}});
//# sourceMappingURL=index.js.map
