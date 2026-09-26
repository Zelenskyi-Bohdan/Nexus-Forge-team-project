import{a as p,S as w,N as h,P as m,A as y,b}from"./assets/vendor-xIPoRiw5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();p.defaults.baseURL="https://wedding-photographer.b.goit.study/api";async function L(e=10,t=1){return(await p.get("/feedbacks",{params:{limit:e,page:t}})).data}const g="https://wedding-photographer.b.goit.study/api";async function P(){const e=await fetch(`${g}/categories`);if(!e.ok)throw new Error(`Помилка HTTP: ${e.status}`);return await e.json()}async function k(e,t=1,o=9){const n=e!=="all"?`&categoryId=${e}`:"",s=`${g}/wedding-photos?page=${t}&limit=${o}${n}`,r=await fetch(s);if(!r.ok)throw new Error(`Помилка HTTP: ${r.status}`);return await r.json()}const i={filtersList:document.querySelector(".portfolio-filters"),galleryList:document.querySelector(".portfolio-list"),loader:document.getElementById("portfolio-loader"),showMoreBtn:document.getElementById("show-more-btn")};let d=1,l="all",a=9;async function v(){const e=await P();e&&e.length>0&&M(e),i.filtersList.addEventListener("click",$),i.showMoreBtn.addEventListener("click",B),await f()}async function $(e){var n;const t=e.target.closest(".filter-btn");if(!t)return;const o=t.dataset.category;o!==l&&((n=document.querySelector(".filter-btn.active"))==null||n.classList.remove("active"),t.classList.add("active"),l=o,d=1,a=9,i.galleryList.innerHTML="",await f())}async function B(){d+=1,a=3,await f()}async function f(){C(),u();try{const e=await k(l,d,a),t=e.weddingPhotos||[],o=e.totalItems||0;t.length>0&&S(t),t.length===a?A():u()}catch(e){console.error("Помилка завантаження фотографій:",e)}finally{E()}}function M(e){const t=e.map(({_id:o,category:n})=>`
      <li class="filter-item">        
        <button class="filter-btn" type="button" data-category="${o}">
          ${n}
        </button>
      </li>
    `).join("");i.filtersList.insertAdjacentHTML("beforeend",t)}function S(e){const t=e.map(o=>`
      <li class="portfolio-item">
        <img src="${o.img}" alt="${o.title}" loading="lazy">
      </li>
    `).join("");i.galleryList.insertAdjacentHTML("beforeend",t)}function C(){i.loader.classList.remove("is-hidden")}function E(){i.loader.classList.add("is-hidden")}function A(){i.showMoreBtn.classList.remove("is-hidden")}function u(){i.showMoreBtn.classList.add("is-hidden")}v();const I=document.querySelector(".feedbacks-list");async function T(){try{const e=await L();I.innerHTML=e.feedbacks.map(({_id:t,name:o,descr:n})=>`
        <li class="feedbacks-list-card swiper-slide" data-id="${t}">
          <p class="feedbacks-card-description">
            ${n}
          </p>

          <p class="feedbacks-card-author">
            ${o}
          </p>
        </li>
      `).join("")}catch(e){console.error("Failed to fetch feedbacks:",e)}}function j(){new w(".swiper",{modules:[h,m,y],slidesPerView:1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}T();j();new b(".answers-accordion",{elementClass:"answers-list-item",triggerClass:"answers-toggle",panelClass:"answer-panel",activeClass:"is-open",duration:400,showMultiple:!1,openOnInit:[],ariaEnabled:!0});
//# sourceMappingURL=index.js.map
