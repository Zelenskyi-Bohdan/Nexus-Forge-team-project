import{a as p,S as h,N as w,P as m}from"./assets/vendor-C4TGUJsu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();p.defaults.baseURL="https://wedding-photographer.b.goit.study/api";async function y(e=10,t=1){return(await p.get("/feedbacks",{params:{limit:e,page:t}})).data}const g="https://wedding-photographer.b.goit.study/api";async function b(){const e=await fetch(`${g}/categories`);if(!e.ok)throw new Error(`Помилка HTTP: ${e.status}`);return await e.json()}async function L(e,t=1,r=9){const n=e!=="all"?`&categoryId=${e}`:"",o=`${g}/wedding-photos?page=${t}&limit=${r}${n}`,s=await fetch(o);if(!s.ok)throw new Error(`Помилка HTTP: ${s.status}`);return await s.json()}const i={filtersList:document.querySelector(".portfolio-filters"),galleryList:document.querySelector(".portfolio-list"),loader:document.getElementById("portfolio-loader"),showMoreBtn:document.getElementById("show-more-btn")};let d=1,l="all",a=9;async function P(){const e=await b();e&&e.length>0&&v(e),i.filtersList.addEventListener("click",k),i.showMoreBtn.addEventListener("click",$),await f()}async function k(e){var n;const t=e.target.closest(".filter-btn");if(!t)return;const r=t.dataset.category;r!==l&&((n=document.querySelector(".filter-btn.active"))==null||n.classList.remove("active"),t.classList.add("active"),l=r,d=1,a=9,i.galleryList.innerHTML="",await f())}async function $(){d+=1,a=3,await f()}async function f(){M(),u();try{const e=await L(l,d,a),t=e.weddingPhotos||[],r=e.totalItems||0;t.length>0&&B(t),t.length===a?E():u()}catch(e){console.error("Помилка завантаження фотографій:",e)}finally{S()}}function v(e){const t=e.map(({_id:r,category:n})=>`
      <li class="filter-item">        
        <button class="filter-btn" type="button" data-category="${r}">
          ${n}
        </button>
      </li>
    `).join("");i.filtersList.insertAdjacentHTML("beforeend",t)}function B(e){const t=e.map(r=>`
      <li class="portfolio-item">
        <img src="${r.img}" alt="${r.title}" loading="lazy">
      </li>
    `).join("");i.galleryList.insertAdjacentHTML("beforeend",t)}function M(){i.loader.classList.remove("is-hidden")}function S(){i.loader.classList.add("is-hidden")}function E(){i.showMoreBtn.classList.remove("is-hidden")}function u(){i.showMoreBtn.classList.add("is-hidden")}P();const T=document.querySelector(".feedbacks-list");async function j(){try{const e=await y();T.innerHTML=e.feedbacks.map(({_id:t,name:r,descr:n})=>`
        <li class="feedbacks-list-card swiper-slide" data-id="${t}">
          <p class="feedbacks-card-description">
            ${n}
          </p>

          <p class="feedbacks-card-author">
            ${r}
          </p>
        </li>
      `).join("")}catch(e){console.error("Failed to fetch feedbacks:",e)}}function C(){new h(".swiper",{modules:[w,m],slidesPerView:1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}j();C();
//# sourceMappingURL=index.js.map
