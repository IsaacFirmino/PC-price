'use strict';

const stores = [
  { name: 'Kabum', short: 'KB', color: '#ff4d4d', type: 'hardware' },
  { name: 'Pichau', short: 'PI', color: '#ffcb05', type: 'hardware' },
  { name: 'Terabyte', short: 'TB', color: '#00b8ff', type: 'hardware' },
  { name: 'Amazon', short: 'AM', color: '#ff9900', type: 'marketplace' },
  { name: 'Shopee', short: 'SH', color: '#ee4d2d', type: 'marketplace' },
  { name: 'Mercado Livre', short: 'ML', color: '#ffe600', type: 'marketplace' },
  { name: 'Magazine Luiza', short: 'MZ', color: '#0086ff', type: 'varejo' },
  { name: 'Americanas', short: 'AA', color: '#e60014', type: 'varejo' },
  { name: 'Casas Bahia', short: 'CB', color: '#0057c2', type: 'varejo' }
];

const storeSearchUrl = {
  Kabum: query => `https://www.kabum.com.br/busca/${query}`,
  Pichau: query => `https://www.pichau.com.br/search?q=${query}`,
  Terabyte: query => `https://www.terabyteshop.com.br/busca?str=${query}`,
  Amazon: query => `https://www.amazon.com.br/s?k=${query}`,
  Shopee: query => `https://shopee.com.br/search?keyword=${query}`,
  'Mercado Livre': query => `https://lista.mercadolivre.com.br/${query.replaceAll('%20', '-')}`,
  'Magazine Luiza': query => `https://www.magazineluiza.com.br/busca/${query}/`,
  Americanas: query => `https://www.americanas.com.br/busca/${query}`,
  'Casas Bahia': query => `https://www.casasbahia.com.br/${query}/b`
};

const pcs = [
  {
    id: 'starter',
    name: 'PC Gamer Starter 5600GT',
    tier: 'Entrada',
    price: 2499,
    oldPrice: 2899,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3e568e?w=900&h=560&fit=crop',
    specs: { CPU: 'Ryzen 5 5600GT', GPU: 'Vega 7 integrada', RAM: '16GB DDR4', SSD: '480GB' },
    perf: { gaming: 48, work: 72, creator: 46 },
    uses: ['estudos', 'office', 'valorant', 'lol', 'primeiro pc'],
    analysis: 'Boa porta de entrada para estudos, escritório e jogos competitivos leves sem placa de vídeo dedicada.',
    stores: [
      { store: 'Kabum', price: 2499 },
      { store: 'Shopee', price: 2539 },
      { store: 'Amazon', price: 2599 }
    ]
  },
  {
    id: 'rtx4060',
    name: 'PC Gamer RTX 4060 Power',
    tier: 'Custo-benefício',
    price: 4599,
    oldPrice: 5299,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=900&h=560&fit=crop',
    specs: { CPU: 'Ryzen 5 5600', GPU: 'RTX 4060 8GB', RAM: '16GB DDR4', SSD: '1TB NVMe' },
    perf: { gaming: 84, work: 82, creator: 76 },
    uses: ['gaming', 'streaming', '1440p', 'dlss', 'edição'],
    analysis: 'O ponto mais forte para quem quer jogar em 1080p Ultra e começar no 1440p gastando com equilíbrio.',
    stores: [
      { store: 'Amazon', price: 4599 },
      { store: 'Pichau', price: 4699 },
      { store: 'Kabum', price: 4799 },
      { store: 'Shopee', price: 4899 }
    ]
  },
  {
    id: 'rx7600creator',
    name: 'PC Creator RX 7600',
    tier: 'Criador',
    price: 4899,
    oldPrice: 5499,
    image: 'https://images.unsplash.com/photo-1597872252165-4827a235d7bc?w=900&h=560&fit=crop',
    specs: { CPU: 'Core i5-13400F', GPU: 'RX 7600 8GB', RAM: '32GB DDR4', SSD: '1TB NVMe' },
    perf: { gaming: 82, work: 91, creator: 85 },
    uses: ['design', 'edição', 'multitarefa', 'trabalho', 'gaming'],
    analysis: 'Mais memória e bom processador tornam esta configuração forte para criadores que também jogam.',
    stores: [
      { store: 'Terabyte', price: 4899 },
      { store: 'Pichau', price: 4999 },
      { store: 'Mercado Livre', price: 5079 }
    ]
  },
  {
    id: 'rtx4070s',
    name: 'PC Gamer RTX 4070 Super',
    tier: 'Alto desempenho',
    price: 7299,
    oldPrice: 8499,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=900&h=560&fit=crop',
    specs: { CPU: 'Ryzen 7 7700', GPU: 'RTX 4070 Super', RAM: '32GB DDR5', SSD: '1TB Gen4' },
    perf: { gaming: 94, work: 92, creator: 91 },
    uses: ['4k', '1440p ultra', 'ray tracing', 'trabalho pesado', 'streaming'],
    analysis: 'Excelente para 1440p no ultra, ray tracing e criação com folga para vários anos.',
    stores: [
      { store: 'Kabum', price: 7299 },
      { store: 'Terabyte', price: 7399 },
      { store: 'Magazine Luiza', price: 7599 },
      { store: 'Amazon', price: 7699 }
    ]
  },
  {
    id: 'workstation',
    name: 'PC Workstation Studio',
    tier: 'Workstation',
    price: 10499,
    oldPrice: 11999,
    image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=900&h=560&fit=crop',
    specs: { CPU: 'Core i7-14700F', GPU: 'RTX 4070 Ti', RAM: '64GB DDR5', SSD: '2TB Gen4' },
    perf: { gaming: 95, work: 98, creator: 97 },
    uses: ['render', 'after effects', 'blender', 'engenharia', 'ia local'],
    analysis: 'Configuração para produção profissional, renderização e multitarefa pesada com muita RAM.',
    stores: [
      { store: 'Pichau', price: 10499 },
      { store: 'Terabyte', price: 10649 },
      { store: 'Kabum', price: 10999 },
      { store: 'Casas Bahia', price: 11299 }
    ]
  },
  {
    id: 'office',
    name: 'PC Office Pro Compact',
    tier: 'Produtividade',
    price: 1899,
    oldPrice: 2299,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&h=560&fit=crop',
    specs: { CPU: 'Core i3-12100', GPU: 'Intel UHD', RAM: '8GB DDR4', SSD: '256GB NVMe' },
    perf: { gaming: 20, work: 68, creator: 28 },
    uses: ['office', 'estudos', 'navegação', 'empresa', 'baixo custo'],
    analysis: 'PC simples, rápido e barato para escritório, estudos e navegação diária.',
    stores: [
      { store: 'Americanas', price: 1899 },
      { store: 'Magazine Luiza', price: 1969 },
      { store: 'Amazon', price: 1999 },
      { store: 'Shopee', price: 2049 }
    ]
  }
];

const els = {
  root: document.documentElement,
  themeToggle: document.querySelector('#themeToggle'),
  partnerGrid: document.querySelector('#partnerGrid'),
  storeFilter: document.querySelector('#storeFilter'),
  preferredStore: document.querySelector('#preferredStore'),
  searchInput: document.querySelector('#searchInput'),
  budgetFilter: document.querySelector('#budgetFilter'),
  sortSelect: document.querySelector('#sortSelect'),
  clearFilters: document.querySelector('#clearFilters'),
  pcGrid: document.querySelector('#pcGrid'),
  resultCount: document.querySelector('#resultCount'),
  tickerTrack: document.querySelector('#tickerTrack'),
  recoForm: document.querySelector('#recoForm'),
  recoResult: document.querySelector('#recoResult'),
  budgetInput: document.querySelector('#budgetInput'),
  useSelect: document.querySelector('#useSelect'),
  pcModal: document.querySelector('#pcModal'),
  modalBody: document.querySelector('#modalBody'),
  modalClose: document.querySelector('#modalClose'),
  toast: document.querySelector('#toast'),
  metricPcCount: document.querySelector('#metricPcCount'),
  heroDealImage: document.querySelector('#heroDealImage'),
  heroDealName: document.querySelector('#heroDealName'),
  heroDealTier: document.querySelector('#heroDealTier'),
  heroDealSpecs: document.querySelector('#heroDealSpecs'),
  heroDealPrice: document.querySelector('#heroDealPrice'),
  heroDealButton: document.querySelector('#heroDealButton'),
  alertForm: document.querySelector('#alertForm')
};

function formatMoney(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function discount(pc) {
  return Math.round(((pc.oldPrice - pc.price) / pc.oldPrice) * 100);
}

function bestStore(pc) {
  return pc.stores.reduce((best, current) => current.price < best.price ? current : best);
}

function productQuery(pc) {
  return encodeURIComponent(`${pc.name} ${pc.specs.CPU} ${pc.specs.GPU}`);
}

function buyUrl(pc, storeName) {
  const builder = storeSearchUrl[storeName];
  return builder ? builder(productQuery(pc)) : '#';
}

function allStoreOffers(pc) {
  return stores.map(store => {
    const pricedOffer = pc.stores.find(item => item.store === store.name);
    return {
      store: store.name,
      price: pricedOffer?.price ?? null,
      hasPrice: Boolean(pricedOffer)
    };
  });
}

function scoreFor(pc, use = 'balanced') {
  if (use === 'gaming') return pc.perf.gaming;
  if (use === 'work') return pc.perf.work;
  if (use === 'creator') return pc.perf.creator;
  return Math.round((pc.perf.gaming + pc.perf.work + pc.perf.creator) / 3);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(els.toast.timer);
  els.toast.timer = setTimeout(() => els.toast.classList.remove('show'), 2600);
}

function applyTheme(theme) {
  els.root.dataset.theme = theme;
  localStorage.setItem('pcprice-theme', theme);
  const icon = theme === 'light' ? 'fa-sun' : 'fa-moon';
  els.themeToggle.innerHTML = `<i class="fa-solid ${icon}"></i>`;
}

function initTheme() {
  const saved = localStorage.getItem('pcprice-theme');
  const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(saved || preferred);
}

function renderPartners() {
  els.partnerGrid.innerHTML = stores.map(store => `
    <article class="partner-card">
      <span class="partner-logo" style="--store-color:${store.color}">${store.short}</span>
      <div>
        <strong>${store.name}</strong>
        <small>${store.type}</small>
      </div>
    </article>
  `).join('');

  const options = stores.map(store => `<option value="${store.name}">${store.name}</option>`).join('');
  els.storeFilter.insertAdjacentHTML('beforeend', options);
  els.preferredStore.innerHTML = `<option value="all">Melhor preço geral</option>${options}`;
}

function renderTicker() {
  const items = pcs.flatMap(pc => {
    const store = bestStore(pc);
    return [{ name: pc.name, price: formatMoney(store.price), change: `-${discount(pc)}%`, trend: 'down' }];
  });
  const markup = [...items, ...items].map(item => `
    <div class="ticker-item">
      <span>${item.name}</span>
      <b>${item.price}</b>
      <span class="${item.trend}">${item.change}</span>
    </div>
  `).join('');
  els.tickerTrack.innerHTML = markup;
}

function setHeroDeal() {
  const deal = [...pcs].sort((a, b) => scoreFor(b) - scoreFor(a))[0];
  els.heroDealImage.src = deal.image;
  els.heroDealImage.alt = deal.name;
  els.heroDealName.textContent = deal.name;
  els.heroDealTier.textContent = deal.tier;
  els.heroDealSpecs.innerHTML = Object.entries(deal.specs)
    .slice(0, 4)
    .map(([key, value]) => `<span><b>${key}</b> ${value}</span>`)
    .join('');
  els.heroDealPrice.textContent = formatMoney(bestStore(deal).price);
  els.heroDealButton.addEventListener('click', () => openModal(deal.id));
  els.metricPcCount.textContent = pcs.length;
}

function getFilteredPcs() {
  const q = els.searchInput.value.trim().toLowerCase();
  const maxBudget = els.budgetFilter.value === 'all' ? Infinity : Number(els.budgetFilter.value);
  const storeName = els.storeFilter.value;

  return pcs.filter(pc => {
    const text = [pc.name, pc.tier, pc.analysis, ...pc.uses, ...Object.values(pc.specs)].join(' ').toLowerCase();
    const matchesSearch = !q || text.includes(q);
    const matchesBudget = bestStore(pc).price <= maxBudget;
    const matchesStore = storeName === 'all' || pc.stores.some(item => item.store === storeName);
    return matchesSearch && matchesBudget && matchesStore;
  });
}

function getSortedPcs(list) {
  const sorted = [...list];
  const sort = els.sortSelect.value;
  if (sort === 'price') sorted.sort((a, b) => bestStore(a).price - bestStore(b).price);
  if (sort === 'gaming') sorted.sort((a, b) => b.perf.gaming - a.perf.gaming);
  if (sort === 'work') sorted.sort((a, b) => b.perf.work - a.perf.work);
  if (sort === 'creator') sorted.sort((a, b) => b.perf.creator - a.perf.creator);
  if (sort === 'discount') sorted.sort((a, b) => discount(b) - discount(a));
  if (sort === 'best') sorted.sort((a, b) => scoreFor(b) - scoreFor(a));
  return sorted;
}

function perfBars(pc) {
  return [
    ['Gaming', pc.perf.gaming],
    ['Trabalho', pc.perf.work],
    ['Criação', pc.perf.creator]
  ].map(([label, value]) => `
    <div class="perf-row">
      <span>${label}</span>
      <div class="bar"><span style="width:${value}%"></span></div>
      <b>${value}</b>
    </div>
  `).join('');
}

function storeLines(pc, limit = 3, includeAllStores = false) {
  const offers = includeAllStores ? allStoreOffers(pc) : pc.stores.slice();

  return offers
    .sort((a, b) => {
      if (a.price === null) return 1;
      if (b.price === null) return -1;
      return a.price - b.price;
    })
    .slice(0, limit)
    .map((item, index) => `
      <a class="store-line ${item.price === null ? 'no-price' : ''}" href="${buyUrl(pc, item.store)}" target="_blank" rel="noopener noreferrer" aria-label="Comprar ${pc.name} na ${item.store}">
        <span>${item.store}${index === 0 && item.price !== null ? ' <small>menor preço</small>' : ''}</span>
        <b>${item.price === null ? 'Buscar' : formatMoney(item.price)}</b>
      </a>
    `).join('');
}

function renderPcCards() {
  const list = getSortedPcs(getFilteredPcs());
  els.resultCount.textContent = `${list.length} PC${list.length === 1 ? '' : 's'} encontrado${list.length === 1 ? '' : 's'}`;

  if (!list.length) {
    els.pcGrid.innerHTML = '<div class="empty-state">Nenhum PC encontrado. Tente outro termo, orçamento ou loja.</div>';
    return;
  }

  els.pcGrid.innerHTML = list.map(pc => {
    const best = bestStore(pc);
    return `
      <article class="pc-card">
        <img src="${pc.image}" alt="${pc.name}" loading="lazy">
        <div class="pc-card-body">
          <div class="card-top">
            <span class="pill">${pc.tier}</span>
            <span class="pill score">${scoreFor(pc)} pontos</span>
          </div>
          <h3>${pc.name}</h3>
          <p>${pc.analysis}</p>
          <div class="spec-list">
            ${Object.entries(pc.specs).map(([key, value]) => `<div><span>${key}</span><b>${value}</b></div>`).join('')}
          </div>
          <div class="perf-bars">${perfBars(pc)}</div>
          <div class="store-lines">${storeLines(pc)}</div>
          <div class="card-footer">
            <div class="price">
              <small>${formatMoney(pc.oldPrice)}</small>
              <strong>${formatMoney(best.price)}</strong>
            </div>
            <button class="btn btn-secondary" type="button" data-open-pc="${pc.id}">
              Analisar
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderRecommendation(pc, use) {
  const best = bestStore(pc);
  els.recoResult.innerHTML = `
    <div class="recommended-card">
      <img src="${pc.image}" alt="${pc.name}">
      <div>
        <span class="pill score">${scoreFor(pc, use)} pontos para seu perfil</span>
        <h3>${pc.name}</h3>
        <p>${pc.analysis}</p>
        <div class="spec-list">
          ${Object.entries(pc.specs).map(([key, value]) => `<div><span>${key}</span><b>${value}</b></div>`).join('')}
        </div>
        <div class="store-lines">${storeLines(pc, 4)}</div>
        <div class="card-footer">
          <div class="price">
            <small>${formatMoney(pc.oldPrice)}</small>
            <strong>${formatMoney(best.price)}</strong>
          </div>
          <button class="btn btn-primary" type="button" data-open-pc="${pc.id}">Ver análise completa</button>
        </div>
      </div>
    </div>
  `;
}

function recommendPc(event) {
  event.preventDefault();
  const use = els.useSelect.value;
  const budget = Number(els.budgetInput.value) || Infinity;
  const preferredStore = els.preferredStore.value;

  const candidates = pcs
    .filter(pc => bestStore(pc).price <= budget)
    .filter(pc => preferredStore === 'all' || pc.stores.some(item => item.store === preferredStore));

  if (!candidates.length) {
    els.recoResult.innerHTML = `
      <p class="empty-title">Nada nessa faixa</p>
      <p>Aumente o orçamento ou escolha "Melhor preço geral" para buscar em todas as lojas parceiras.</p>
    `;
    return;
  }

  const [winner] = candidates.sort((a, b) => {
    const priceWeight = (bestStore(a).price - bestStore(b).price) / 100;
    return (scoreFor(b, use) - scoreFor(a, use)) || priceWeight;
  });
  renderRecommendation(winner, use);
}

function openModal(id) {
  const pc = pcs.find(item => item.id === id);
  if (!pc) return;
  const best = bestStore(pc);

  els.modalBody.innerHTML = `
    <div class="modal-grid">
      <img src="${pc.image}" alt="${pc.name}">
      <div class="modal-info">
        <span class="pill">${pc.tier}</span>
        <h2 id="modalTitle">${pc.name}</h2>
        <p>${pc.analysis}</p>
        <div class="spec-list">
          ${Object.entries(pc.specs).map(([key, value]) => `<div><span>${key}</span><b>${value}</b></div>`).join('')}
        </div>
        <div class="perf-bars">${perfBars(pc)}</div>
        <h3>Onde comprar</h3>
        <div class="modal-stores">${storeLines(pc, stores.length, true)}</div>
        <div class="card-footer">
          <div class="price">
            <small>${formatMoney(pc.oldPrice)} · ${discount(pc)}% off</small>
            <strong>${formatMoney(best.price)}</strong>
          </div>
          <a class="btn btn-primary" id="buyButton" href="${buyUrl(pc, best.store)}" target="_blank" rel="noopener noreferrer">
            Ir para ${best.store}
          </a>
        </div>
      </div>
    </div>
  `;
  els.pcModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  els.pcModal.hidden = true;
  document.body.style.overflow = '';
}

function clearFilters() {
  els.searchInput.value = '';
  els.budgetFilter.value = 'all';
  els.storeFilter.value = 'all';
  els.sortSelect.value = 'best';
  renderPcCards();
}

function bindEvents() {
  els.themeToggle.addEventListener('click', () => {
    applyTheme(els.root.dataset.theme === 'light' ? 'dark' : 'light');
  });

  [els.searchInput, els.budgetFilter, els.storeFilter, els.sortSelect].forEach(control => {
    control.addEventListener('input', renderPcCards);
    control.addEventListener('change', renderPcCards);
  });

  els.clearFilters.addEventListener('click', clearFilters);
  els.recoForm.addEventListener('submit', recommendPc);
  els.modalClose.addEventListener('click', closeModal);
  els.pcModal.addEventListener('click', event => {
    if (event.target === els.pcModal) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !els.pcModal.hidden) closeModal();
  });
  els.alertForm.addEventListener('submit', event => {
    event.preventDefault();
    event.currentTarget.reset();
    showToast('Alerta criado. Integre com seu backend para enviar e-mail.');
  });

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-open-pc]');
    if (button) openModal(button.dataset.openPc);
  });
}

function init() {
  initTheme();
  renderPartners();
  renderTicker();
  setHeroDeal();
  renderPcCards();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
