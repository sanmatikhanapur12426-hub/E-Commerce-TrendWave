/* ==========================================================================
   TRENDWAVE E-COMMERCE ENGINE
   Core Application State, Product Catalog, Cart, Wishlist & Interactions
   ========================================================================== */

// Curated high-resolution contemporary fashion & lifestyle catalog
const PRODUCTS = [
  {
    id: 1,
    name: "Architectural Heavyweight Boxy Hoodie",
    categoryKey: "streetwear",
    category: "Streetwear",
    price: 125,
    originalPrice: 160,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Best Seller",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    description: "Crafted from custom 480 GSM French terry cotton. Features relaxed dropped shoulders, an architectural double-lined hood, and hidden side-seam pockets for clean minimalism.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Chalk Off-White", hex: "#f3f3f1" },
      { name: "Obsidian", hex: "#18181b" },
      { name: "Washed Concrete", hex: "#78716c" }
    ]
  },
  {
    id: 2,
    name: "AeroShield Weatherproof Field Shell",
    categoryKey: "outerwear",
    category: "Outerwear",
    price: 240,
    originalPrice: 295,
    rating: 5.0,
    reviewsCount: 88,
    badge: "New Drop",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
    description: "3-layer seam-sealed membrane offering 20,000mm waterproofing with breathable thermal regulation. Matte magnetic storm closures and integrated sling carry system.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Mist Grey", hex: "#d1d5db" },
      { name: "Nightshade Black", hex: "#0f172a" }
    ]
  },
  {
    id: 3,
    name: "WavePulse Cloud Low-Top Runners",
    categoryKey: "footwear",
    category: "Footwear",
    price: 185,
    originalPrice: 220,
    rating: 4.8,
    reviewsCount: 210,
    badge: "Sale -15%",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-cushioned supercritical nitrogen-infused foam sole. Breathable engineered mesh upper paired with recycled Italian nubuck overlays for effortless urban mobility.",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: [
      { name: "Ecru & Stone", hex: "#e5e5e5" },
      { name: "Monochrome Stealth", hex: "#1f2937" }
    ]
  },
  {
    id: 4,
    name: "Modulaire Technical Crossbody Pack",
    categoryKey: "accessories",
    category: "Accessories",
    price: 95,
    originalPrice: 120,
    rating: 4.9,
    reviewsCount: 95,
    badge: "Trending",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    description: "Constructed with X-Pac weatherproof composite fabric and Fidlock magnetic buckle systems. Expandable gusset design fits tablet, phone, and daily tech EDC essentials.",
    sizes: ["One Size"],
    colors: [
      { name: "Matte Slate", hex: "#475569" },
      { name: "Pitch Black", hex: "#0a0a0c" }
    ]
  },
  {
    id: 5,
    name: "Raw Hem Tailored Relaxed Trouser",
    categoryKey: "streetwear",
    category: "Streetwear",
    price: 145,
    originalPrice: 180,
    rating: 4.7,
    reviewsCount: 64,
    badge: "Limited Drop",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
    description: "Japanese twill cotton blend with front double pleats and an engineered wide drape. Subtle elastic rear waistband for uncompromised tailored comfort.",
    sizes: ["30", "32", "34", "36"],
    colors: [
      { name: "Light Sand", hex: "#d6cebe" },
      { name: "Deep Charcoal", hex: "#334155" }
    ]
  },
  {
    id: 6,
    name: "Horizon Ceramic Titanium Chrono",
    categoryKey: "tech",
    category: "Tech Gear",
    price: 310,
    originalPrice: 380,
    rating: 4.9,
    reviewsCount: 76,
    badge: "Collector",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Grade 5 brushed titanium case, sapphire crystal glass, and Japanese meca-quartz movement. Finished with a breathable fluoroelastomer minimalist strap.",
    sizes: ["40mm"],
    colors: [
      { name: "Brushed Steel", hex: "#cbd5e1" },
      { name: "PVD Black", hex: "#111827" }
    ]
  },
  {
    id: 7,
    name: "WaveSound Active Noise-Canceling Buds",
    categoryKey: "tech",
    category: "Tech Gear",
    price: 170,
    originalPrice: 210,
    rating: 4.8,
    reviewsCount: 188,
    badge: "Sale -20%",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",
    description: "Custom 11mm graphene drivers tuned for immersive spatial audio. Dual hybrid ANC blocks 98% of ambient noise with 38-hour combined charging case battery.",
    sizes: ["Standard"],
    colors: [
      { name: "Glacier White", hex: "#f8fafc" },
      { name: "Dark Graphite", hex: "#1e293b" }
    ]
  },
  {
    id: 8,
    name: "Merino Wool Seamless Knit Mockneck",
    categoryKey: "outerwear",
    category: "Outerwear",
    price: 165,
    originalPrice: 200,
    rating: 4.9,
    reviewsCount: 52,
    badge: "Winter Edition",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    description: "100% ultrafine 19.5-micron Australian merino wool knitted seamlessly with 3D whole-garment technology. Breathable, itch-free, and naturally odor-resistant.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Natural Ecru", hex: "#eae7dc" },
      { name: "Heather Grey", hex: "#9ca3af" }
    ]
  }
];

// App State
const state = {
  cart: JSON.parse(localStorage.getItem('trendwave_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('trendwave_wishlist')) || [],
  filterCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  discountPercent: 0,
  discountCode: '',
  activeProductModal: null,
  selectedModalSize: null,
  selectedModalColor: null,
  selectedModalQty: 1
};

// DOM Selectors
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('productSearchInput');
const sortSelect = document.getElementById('productSortSelect');

const cartDrawer = document.getElementById('cartDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const cartToggleBtns = document.querySelectorAll('.cart-toggle-trigger');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCountBadges = document.querySelectorAll('.cart-count-badge');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartShippingEl = document.getElementById('cartShipping');
const cartDiscountRow = document.getElementById('cartDiscountRow');
const cartDiscountAmount = document.getElementById('cartDiscountAmount');
const cartTotalEl = document.getElementById('cartTotal');
const freeShippingMeter = document.getElementById('freeShippingMeter');
const freeShippingText = document.getElementById('freeShippingText');

const promoInput = document.getElementById('promoInput');
const promoApplyBtn = document.getElementById('promoApplyBtn');

const wishlistToggleBtns = document.querySelectorAll('.wishlist-toggle-trigger');
const wishlistCountBadges = document.querySelectorAll('.wishlist-count-badge');

const quickViewModal = document.getElementById('quickViewModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalContentArea = document.getElementById('modalContentArea');

const checkoutModal = document.getElementById('checkoutModal');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
const checkoutTriggerBtn = document.getElementById('checkoutTriggerBtn');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSummaryTotal = document.getElementById('checkoutSummaryTotal');

const toastContainer = document.getElementById('toastContainer');
const newsletterForm = document.getElementById('newsletterForm');

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
function init() {
  setupEventListeners();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupStickyHeader();
}

/* ==========================================================================
   STICKY HEADER SCROLL EFFECT
   ========================================================================== */
function setupStickyHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   RENDER PRODUCT CARDS
   ========================================================================== */
function renderProducts() {
  if (!productsGrid) return;

  let filtered = PRODUCTS.filter(p => {
    const matchesCategory = state.filterCategory === 'all' || p.categoryKey === state.filterCategory;
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem; display: block;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--brand-black); margin-bottom: 0.5rem;">No matching garments found</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">Try modifying your keyword search or filter selection.</p>
        <button onclick="resetFilters()" class="btn-primary" style="margin-top: 1.25rem;">View All Drops</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="card-media">
          <span class="badge-flag badge-${product.badgeType}">${product.badge}</span>
          <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(${product.id})" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <img src="${product.image}" alt="${product.name}" class="primary-img" loading="lazy" />
          <button class="quick-view-overlay-btn" onclick="openQuickView(${product.id})">
            <i class="fas fa-expand-alt" style="margin-right: 0.4rem;"></i> Quick View
          </button>
        </div>
        <div class="card-details">
          <span class="card-category">${product.category}</span>
          <h3 class="card-title" onclick="openQuickView(${product.id})">${product.name}</h3>
          <div class="card-rating">
            <span><i class="fas fa-star"></i> ${product.rating.toFixed(1)}</span>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>
          <div class="card-footer">
            <div class="price-wrap">
              <span class="current-price">$${product.price}</span>
              ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
            </div>
            <button class="btn-add-cart-quick" onclick="quickAddToCart(${product.id})" title="Quick Add to Bag">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.resetFilters = function() {
  state.filterCategory = 'all';
  state.searchQuery = '';
  if (searchInput) searchInput.value = '';
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  renderProducts();
};

/* ==========================================================================
   CART OPERATIONS
   ========================================================================== */
function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes[0];
  const defaultColor = product.colors[0].name;

  addToCart(product, defaultSize, defaultColor, 1);
}

function addToCart(product, size, color, quantity = 1) {
  const existingIndex = state.cart.findIndex(
    item => item.id === product.id && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to your shopping bag!`);
  openCartDrawer();
}

function updateCartQuantity(index, change) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += change;

  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  if (!state.cart[index]) return;
  const removedName = state.cart[index].name;
  state.cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`Removed "${removedName}" from shopping bag.`);
}

function saveCart() {
  localStorage.setItem('trendwave_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountBadges.forEach(badge => {
    badge.textContent = totalCount;
  });

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 150;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = subtotal > 0 && subtotal < freeShippingThreshold ? 15 : 0;
  const discountAmount = subtotal * state.discountPercent;
  const grandTotal = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? shippingCost : 0));

  // Progress Bar for Free Shipping
  if (subtotal >= freeShippingThreshold) {
    freeShippingMeter.style.width = '100%';
    freeShippingText.innerHTML = `<strong>Free Worldwide Shipping</strong> unlocked! 🚀`;
  } else if (subtotal > 0) {
    const percent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
    freeShippingMeter.style.width = `${percent}%`;
    freeShippingText.innerHTML = `Add <strong>$${remainingForFreeShipping.toFixed(2)}</strong> more to get <strong>Free Express Shipping</strong>`;
  } else {
    freeShippingMeter.style.width = '0%';
    freeShippingText.innerHTML = `Free Worldwide Shipping on orders over <strong>$150</strong>`;
  }

  // Summary labels
  if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (cartShippingEl) cartShippingEl.textContent = shippingCost === 0 ? (subtotal === 0 ? '$0.00' : 'FREE') : `$${shippingCost.toFixed(2)}`;
  
  if (state.discountPercent > 0) {
    if (cartDiscountRow) cartDiscountRow.style.display = 'flex';
    if (cartDiscountAmount) cartDiscountAmount.textContent = `-$${discountAmount.toFixed(2)} (${state.discountCode})`;
  } else {
    if (cartDiscountRow) cartDiscountRow.style.display = 'none';
  }

  if (cartTotalEl) cartTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
  if (checkoutSummaryTotal) checkoutSummaryTotal.textContent = `$${grandTotal.toFixed(2)}`;

  // Cart List Items
  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon"><i class="fas fa-shopping-bag"></i></div>
        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--brand-black); margin-bottom: 0.4rem;">Your shopping bag is empty</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Explore our curated drops and discover contemporary modern apparel.</p>
        <button class="btn-primary" onclick="closeCartDrawer();" style="width: 100%;">Continue Shopping</button>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = state.cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-variant">Size: <strong>${item.size}</strong> | Color: <strong>${item.color}</strong></div>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="updateCartQuantity(${idx}, -1)" title="Decrease">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity(${idx}, 1)" title="Increase">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${idx})" title="Remove Item">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  `).join('');
}

function openCartDrawer() {
  cartDrawer.classList.add('active');
  drawerBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  drawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   WISHLIST SYSTEM
   ========================================================================== */
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${product ? product.name : 'Item'}" from wishlist.`);
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${product ? product.name : 'Item'}" to your wishlist! ❤️`);
  }

  localStorage.setItem('trendwave_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  wishlistCountBadges.forEach(badge => {
    badge.textContent = state.wishlist.length;
  });
}

function viewWishlist() {
  if (state.wishlist.length === 0) {
    showToast('Your wishlist is currently empty.');
    return;
  }
  // Filter products by wishlist
  state.filterCategory = 'all';
  filterBtns.forEach(btn => btn.classList.remove('active'));
  
  const savedItems = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  productsGrid.innerHTML = savedItems.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="card-media">
        <span class="badge-flag badge-hot">Wishlisted</span>
        <button class="btn-wishlist active" onclick="toggleWishlist(${product.id})">
          <i class="fas fa-heart"></i>
        </button>
        <img src="${product.image}" alt="${product.name}" class="primary-img" />
        <button class="quick-view-overlay-btn" onclick="openQuickView(${product.id})">
          <i class="fas fa-expand-alt" style="margin-right: 0.4rem;"></i> Quick View
        </button>
      </div>
      <div class="card-details">
        <span class="card-category">${product.category}</span>
        <h3 class="card-title" onclick="openQuickView(${product.id})">${product.name}</h3>
        <div class="card-footer">
          <span class="current-price">$${product.price}</span>
          <button class="btn-add-cart-quick" onclick="quickAddToCart(${product.id})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  showToast(`Showing ${state.wishlist.length} saved wishlist items.`);
  const catalogEl = document.getElementById('catalog');
  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   QUICK VIEW MODAL
   ========================================================================== */
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.activeProductModal = product;
  state.selectedModalSize = product.sizes[0];
  state.selectedModalColor = product.colors[0].name;
  state.selectedModalQty = 1;

  modalContentArea.innerHTML = `
    <div class="modal-gallery">
      <img id="modalPrimaryImg" src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal-info-panel">
      <span class="modal-tag">${product.category} &bull; ${product.badge}</span>
      <h2 class="modal-title">${product.name}</h2>
      
      <div class="modal-price-box">
        <span class="current-price" style="font-size: 1.5rem;">$${product.price}</span>
        ${product.originalPrice ? `<span class="original-price" style="font-size: 1.1rem;">$${product.originalPrice}</span>` : ''}
        <span style="color: #f59e0b; font-size: 0.85rem; font-weight: 700; margin-left: 0.5rem;">
          <i class="fas fa-star"></i> ${product.rating.toFixed(1)} (${product.reviewsCount} reviews)
        </span>
      </div>

      <p class="modal-desc">${product.description}</p>

      <!-- Color Variant Picker -->
      <div class="variant-picker">
        <div class="variant-label">
          <span>Select Finish:</span>
          <span id="selectedColorName" style="color: var(--brand-black); font-weight: 700;">${product.colors[0].name}</span>
        </div>
        <div class="variant-options">
          ${product.colors.map((c, i) => `
            <div class="color-dot ${i === 0 ? 'active' : ''}" 
                 style="background-color: ${c.hex};" 
                 title="${c.name}"
                 onclick="selectModalColor('${c.name}', this)">
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Size Variant Picker -->
      <div class="variant-picker">
        <div class="variant-label">
          <span>Select Size:</span>
          <span style="color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showToast('Size Guide: Fits true to contemporary oversized aesthetic.')">Fit Guide</span>
        </div>
        <div class="variant-options">
          ${product.sizes.map((s, i) => `
            <button class="size-pill ${i === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">
              ${s}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Modal Add to Cart Actions -->
      <div class="modal-actions">
        <div class="qty-control" style="margin-top: 0; padding: 0.2rem;">
          <button class="qty-btn" onclick="changeModalQty(-1)" style="width: 2.2rem; height: 2.2rem;">-</button>
          <span id="modalQtyDisplay" class="qty-val" style="padding: 0 1rem; font-size: 1rem;">1</span>
          <button class="qty-btn" onclick="changeModalQty(1)" style="width: 2.2rem; height: 2.2rem;">+</button>
        </div>
        <button class="btn-primary" onclick="submitModalAddToCart()" style="flex-grow: 1;">
          <i class="fas fa-shopping-bag"></i> Add to Bag &bull; $${product.price}
        </button>
      </div>
    </div>
  `;

  if (checkoutModal) checkoutModal.classList.remove('active');
  if (quickViewModal) quickViewModal.classList.add('active');
  if (modalBackdrop) modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.selectModalSize = function(size, el) {
  state.selectedModalSize = size;
  document.querySelectorAll('.size-pill').forEach(pill => pill.classList.remove('active'));
  el.classList.add('active');
};

window.selectModalColor = function(colorName, el) {
  state.selectedModalColor = colorName;
  const nameLabel = document.getElementById('selectedColorName');
  if (nameLabel) nameLabel.textContent = colorName;
  document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
  el.classList.add('active');
};

window.changeModalQty = function(change) {
  state.selectedModalQty = Math.max(1, state.selectedModalQty + change);
  const display = document.getElementById('modalQtyDisplay');
  if (display) display.textContent = state.selectedModalQty;
};

window.submitModalAddToCart = function() {
  if (!state.activeProductModal) return;
  addToCart(
    state.activeProductModal, 
    state.selectedModalSize, 
    state.selectedModalColor, 
    state.selectedModalQty
  );
  closeQuickView();
};

function closeQuickView() {
  if (quickViewModal) quickViewModal.classList.remove('active');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   CHECKOUT MODAL & SIMULATION
   ========================================================================== */
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Your bag is empty! Add garments before checkout.');
    return;
  }
  closeCartDrawer();
  if (quickViewModal) quickViewModal.classList.remove('active');
  if (checkoutModal) checkoutModal.classList.add('active');
  if (modalBackdrop) modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  if (checkoutModal) checkoutModal.classList.remove('active');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message, icon = 'fas fa-check-circle') {
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="${icon}" style="color: #22c55e;"></i> <span>${message}</span>`;
  
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ==========================================================================
   EVENT LISTENERS SETUP
   ========================================================================== */
function setupEventListeners() {
  // Category Filters
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Sort Select
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer Triggers
  cartToggleBtns.forEach(btn => {
    btn.addEventListener('click', openCartDrawer);
  });
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeCartDrawer);

  // Wishlist Button in Header
  wishlistToggleBtns.forEach(btn => {
    btn.addEventListener('click', viewWishlist);
  });

  // Modals Backdrops & Close buttons
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickView);
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckout);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeQuickView();
        closeCheckout();
      }
    });
  }

  // Checkout Triggers
  if (checkoutTriggerBtn) {
    checkoutTriggerBtn.addEventListener('click', openCheckout);
  }

  // Checkout Form Submission
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderNumber = 'TW-' + Math.floor(100000 + Math.random() * 900000);
      
      checkoutModal.querySelector('.checkout-card').innerHTML = `
        <div style="text-align: center; padding: 2rem 0;">
          <div style="width: 70px; height: 70px; background-color: #ecfdf5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: #10b981; font-size: 2rem;">
            <i class="fas fa-check"></i>
          </div>
          <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--brand-black); margin-bottom: 0.5rem;">Order Confirmed!</h3>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">
            Thank you for shopping with TrendWave. Your order <strong>#${orderNumber}</strong> has been received and is being prepared for express delivery.
          </p>
          <div style="background-color: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 2rem; font-size: 0.85rem; color: var(--text-secondary);">
            Tracking updates will be dispatched to your email address shortly.
          </div>
          <button class="btn-primary" onclick="location.reload()" style="width: 100%;">
            Continue Shopping
          </button>
        </div>
      `;

      // Clear Cart
      state.cart = [];
      saveCart();
      updateCartUI();
    });
  }

  // Coupon Application
  if (promoApplyBtn && promoInput) {
    promoApplyBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'TREND20') {
        state.discountPercent = 0.20;
        state.discountCode = 'TREND20 (-20%)';
        updateCartUI();
        showToast('Success! 20% discount code TREND20 applied.');
        promoInput.value = '';
      } else if (code === 'WAVE10') {
        state.discountPercent = 0.10;
        state.discountCode = 'WAVE10 (-10%)';
        updateCartUI();
        showToast('Success! 10% discount code applied.');
        promoInput.value = '';
      } else {
        showToast('Invalid promo code. Try "TREND20" for 20% off.', 'fas fa-exclamation-circle');
      }
    });
  }

  // Newsletter Form
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`Welcome to TrendWave VIP Club! Use code TREND20 for 20% off.`);
        input.value = '';
      }
    });
  }

  // Announcement Close
  const announcementClose = document.getElementById('announcementClose');
  if (announcementClose) {
    announcementClose.addEventListener('click', () => {
      document.querySelector('.announcement-bar').style.display = 'none';
    });
  }

  // Hotspot Quick Buy in Lookbook
  document.querySelectorAll('.hotspot-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const prodId = parseInt(pin.dataset.productId);
      if (prodId) openQuickView(prodId);
    });
  });
}

// Global exposure for inline events
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.quickAddToCart = quickAddToCart;
window.toggleWishlist = toggleWishlist;
window.updateCartQuantity = updateCartQuantity;
window.removeCartItem = removeCartItem;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.showToast = showToast;

// Boot
document.addEventListener('DOMContentLoaded', init);
