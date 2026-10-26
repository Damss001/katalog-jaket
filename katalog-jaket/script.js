// DATA PRODUK DENGAN NAMA FILE LOKAL KAMU
const products = [
    // --- C.P. COMPANY ---
    {
        id: 'cp1',
        brandId: 'cp',
        brandName: 'C.P. Company',
        name: 'Goggle Jacket Olive',
        price: 'Rp 8.500.000',
        image: 'img/cpcompany1.webp',
        format: '.WEBP',
        specs: [
            'Bahan: Chrome-R Weatherproof Fabric',
            'Fitur: Signature Adjustable Goggles Lens',
            'Finishing: Garment Dyed Processing',
            'Asal: Made in Italy'
        ]
    },
    {
        id: 'cp2',
        brandId: 'cp',
        brandName: 'C.P. Company',
        name: 'Metropolis Lens Sweatshirt',
        price: 'Rp 4.200.000',
        image: 'img/cpcompany2.webp',
        format: '.WEBP',
        specs: [
            'Bahan: 100% Premium Fleece Cotton',
            'Fitur: Sleeve Lens Detail Pocket',
            'Desain: Ribbed Crewneck & Cuffs',
            'Kenyamanan: Breathable & Soft Touch'
        ]
    },
    {
        id: 'cp3',
        brandId: 'cp',
        brandName: 'C.P. Company',
        name: 'Casual Polo Metallic Grey',
        price: 'Rp 3.100.000',
        image: 'img/cpcompany3.jfif',
        format: '.JFIF',
        specs: [
            'Bahan: Fine Mercerized Cotton',
            'Fitur: Embroidered Chest Logo',
            'Kolar: Classic Two-Button Placket',
            'Tipe Fit: Modern Regular Fit'
        ]
    },

    // --- STONE ISLAND ---
    {
        id: 'si1',
        brandId: 'si',
        brandName: 'Stone Island',
        name: 'Crinkle Reps NY Down Jacket',
        price: 'Rp 14.800.000',
        image: 'img/stoneisland1.webp',
        format: '.WEBP',
        specs: [
            'Bahan: Ultra-light Nylon Crinkle Reps',
            'Isi: Premium Goose Down Insulation',
            'Fitur: Iconic Compass Badge on Left Arm',
            'Perlindungan: Windproof & Resin Coated'
        ]
    },
    {
        id: 'si2',
        brandId: 'si',
        brandName: 'Stone Island',
        name: 'Heavy Cotton Crewneck Black',
        price: 'Rp 5.600.000',
        image: 'img/stoneisland2.webp',
        format: '.WEBP',
        specs: [
            'Bahan: 100% Heavyweight Cotton Fleece',
            'Fitur: Detachable Compass Badge Button',
            'Jahitan: Reinforced Seam Construction',
            'Gaya: Authentic Italian Terrace Wear'
        ]
    },
    {
        id: 'si3',
        brandId: 'si',
        brandName: 'Stone Island',
        name: 'Cargo Pants Ghost Piece',
        price: 'Rp 7.900.000',
        image: 'img/stoneisland3.webp',
        format: '.WEBP',
        specs: [
            'Bahan: Stretch Cotton Tela Mono-Color',
            'Desain: Monochrome Badge Integration',
            'Kantong: Multi-functional Side Pocket Cargo',
            'Kelebihan: Ergonomic Articulated Knees'
        ]
    },

    // --- FRED PERRY ---
    {
        id: 'fp1',
        brandId: 'fp',
        brandName: 'Fred Perry',
        name: 'The M12 Twin Tipped Polo',
        price: 'Rp 1.950.000',
        image: 'img/fredperry1.webp',
        format: '.WEBP',
        specs: [
            'Bahan: 100% Cotton Piqué Signature',
            'Fitur: Twin Tipped Collar & Cuffs',
            'Logo: Laurel Wreath Embroidery',
            'Warisan: Made in England Classic'
        ]
    },
    {
        id: 'fp2',
        brandId: 'fp',
        brandName: 'Fred Perry',
        name: 'Brentham Outer Jacket',
        price: 'Rp 3.850.000',
        image: 'img/fredperry2.webp',
        format: '.WEBP',
        specs: [
            'Bahan: Durable Nylon Outer Shell',
            'Lining: Micro-Fleece Warm Lining',
            'Fitur: Two-Way Zip & Ribbed Hem',
            'Ketahanan: Water Resistant Finish'
        ]
    },
    {
        id: 'fp3',
        brandId: 'fp',
        brandName: 'Fred Perry',
        name: 'Classic Barrel Bag Navy',
        price: 'Rp 2.400.000',
        image: 'img/fredperry3.webp',
        format: '.WEBP',
        specs: [
            'Bahan: Heavy-Duty Smooth PU Fabric',
            'Kapasitas: Spacious Main Zip Compartment',
            'Strap: Adjustable Webbing Shoulder Strap',
            'Detail: Foil Printed Laurel Wreath'
        ]
    }
];

// Fungsi Pintar untuk Menangani Gambar Lokal yang Gagal Muat
function handleImgError(imgElement, originalSrc) {
    if (imgElement.dataset.fallbackUsed) {
        imgElement.style.visibility = 'hidden';
        return;
    }

    imgElement.dataset.fallbackUsed = 'true';
    imgElement.src = 'img/cpcompany1.webp';
}

// Inisialisasi Tampilan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderGrid('all-products-grid', products);
    renderGrid('cp-products-grid', products.filter(p => p.brandId === 'cp'));
    renderGrid('si-products-grid', products.filter(p => p.brandId === 'si'));
    renderGrid('fp-products-grid', products.filter(p => p.brandId === 'fp'));
});

// FUNGSI PINDAH HALAMAN
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.remove('active');
    });

    const target = document.getElementById(`page-${pageId}`);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// RENDER KATALOG CARD
function renderGrid(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(product => `
        <div class="product-card" onclick="openModal('${product.id}')">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" onerror="handleImgError(this, '${product.image}')">
                <span class="format-badge">${product.format}</span>
            </div>
            <div class="product-info">
                <span class="brand-tag">${product.brandName}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="price">${product.price}</p>
            </div>
        </div>
    `).join('');
}

// LIVE SEARCH FITUR
function filterProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brandName.toLowerCase().includes(query)
    );
    renderGrid('all-products-grid', filtered);
}

// MODAL PRODUK & SPESIFIKASI
let currentSelectedProduct = null;

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentSelectedProduct = product;

    const modalImg = document.getElementById('modal-img');
    modalImg.src = product.image;
    modalImg.onerror = function() { handleImgError(this, product.image); };

    document.getElementById('modal-format-badge').innerText = product.format;
    document.getElementById('modal-brand').innerText = product.brandName;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-price').innerText = product.price;

    const specsList = document.getElementById('modal-specs-list');
    specsList.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');

    document.getElementById('product-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('product-modal').classList.remove('active');
}

// ORDER KE WHATSAPP
function sendWhatsAppOrder() {
    if (!currentSelectedProduct) return;

    const size = document.getElementById('select-size').value;
    const phone = "6281358061269"; // Ganti dengan nomor WhatsApp kamu

    const message = `Halo Linzz Casual, saya mau order:\n\n` +
                    `• Brand: ${currentSelectedProduct.brandName}\n` +
                    `• Produk: ${currentSelectedProduct.name}\n` +
                    `• Harga: ${currentSelectedProduct.price}\n` +
                    `• Ukuran: ${size}\n\n` +
                    `Apakah stok produk ini masih ready?`;

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}