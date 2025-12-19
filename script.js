// داده‌های ۱۵ محصول لوازم تحریر
        const products = [
            {
                id: 1,
                title: "خودکار ژله‌ای مشکی",
                category: "قلم",
                price: 25000,
                shortDesc: "خودکار ژله‌ای با نوک ۰.۵ میلی‌متر",
                fullDesc: "خودکار ژله‌ای با کیفیت بالا، رنگ نوشتاری مشکی ، نوک ۰.۵ میلی‌متر، مناسب برای نوشتن طولانی مدت بدون خستگی دست. بدنه ارگونومیک و مقاوم.",
                images: ["images/pen1.jpg", "images/pen1-2.jpg", "images/pen1-3.jpg"],
                thumbnails: ["images/pen1.jpg", "images/pen1-2.jpg", "images/pen1-3.jpg"]
            },
            {
                id: 2,
                title: "دفتر ۱۰۰ برگ A5",
                category: "دفتر",
                price: 45000,
                shortDesc: "دفتر با جلد سخت و خط‌دار",
                fullDesc: "دفتر ۱۰۰ برگ سایز A5 با جلد سخت و مقاوم، خط‌کشی منظم ۸ میلی‌متری، کاغذ ۷۰ گرمی مرغوب، مناسب برای دانش‌آموزان و دانشجویان.",
                images: ["images/notebook1.jpg", "images/notebook1-2.jpg"],
                thumbnails: ["images/notebook1.jpg", "images/notebook1-2.jpg"]
            },
            {
                id: 3,
                title: "مداد رنگی ۱۲ تایی",
                category: "قلم",
                price: 85000,
                shortDesc: "ست مداد رنگی حرفه‌ای",
                fullDesc: "ست کامل ۱۲ عدد مداد رنگی با کیفیت بالا، رنگ‌های زنده و درخشان، مناسب برای نقاشی، طراحی و رنگ‌آمیزی. مقاوم در برابر شکستن.",
                images: ["images/pencils1.jpg", "images/pencils1-2.jpg", "images/pencils1-3.jpg"],
                thumbnails: ["images/pencils1.jpg", "images/pencils1-2.jpg", "images/pencils1-3.jpg"]
            },
            {
                id: 4,
                title: " جامدادی مخملی",
                category: "کیف",
                price: 120000,
                shortDesc: "جامدادی با زیپ محکم",
                fullDesc: "جامدادی مخملی با طراحی زیبا، زیپ محکم و مقاوم، ظرفیت ۳۰ عدد مداد و خودکار، مناسب برای حمل لوازم تحریر به مدرسه و دانشگاه.",
                images: ["images/pouch1.jpg", "images/pouch1-2.jpg"],
                thumbnails: ["images/pouch1.jpg", "images/pouch1-2.jpg"]
            },
            {
                id: 5,
                title: "خودکار ژله‌ای قرمز",
                category: "قلم",
                price: 180000,
                shortDesc: "خودکار ژله‌ای با نوک ۰.۵ میلی‌متر",
                fullDesc: "خودکار ژله‌ای با کیفیت بالا، رنگ نوشتاری قرمز ، نوک ۰.۵ میلی‌متر، مناسب برای نوشتن طولانی مدت بدون خستگی دست. بدنه ارگونومیک و مقاوم.",
                images: ["images/fountain1.jpg", "images/fountain1-2.jpg"],
                thumbnails: ["images/fountain1.jpg", "images/fountain1-2.jpg"]
            },
            {
                id: 6,
                title: "برچسب رنگی ۵۰ تایی",
                category: "دفتر",
                price: 35000,
                shortDesc: "ست برچسب‌های رنگی",
                fullDesc: "۵۰عدد برچسب رنگی در ۱۰ رنگ مختلف، چسبندگی مناسب، قابل پاک کردن از سطوح صاف، ایده‌آل برای علامت‌گذاری و تزیین دفتر.",
                images: ["images/stickers1.jpg", "images/stickers1-2.jpg"],
                thumbnails: ["images/stickers1.jpg", "images/stickers1-2.jpg"]
            },
            {
                id: 7,
                title: "جامدادی چرم مصنوعی",
                category: "کیف",
                price: 95000,
                shortDesc: "جامدادی با طراحی شیک",
                fullDesc: "جامدادی چرم مصنوعی با دو محفظه مجزا، زیپ‌های محکم، مناسب برای حمل خودکار، مداد و پاک‌کن. طراحی کلاسیک و مقاوم.",
                images: ["images/pencilcase1.jpg", "images/pencilcase1-2.jpg"],
                thumbnails: ["images/pencilcase1.jpg", "images/pencilcase1-2.jpg"]
            },
            {
                id: 8,
                title: "پاک‌کن برقی",
                category: "قلم",
                price: 28000,
                shortDesc: "پاک‌کن بدون باقی‌مانده",
                fullDesc: "پاک‌کن برقی حرفه‌ای ، پاک کردن بدون آسیب به کاغذ، مناسب برای مداد و خودکار، بدون باقی‌مانده و بوی نامطبوع.",
                images: ["images/eraser1.jpg"],
                thumbnails: ["images/eraser1.jpg"]
            },
            {
                id: 9,
                title: "تقویم رومیزی ۲۰۲۶",
                category: "دفتر",
                price: 75000,
                shortDesc: "تقویم فانتزی رومیزی",
                fullDesc: "تقویم رومیزی ۲۰۲۶ با طراحی زیبا، پایه فلزی محکم، مناسب برای میز کار و مطالعه، شامل تعطیلات رسمی.",
                images: ["images/calendar1.jpg", "images/calendar1-2.jpg"],
                thumbnails: ["images/calendar1.jpg", "images/calendar1-2.jpg"]
            },
            {
                id: 10,
                title: "تراش برقی USB",
                category: "کیف",
                price: 220000,
                shortDesc: "تراش برقی قابل حمل",
                fullDesc: "تراش برقی USB با مخزن بزرگ، مناسب برای مدادهای مختلف، شارژی و قابل حمل، تیز کردن سریع و تمیز.",
                images: ["images/sharpen1.jpg", "images/sharpen1-2.jpg"],
                thumbnails: ["images/sharpen1.jpg", "images/sharpen1-2.jpg"]
            },
            {
                id: 11,
                title: "خط‌کش فلزی ۳۰ سانتی",
                category: "دفتر",
                price: 42000,
                shortDesc: "خط‌کش فلزی دقیق",
                fullDesc: "خط‌کش فلزی ۳۰ سانتی‌متری با لبه صاف و دقیق، مناسب برای طراحی فنی و خط‌کشی حرفه‌ای، مقاوم در برابر خمیدگی.",
                images: ["images/ruler1.jpg"],
                thumbnails: ["images/ruler1.jpg"]
            },
            {
                id: 12,
                title: "هایلایتر ۶ رنگ",
                category: "قلم",
                price: 68000,
                shortDesc: "ست هایلایتر رنگی",
                fullDesc: "ست ۶ عدد هایلایتر در رنگ‌های مختلف، جوهر شفاف، مناسب برای علامت‌گذاری متن و جزوه، بدون نشت جوهر.",
                images: ["images/highlighter1.jpg", "images/highlighter1-2.jpg"],
                thumbnails: ["images/highlighter1.jpg", "images/highlighter1-2.jpg"]
            },
            {
                id: 13,
                title: "دفترچه یادداشت جیبی",
                category: "دفتر",
                price: 38000,
                shortDesc: "دفترچه جیبی بدون خط",
                fullDesc: "دفترچه یادداشت جیبی ۵۰ برگ، سایز مناسب کیف، کاغذ مرغوب، بدون خط برای یادداشت‌برداری آزاد.",
                images: ["images/memo1.jpg", "images/memo1-2.jpg"],
                thumbnails: ["images/memo1.jpg", "images/memo1-2.jpg"]
            },
            {
                id: 14,
                title: "گیره کاغذ رنگی",
                category: "دفتر",
                price: 15000,
                shortDesc: "ست ۱۰۰ عدد گیره رنگی",
                fullDesc: "۱۰۰ عدد گیره کاغذ رنگی، ضدزنگ، مناسب برای دسته‌بندی اسناد و کاغذها، در ۵ رنگ مختلف.",
                images: ["images/clips1.jpg"],
                thumbnails: ["images/clips1.jpg"]
            },
            {
                id: 15,
                title: "کیف لوازم تحریر",
                category: "کیف",
                price: 285000,
                shortDesc: "کیف کامل لوازم تحریر",
                fullDesc: "کیف کامل لوازم تحریر با ۳ محفظه، مناسب دانش‌آموزان دبستان، شامل خودکار، مداد ، پاک‌کن ، مداد رنگی ،ماژیک و ....",
                images: ["images/bag1.jpg", "images/bag1-2.jpg", "images/bag1-3.jpg"],
                thumbnails: ["images/bag1.jpg", "images/bag1-2.jpg", "images/bag1-3.jpg"]
            }
        ];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;
let currentQuantity = 1;

// رندر محصولات
function renderProducts(productsToShow = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img class="product-image" src="${product.images[0]}" alt="${product.title}" loading="lazy">
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-price">${product.price.toLocaleString()} تومان</div>
                <div>${product.shortDesc}</div>
            </div>
        </div>
    `).join('');
}

// نمایش جزئیات محصول
function showProductDetail(productId) {
    currentProduct = products.find(p => p.id == productId);
    if (!currentProduct) return;

    document.getElementById('detailTitle').textContent = currentProduct.title;
    document.getElementById('detailPrice').textContent = currentProduct.price.toLocaleString() + ' تومان';
    document.getElementById('detailDescription').textContent = currentProduct.fullDesc;
    document.getElementById('quantity').textContent = '1';
    currentQuantity = 1;

    const mainImg = document.getElementById('mainDetailImage');
    const gallery = document.getElementById('thumbnailGallery');
    
    mainImg.src = currentProduct.images[0];
    gallery.innerHTML = currentProduct.thumbnails.map((thumb, index) => 
        `<img class="thumbnail ${index === 0 ? 'active' : ''}" src="${thumb}" 
           data-main="${currentProduct.images[index] || currentProduct.images[0]}" alt="تصویر ${index + 1}">`
    ).join('');

    document.getElementById('productDetail').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// به‌روزرسانی شمارنده سبد خرید
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// افزودن به سبد خرید
function addToCart() {
    if (!currentProduct) return;
    const existingItem = cart.find(item => item.id === currentProduct.id);
    
    if (existingItem) {
        existingItem.quantity += currentQuantity;
    } else {
        cart.push({
            ...currentProduct,
            quantity: currentQuantity
        });
    }

    updateCartCount();
    showToast('محصول به سبد خرید اضافه شد! 🎉');
}

// نمایش سبد خرید
function showCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">سبد خرید خالی است 😊</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img class="cart-item-img" src="${item.images[0]}" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div>${item.shortDesc}</div>
                    <div style="margin-top: 0.5rem; color: #ff1493; font-weight: 600;">
                        ${item.price.toLocaleString()} تومان × ${item.quantity}
                    </div>
                </div>
                <button class="remove-cart-item" data-id="${item.id}">حذف</button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `مجموع: ${total.toLocaleString()} تومان`;

    document.getElementById('cartModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// حذف از سبد خرید
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    showCart();
}

// Toast ساده
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Event ها
document.addEventListener('click', function(e) {
    // کلیک روی کارت محصول
    if (e.target.closest('.product-card')) {
        const productId = e.target.closest('.product-card').dataset.id;
        showProductDetail(productId);
    }

    // بستن modal جزئیات
    if (e.target.id === 'closeDetail' || e.target === document.getElementById('productDetail')) {
        document.getElementById('productDetail').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // بستن سبد خرید با کلیک روی پس‌زمینه
    if (e.target === document.getElementById('cartModal')) {
        document.getElementById('cartModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // کنترل تعداد
    if (e.target.id === 'qtyPlus') {
        currentQuantity++;
        document.getElementById('quantity').textContent = currentQuantity;
    }
    if (e.target.id === 'qtyMinus' && currentQuantity > 1) {
        currentQuantity--;
        document.getElementById('quantity').textContent = currentQuantity;
    }

    // افزودن به سبد
    if (e.target.id === 'addToCart') {
        addToCart();
    }

    // حذف آیتم از سبد
    if (e.target.classList.contains('remove-cart-item')) {
        const productId = parseInt(e.target.dataset.id, 10);
        removeFromCart(productId);
    }

    // پاک کردن سبد
    if (e.target.id === 'clearCart') {
        cart = [];
        updateCartCount();
        showCart();
    }

    // تایید خرید
    if (e.target.id === 'checkoutBtn') {
        if (cart.length === 0) {
            showToast('سبد خرید خالی است!');
            return;
        }
        showToast('سفارش شما با موفقیت ثبت شد! 🚀');
        cart = [];
        updateCartCount();
        document.getElementById('cartModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // گالری تصاویر
    if (e.target.classList.contains('thumbnail')) {
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('mainDetailImage').src = e.target.dataset.main;
    }

    // دسته‌بندی‌ها
    if (e.target.classList.contains('category-btn')) {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const category = e.target.dataset.category;
        if (category === 'all') {
            renderProducts();
        } else {
            const filtered = products.filter(p => p.category === category);
            renderProducts(filtered);
        }
    }
});

// جستجو
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = products.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.shortDesc.toLowerCase().includes(query)
    );
    renderProducts(filtered);
});

// آیکون سبد خرید
document.getElementById('cartIcon').addEventListener('click', showCart);

// شروع اولیه
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
});

