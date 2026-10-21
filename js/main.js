/**
 * boxaja.id — Main Interactive Application Script
 * WhatsApp Integration: wa.me/6281128862016
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initPortfolioFilter();
  initQuoteForm();
  initPriceCalculator();
  initModals();
  initSmoothScroll();
});

// WhatsApp Target Number
const WA_PHONE = '6281128862016';

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-drawer-links a');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  function openDrawer() {
    drawer.classList.add('open');
    toggleBtn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    toggleBtn.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/**
 * Portfolio Category Filter with Smooth Animation
 */
const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Skincare Rigid Box',
    category: 'box',
    categoryName: 'Box Packaging',
    desc: 'Hardbox magnetik eksklusif dengan laminasi doff halus & hot foil stamping emas.',
    image: 'assets/images/portfolio-box-white.jpg'
  },
  {
    id: 2,
    title: 'Artisan Bakery Mailer Box',
    category: 'box',
    categoryName: 'Food Grade Packaging',
    desc: 'Corrugated E-Flute kokoh food-grade untuk pengiriman pastry & kue aman.',
    image: 'assets/images/portfolio-box-food.jpg'
  },
  {
    id: 3,
    title: 'Boutique Kraft Paper Bag',
    category: 'paperbag',
    categoryName: 'Paper Bag',
    desc: 'Paper bag craft ramah lingkungan 150gsm dengan tali kur rajut elegan.',
    image: 'assets/images/portfolio-paperbag.jpg'
  },
  {
    id: 4,
    title: 'Corporate Trifold Brochure',
    category: 'brosur',
    categoryName: 'Brosur & Company Profile',
    desc: 'Cetak Art Paper 210gsm full color presisi tinggi dengan lipatan rapi tanpa retak.',
    image: 'assets/images/portfolio-brochure.jpg'
  },
  {
    id: 5,
    title: 'Executive Desk Calendar 2026',
    category: 'kalender',
    categoryName: 'Kalender Meja',
    desc: 'Kalender meja spiral kawat kokoh, dudukan hard cover linen & UV spot mengkilap.',
    image: 'assets/images/portfolio-calendar.jpg'
  },
  {
    id: 6,
    title: 'Custom Holographic Cosmetic Box',
    category: 'offset',
    categoryName: 'Offset & Finishing Khusus',
    desc: 'Bahan Ivory 350gr dengan laminasi hologram dan embos logo 3 dimensi.',
    image: 'assets/images/service-box.jpg'
  }
];

function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  const grid = document.getElementById('portfolioGrid');
  if (!grid || !tabs.length) return;

  function renderPortfolio(filterCategory = 'all') {
    grid.innerHTML = '';
    
    const filtered = filterCategory === 'all' 
      ? portfolioItems.slice(0, 4) // Show top 4 by default for clean balance matching reference
      : portfolioItems.filter(item => item.category === filterCategory || (filterCategory === 'all'));

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'portfolio-card';
      card.setAttribute('data-category', item.category);
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="portfolio-card-overlay">
          <span class="portfolio-card-badge">${item.categoryName}</span>
          <h3 class="portfolio-card-title">${item.title}</h3>
          <p class="portfolio-card-desc">${item.desc}</p>
        </div>
        <div class="portfolio-arrow" title="Konsultasi Produk Ini">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      `;

      card.addEventListener('click', () => {
        openProductWhatsAppInquiry(item.title, item.categoryName);
      });

      grid.appendChild(card);
    });
  }

  // Initial render
  renderPortfolio('all');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-filter');
      renderPortfolio(category);
    });
  });
}

/**
 * Direct WhatsApp Order & Inquiry Action
 */
function openProductWhatsAppInquiry(productName, category) {
  const text = `Halo boxaja.id, saya tertarik dengan produk portofolio Anda:\n\n📦 *${productName}* (${category})\n\nBisa minta info spesifikasi minimal order dan penawaran harganya? Terima kasih.`;
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

/**
 * Interactive Quote Form (Section 9) -> Auto WhatsApp Link
 */
function initQuoteForm() {
  const form = document.getElementById('projectQuoteForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('quoteName')?.value.trim() || 'Pelanggan';
    const phone = document.getElementById('quotePhone')?.value.trim() || '-';
    const product = document.getElementById('quoteProduct')?.value || 'Box Packaging';
    const qty = document.getElementById('quoteQty')?.value.trim() || '1.000 pcs';
    const message = document.getElementById('quoteMessage')?.value.trim() || 'Mohon info harga dan estimasi waktu produksi.';

    const waText = 
`*PERMINTAAN PENAWARAN HARGA — boxaja.id*
---------------------------------------
👤 *Nama:* ${name}
📱 *No. WhatsApp:* ${phone}
📦 *Jenis Produk:* ${product}
🔢 *Estimasi Jumlah (Qty):* ${qty}
📝 *Detail Spesifikasi & Ukuran:*
${message}
---------------------------------------
Mohon dikirimkan estimasi harga dan simulasi mock-up. Terima kasih!`;

    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waText)}`;
    showToast('Membuka WhatsApp boxaja.id...');
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  });
}

/**
 * Interactive Price Estimator Calculator
 */
function initPriceCalculator() {
  const calcForm = document.getElementById('calcForm');
  if (!calcForm) return;

  const productSelect = document.getElementById('calcProduct');
  const materialSelect = document.getElementById('calcMaterial');
  const finishingSelect = document.getElementById('calcFinishing');
  const qtyInput = document.getElementById('calcQty');
  const resultDisplay = document.getElementById('calcTotalResult');
  const unitDisplay = document.getElementById('calcUnitResult');
  const orderCalcBtn = document.getElementById('orderCalcBtn');

  // Base pricing logic (in IDR)
  function calculateEstimate() {
    const product = productSelect.value;
    const material = materialSelect.value;
    const finishing = finishingSelect.value;
    let qty = parseInt(qtyInput.value) || 500;
    if (qty < 100) qty = 100;

    let baseUnitPrice = 2500;

    if (product === 'box-hardbox') baseUnitPrice = 18500;
    else if (product === 'box-corrugated') baseUnitPrice = 4200;
    else if (product === 'box-food') baseUnitPrice = 1600;
    else if (product === 'paperbag-kraft') baseUnitPrice = 2200;
    else if (product === 'paperbag-artcarton') baseUnitPrice = 4800;
    else if (product === 'brosur') baseUnitPrice = 650;
    else if (product === 'kalender-meja') baseUnitPrice = 14500;
    else if (product === 'kalender-dinding') baseUnitPrice = 12000;

    // Material multiplier
    let materialMult = 1.0;
    if (material === 'premium') materialMult = 1.25;
    else if (material === 'exclusive') materialMult = 1.5;

    // Finishing add-on per pcs
    let finishingAdd = 0;
    if (finishing === 'doff' || finishing === 'glossy') finishingAdd = 350;
    else if (finishing === 'spot-uv') finishingAdd = 750;
    else if (finishing === 'hot-foil') finishingAdd = 1200;
    else if (finishing === 'combo') finishingAdd = 1800;

    // Quantity Tier Discount
    let qtyDiscount = 1.0;
    if (qty >= 5000) qtyDiscount = 0.70;
    else if (qty >= 2000) qtyDiscount = 0.80;
    else if (qty >= 1000) qtyDiscount = 0.90;
    else if (qty >= 500) qtyDiscount = 1.0;
    else qtyDiscount = 1.35; // lower batch cost premium

    const unitPrice = Math.round((baseUnitPrice * materialMult + finishingAdd) * qtyDiscount);
    const totalPrice = unitPrice * qty;

    if (resultDisplay) {
      resultDisplay.textContent = formatRupiah(totalPrice);
    }
    if (unitDisplay) {
      unitDisplay.textContent = `± ${formatRupiah(unitPrice)} / pcs (Estimasi ${qty.toLocaleString('id-ID')} pcs)`;
    }
  }

  // Event Listeners for Live Calculation
  [productSelect, materialSelect, finishingSelect, qtyInput].forEach(elem => {
    if (elem) {
      elem.addEventListener('change', calculateEstimate);
      elem.addEventListener('input', calculateEstimate);
    }
  });

  // Calculate initially
  calculateEstimate();

  if (orderCalcBtn) {
    orderCalcBtn.addEventListener('click', () => {
      const productName = productSelect.options[productSelect.selectedIndex].text;
      const materialName = materialSelect.options[materialSelect.selectedIndex].text;
      const finishingName = finishingSelect.options[finishingSelect.selectedIndex].text;
      const qtyVal = qtyInput.value;
      const totalVal = resultDisplay.textContent;
      const unitVal = unitDisplay.textContent;

      const msg = 
`*KONSULTASI HASIL KALKULATOR HARGA — boxaja.id*
---------------------------------------
📦 *Produk:* ${productName}
📄 *Bahan:* ${materialName}
✨ *Finishing:* ${finishingName}
🔢 *Jumlah:* ${qtyVal} pcs
💰 *Perkiraan Harga:* ${totalVal} (${unitVal})
---------------------------------------
Halo tim boxaja.id, saya ingin konfirmasi spesifikasi ukuran dan lanjut ke pemesanan/sampel desain. Terima kasih!`;

      const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }
}

/**
 * Helper: Format Number to IDR Currency
 */
function formatRupiah(num) {
  return 'Rp ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Modals Management (Calculator Modal & Product Specs)
 */
function initModals() {
  const calcModal = document.getElementById('calcModal');
  const openCalcBtns = document.querySelectorAll('.open-calc-modal');
  const closeCalcBtn = document.getElementById('closeCalcModal');

  if (calcModal) {
    openCalcBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        calcModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (closeCalcBtn) {
      closeCalcBtn.addEventListener('click', () => {
        calcModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    calcModal.addEventListener('click', (e) => {
      if (e.target === calcModal) {
        calcModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (calcModal && calcModal.classList.contains('active')) {
        calcModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
}

/**
 * Smooth Scroll for Navigation Anchors
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Toast Alert
 */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
