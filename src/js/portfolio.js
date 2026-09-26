import { fetchCategories, fetchPhotos } from './api.js';

const refs = {
  filtersList: document.querySelector('.portfolio-filters'),
  galleryList: document.querySelector('.portfolio-list'),
  loader: document.getElementById('portfolio-loader'),
  showMoreBtn: document.getElementById('show-more-btn'),
};

let currentPage = 1;
let currentCategory = 'all';
let currentLimit = 9;

async function initPortfolio() {
  const categories = await fetchCategories();
  if (categories && categories.length > 0) {
    renderCategoryButtons(categories);
  }

  refs.filtersList.addEventListener('click', onCategoryClick);
  refs.showMoreBtn.addEventListener('click', onShowMoreClick);

  await loadAndRenderPhotos();
}

async function onCategoryClick(event) {
  const btn = event.target.closest('.filter-btn');
  if (!btn) return;

  const selectedCategory = btn.dataset.category;
  if (selectedCategory === currentCategory) return;

  const activeBtn = document.querySelector('.filter-btn.active');
  if (activeBtn) {
    activeBtn.classList.remove('active');
    activeBtn.setAttribute('aria-pressed', 'false');
  }

  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');

  currentCategory = selectedCategory;
  currentPage = 1;
  currentLimit = 9;
  refs.galleryList.innerHTML = '';
  await loadAndRenderPhotos();
}

async function onShowMoreClick() {
  currentPage += 1;
  currentLimit = 3;
  await loadAndRenderPhotos();
}

async function loadAndRenderPhotos() {
  showLoader();
  hideShowMoreBtn();
  try {
    const data = await fetchPhotos(currentCategory, currentPage, currentLimit);
    const photos = data.weddingPhotos || [];
    const totalItems = data.totalItems || 0;
    if (photos.length > 0) {
      renderGalleryItems(photos);
    }

    if (photos.length === currentLimit) {
      showShowMoreBtn();
    } else {
      hideShowMoreBtn();
    }
  } catch (error) {
    console.error('Помилка завантаження фотографій:', error);
  } finally {
    hideLoader();
  }
}

function renderCategoryButtons(categories) {
  const markup = categories
    .map(({ _id, category }) => {
      return `
      <li class="filter-item">        
        <button class="filter-btn" type="button" data-category="${_id}" aria-pressed="false">
          ${category}
        </button>
      </li>
    `;
    })
    .join('');
  refs.filtersList.insertAdjacentHTML('beforeend', markup);
}

function renderGalleryItems(photos) {
  const markup = photos
    .map(photo => {
      return `
      <li class="portfolio-item">
        <img src="${photo.img}" alt="${photo.title}" loading="lazy">
      </li>
    `;
    })
    .join('');

  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}
function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
function showShowMoreBtn() {
  refs.showMoreBtn.classList.remove('is-hidden');
}
function hideShowMoreBtn() {
  refs.showMoreBtn.classList.add('is-hidden');
}
initPortfolio();
