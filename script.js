
/* =====================================================
   STYLEVERSE - COMPLETE JAVASCRIPT
   100 PRODUCTS | SEARCH | FILTERS | CART | WISHLIST
   CUSTOMIZATION | PRODUCT DETAILS
===================================================== */

"use strict";

/* ===================== PRODUCT DATA ===================== */

const products = [];

const productGroups = [
    {
        gender: "men",
        style: "casual",
        names: [
            "Classic Crew Neck T-Shirt",
            "Oversized Graphic T-Shirt",
            "Cotton Polo T-Shirt",
            "Striped Casual Shirt",
            "Linen Casual Shirt",
            "Slim Fit Jeans",
            "Relaxed Fit Jeans",
            "Cotton Joggers",
            "Cargo Pants",
            "Denim Shorts",
            "Casual Hoodie",
            "Zip-Up Sweatshirt",
            "Lightweight Bomber Jacket",
            "Checked Flannel Shirt",
            "Printed Summer Shirt",
            "Round Neck Vest",
            "Relaxed Cotton Trousers",
            "Basic Sweatshirt",
            "Denim Jacket",
            "Athletic Track Pants",
            "Henley Neck T-Shirt",
            "Washed Denim Shirt",
            "Drawstring Shorts",
            "Textured Knit Polo",
            "Everyday Cotton Shirt"
        ]
    },
    {
        gender: "men",
        style: "formal",
        names: [
            "Classic White Formal Shirt",
            "Slim Fit Black Shirt",
            "Oxford Blue Shirt",
            "Striped Office Shirt",
            "Premium Linen Shirt",
            "Formal Slim Fit Trousers",
            "Pleated Formal Trousers",
            "Classic Black Blazer",
            "Navy Blue Blazer",
            "Formal Waistcoat",
            "Double-Breasted Suit Jacket",
            "Tailored Grey Trousers",
            "Pinstripe Formal Shirt",
            "Executive White Shirt",
            "Charcoal Formal Pants",
            "Formal Checked Shirt",
            "Premium Suit Trousers",
            "Textured Formal Blazer",
            "Office Wear Chinos",
            "Classic Two-Piece Suit",
            "French Cuff Shirt",
            "Business Casual Shirt",
            "Tapered Formal Pants",
            "Formal Knit Sweater",
            "Evening Dress Shirt"
        ]
    },
    {
        gender: "women",
        style: "casual",
        names: [
            "Floral Summer Dress",
            "Classic Cotton Top",
            "Oversized Graphic T-Shirt",
            "High-Waist Blue Jeans",
            "Relaxed Fit Jeans",
            "Linen Wide-Leg Pants",
            "Casual Denim Skirt",
            "Pleated Mini Skirt",
            "Printed Kurti",
            "Cotton Everyday Kurti",
            "Cropped Denim Jacket",
            "Cozy Pullover Hoodie",
            "Ribbed Knit Top",
            "Striped Casual Shirt",
            "Sleeveless Summer Top",
            "Casual Jumpsuit",
            "Cotton Midi Dress",
            "Relaxed Palazzo Pants",
            "Basic Long-Sleeve Tee",
            "Printed Wrap Skirt",
            "Oversized Sweatshirt",
            "Denim Shorts",
            "Boho Printed Top",
            "Casual Shirt Dress",
            "Soft Cotton Co-ord Set"
        ]
    },
    {
        gender: "women",
        style: "formal",
        names: [
            "Elegant Black Blazer",
            "Tailored Formal Trousers",
            "Classic White Office Shirt",
            "Pencil Office Skirt",
            "Elegant Midi Dress",
            "Formal Navy Blue Pants",
            "Sleeved Office Dress",
            "Premium Satin Blouse",
            "Structured Work Blazer",
            "Formal Straight-Leg Pants",
            "Elegant Wrap Dress",
            "Pleated Formal Trousers",
            "Office Wear Kurta",
            "Classic Beige Blazer",
            "Formal Shirt Dress",
            "Tailored Waistcoat",
            "Premium Office Blouse",
            "High-Waist Formal Skirt",
            "Elegant Evening Gown",
            "Charcoal Work Trousers",
            "Formal Two-Piece Suit",
            "Longline Office Blazer",
            "Sleeveless Formal Top",
            "Classic Pencil Dress",
            "Premium Formal Co-ord Set"
        ]
    }
];

const groupPriceRanges = {
    "men-casual":  [499, 1799],
    "men-formal":  [899, 3999],
    "women-casual":[399, 1999],
    "women-formal":[799, 4499]
};

const clothingEmojis = {
    "men-casual": "👕",
    "men-formal": "👔",
    "women-casual": "👗",
    "women-formal": "👚"
};

let nextProductId = 1;

productGroups.forEach(function (group, groupIndex) {
    group.names.forEach(function (name, index) {
        const range =
            groupPriceRanges[group.gender + "-" + group.style];

        const priceStep = Math.floor(
            (range[1] - range[0]) / 24
        );

        const price = range[0] + (index * priceStep);

        products.push({
            id: nextProductId,
            name: name,
            price: Math.round(price / 10) * 10,
            gender: group.gender,
            style: group.style,
            category: group.gender,
            image: "",
            emoji: clothingEmojis[
                group.gender + "-" + group.style
            ],
            description:
                name + " from the STYLEVERSE collection. " +
                "Explore your style with this versatile piece.",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Black", "White", "Blue", "Beige"],
            customizable: true
        });

        nextProductId++;
    });
});

/* STYLEVERSE: Add 200 extra products */

const extraProductGroups = [
    {
        gender: "men",
        style: "casual",
        names: [
            "Casual Cotton T-Shirt", "Printed Graphic Tee",
            "Classic Polo Shirt", "Oversized T-Shirt",
            "Striped Casual Shirt", "Denim Shirt",
            "Linen Summer Shirt", "Casual Hoodie",
            "Zip-Up Sweatshirt", "Round Neck Tee",
            "Relaxed Fit Shirt", "Checked Casual Shirt",
            "Casual Joggers", "Slim Fit Jeans",
            "Straight Fit Jeans", "Cargo Pants",
            "Cotton Shorts", "Denim Shorts",
            "Casual Chinos", "Track Pants",
            "Lightweight Jacket", "Denim Jacket",
            "Bomber Jacket", "Casual Sweatshirt",
            "Printed Summer Shirt", "Henley T-Shirt",
            "Raglan Sleeve Tee", "Waffle Knit Shirt",
            "Textured Polo", "Color Block Tee",
            "Flannel Shirt", "Linen Blend Tee",
            "Relaxed Denim Jeans", "Tapered Joggers",
            "Utility Cargo Pants", "Casual Overshirt",
            "Quarter Zip Top", "Sleeveless Sports Tee",
            "Everyday Cotton Shirt", "Vintage Graphic Tee",
            "Minimal Logo Tee", "Beachwear Shirt",
            "Lightweight Windbreaker", "Fleece Hoodie",
            "Casual Knit Sweater", "Drawstring Shorts",
            "Relaxed Chinos", "Washed Denim Jacket",
            "Weekend Polo Shirt", "Everyday Casual Set"
        ]
    },
    {
        gender: "men",
        style: "formal",
        names: [
            "Classic Formal Shirt", "Slim Fit Dress Shirt",
            "White Office Shirt", "Blue Formal Shirt",
            "Pinstripe Dress Shirt", "Black Formal Shirt",
            "Oxford Business Shirt", "Formal Trousers",
            "Slim Fit Formal Pants", "Pleated Trousers",
            "Formal Blazer", "Classic Suit Jacket",
            "Two-Piece Suit", "Three-Piece Suit",
            "Formal Waistcoat", "Business Casual Blazer",
            "Tailored Chinos", "Office Wear Trousers",
            "Premium Dress Shirt", "Textured Formal Shirt",
            "Checked Office Shirt", "French Cuff Shirt",
            "Mandarin Collar Shirt", "Formal Knit Polo",
            "Charcoal Dress Pants", "Navy Formal Trousers",
            "Black Suit Trousers", "Beige Formal Pants",
            "Classic Black Blazer", "Navy Business Blazer",
            "Slim Fit Suit", "Modern Fit Suit",
            "Wedding Formal Shirt", "Executive Dress Shirt",
            "Formal Linen Shirt", "Long Sleeve Office Shirt",
            "Business Meeting Suit", "Formal Vest",
            "Striped Business Shirt", "Microprint Dress Shirt",
            "Premium Oxford Shirt", "Tailored Office Pants",
            "Formal Evening Blazer", "Classic Dinner Jacket",
            "Smart Office Trousers", "Structured Suit Jacket",
            "Minimal Formal Shirt", "Stretch Formal Pants",
            "Professional Work Shirt", "Premium Formal Set"
        ]
    },
    {
        gender: "women",
        style: "casual",
        names: [
            "Casual Cotton Top", "Floral Summer Dress",
            "Oversized T-Shirt", "Relaxed Fit Shirt",
            "Linen Casual Top", "Printed Crop Top",
            "Everyday Tunic", "Casual Midi Dress",
            "Denim Jacket", "Casual Hoodie",
            "Wide Leg Jeans", "High Waist Jeans",
            "Straight Fit Jeans", "Casual Joggers",
            "Cotton Shorts", "Denim Shorts",
            "Pleated Casual Skirt", "Floral Maxi Dress",
            "Striped T-Shirt", "Ribbed Tank Top",
            "Puff Sleeve Top", "Off Shoulder Top",
            "Wrap Casual Dress", "Relaxed Knit Sweater",
            "Button Down Shirt", "Checked Overshirt",
            "Printed Casual Shirt", "Everyday Leggings",
            "Cargo Pants", "Linen Wide Leg Pants",
            "Casual Co-Ord Set", "Graphic Tee",
            "Ruffle Sleeve Top", "Embroidered Tunic",
            "Smocked Summer Dress", "Tiered Midi Dress",
            "Lightweight Cardigan", "Zip-Up Sweatshirt",
            "Casual Blouse", "Boho Printed Top",
            "Relaxed Denim Jacket", "Cotton Day Dress",
            "Flared Jeans", "Drawstring Trousers",
            "Weekend Maxi Dress", "Knit Casual Top",
            "Sleeveless Summer Top", "Relaxed Fit Shorts",
            "Everyday Shirt Dress", "Casual Lounge Set"
        ]
    },
    {
        gender: "women",
        style: "formal",
        names: [
            "Classic Formal Blouse", "Office Wear Shirt",
            "Tailored Formal Trousers", "Slim Fit Work Pants",
            "Formal Pencil Skirt", "Structured Blazer",
            "Women's Business Suit", "Formal Midi Dress",
            "Elegant Office Dress", "Black Formal Blouse",
            "White Work Shirt", "Satin Formal Top",
            "Pleated Formal Trousers", "Navy Office Blazer",
            "Beige Tailored Pants", "Charcoal Work Pants",
            "Formal Shirt Dress", "Long Sleeve Blouse",
            "Collared Office Blouse", "Pinstripe Work Shirt",
            "Classic Black Trousers", "Premium Work Blazer",
            "Formal Waistcoat", "Elegant Wrap Dress",
            "Formal A-Line Dress", "Straight Fit Work Pants",
            "Minimal Office Top", "Textured Formal Blouse",
            "Women's Two-Piece Suit", "Cropped Formal Blazer",
            "Formal Wide Leg Pants", "High Waist Work Trousers",
            "Professional Pencil Dress", "Office Co-Ord Set",
            "Longline Formal Blazer", "Formal Pleated Skirt",
            "Silk Blend Blouse", "Classic White Blouse",
            "Navy Formal Dress", "Elegant Evening Blouse",
            "Tailored Vest Top", "Formal Straight Skirt",
            "Business Meeting Outfit", "Structured Work Shirt",
            "Premium Office Dress", "Modern Formal Suit",
            "Formal Collar Blouse", "Executive Workwear Set",
            "Smart Office Trousers", "Premium Formal Outfit"
        ]
    }
];

extraProductGroups.forEach(group => {
    group.names.forEach(name => {
        const productNumber = products.length + 1;

        products.push({
            id: productNumber,
            name: name,
            price: 799 + ((productNumber * 137) % 3200),
            gender: group.gender,
            style: group.style,
            category: group.gender,
            emoji: group.gender === "men" ? "👔" : "👗",
            description:
                "Discover the " + name +
                " from STYLEVERSE. Find your style and make it yours.",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Black", "White", "Blue", "Beige"],
            image: ""
        });
    });
});

console.log("Total STYLEVERSE products:", products.length);


const clothingImages = [
    // General fashion and clothing
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80"
];

// Assign an online image to every product.
products.forEach((product, index) => {
    product.image = clothingImages[index % clothingImages.length];
});


/* There are exactly 100 products. */

/* ===================== STORAGE ===================== */

function readStorage(key, fallback) {
    try {
        const saved = localStorage.getItem(key);

        if (saved === null) {
            return fallback;
        }

        const parsed = JSON.parse(saved);

        return parsed === null ? fallback : parsed;
    } catch (error) {
        console.warn("Could not read storage:", key);
        return fallback;
    }
}

function saveStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn("Could not save storage:", key);
    }
}

let cart = readStorage("styleverseCart", []);
let wishlist = readStorage("styleverseWishlist", []);

/* ===================== HELPERS ===================== */

function getProduct(id) {
    return products.find(function (product) {
        return product.id === Number(id);
    });
}

function formatPrice(price) {
    return "₹" + Number(price).toLocaleString("en-IN");
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return replacements[char];
    });
}

function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

function getProductImage(product) {
    if (product.image) {
        return `
            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                loading="lazy"
            >
        `;
    }

    return `
        <div class="product-placeholder" aria-label="Clothing placeholder">
            ${product.emoji}
        </div>
    `;
}

/* ===================== CART ===================== */

function saveCart() {
    saveStorage("styleverseCart", cart);
    updateCartCount();
}

function updateCartCount() {
    const countElement = document.getElementById("cart-count");

    if (!countElement) {
        return;
    }

    const count = cart.reduce(function (total, item) {
        return total + Number(item.quantity || 0);
    }, 0);

    countElement.textContent = count;
}

function addToCart(id, options = {}) {
    const product = getProduct(id);

    if (!product) {
        alert("Product not found.");
        return;
    }

    const size = options.size || "M";
    const color = options.color || "Black";
    const customText = options.customText || "";

    const existingItem = cart.find(function (item) {
        return item.id === product.id &&
            item.size === size &&
            item.color === color &&
            item.customText === customText;
    });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    size: size,
    color: color,
    customText: customText,
    emoji: product.emoji,
    image: product.image || product.productImage || ""
});
    }

    saveCart();
    alert(product.name + " added to your cart!");
}

function changeQuantity(id, change, size, color, customText) {
    const item = cart.find(function (cartItem) {
        return cartItem.id === Number(id) &&
            cartItem.size === size &&
            cartItem.color === color &&
            cartItem.customText === customText;
    });

    if (!item) {
        return;
    }

    item.quantity += Number(change);

    if (item.quantity <= 0) {
        cart = cart.filter(function (cartItem) {
            return cartItem !== item;
        });
    }

    saveCart();
    renderCart();
}

function removeFromCart(id, size, color, customText) {
    cart = cart.filter(function (item) {
        return !(
            item.id === Number(id) &&
            item.size === size &&
            item.color === color &&
            item.customText === customText
        );
    });

    saveCart();
    renderCart();
}

function getCartTotal() {
    return cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
    }, 0);
}

function renderCart() {
    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");
    const subtotalElement = document.getElementById("cart-subtotal");
    const emptyMessage = document.getElementById("cart-empty");

    if (!container) {
        return;
    }

    if (cart.length === 0) {
        container.innerHTML = "";

        if (emptyMessage) {
            emptyMessage.style.display = "block";
        }

        if (totalElement) {
            totalElement.textContent = formatPrice(0);
        }

        if (subtotalElement) {
            subtotalElement.textContent = formatPrice(0);
        }

        return;
    }

    if (emptyMessage) {
        emptyMessage.style.display = "none";
    }

    container.innerHTML = cart.map(function (item) {
        const safeName = escapeHTML(item.name);
        const safeSize = escapeHTML(item.size);
        const safeColor = escapeHTML(item.color);
        const safeText = escapeHTML(item.customText || "");

        const options = JSON.stringify([
            item.size,
            item.color,
            item.customText || ""
        ]).replace(/</g, "\\u003c");

        return `
            <article class="cart-item">
               <div class="product-placeholder">
    <img
        src="${escapeHTML(item.image || item.productImage || "")}"
        alt="${safeName}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
        style="width:100%; height:100%; object-fit:cover;"
    >
    <span style="display:none;">
        ${escapeHTML(item.emoji || "👕")}
    </span>
</div>
                <div class="cart-item-details">
                    <h3>${safeName}</h3>
                    <p>Size: ${safeSize}</p>
                    <p>Color: ${safeColor}</p>
                    ${safeText ? `<p>Custom text: ${safeText}</p>` : ""}
                    <p>${formatPrice(item.price)}</p>

                    <div class="quantity-control">
                        <button
                            onclick='changeQuantity(${item.id}, -1, ...${options})'
                            aria-label="Decrease quantity"
                        >−</button>

                        <span>${item.quantity}</span>

                        <button
                            onclick='changeQuantity(${item.id}, 1, ...${options})'
                            aria-label="Increase quantity"
                        >+</button>
                    </div>

                    <button
                        class="remove-button"
                        onclick='removeFromCart(${item.id}, ...${options})'
                    >Remove</button>
                </div>

                <strong>
                    ${formatPrice(item.price * item.quantity)}
                </strong>
            </article>
        `;
    }).join("");

    if (totalElement) {
        totalElement.textContent = formatPrice(getCartTotal());
    }

    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(getCartTotal());
    }
}

/* ===================== WISHLIST ===================== */

function saveWishlist() {
    saveStorage("styleverseWishlist", wishlist);
}

function toggleWishlist(id) {
    const product = getProduct(id);

    if (!product) {
        return;
    }

    const exists = wishlist.some(function (item) {
        return Number(item.id) === product.id;
    });

    if (exists) {
        wishlist = wishlist.filter(function (item) {
            return Number(item.id) !== product.id;
        });

        alert("Removed from your wishlist.");
    } else {
        wishlist.push({
            id: product.id
        });

        alert("Added to your wishlist!");
    }

    saveWishlist();
    renderWishlist();
    renderFeaturedProducts();
    renderShopProducts();
}

function isWishlisted(id) {
    return wishlist.some(function (item) {
        return Number(item.id) === Number(id);
    });
}

function renderWishlist() {
    const container = document.getElementById("wishlist-products");

    if (!container) {
        return;
    }

    const savedProducts = wishlist
        .map(function (item) {
            return getProduct(item.id);
        })
        .filter(Boolean);

    if (savedProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-message">
                <h2>Your wishlist is empty</h2>
                <p>Save your favorite styles to find them here.</p>
                <a class="btn btn-primary" href="shop.html">Explore Products</a>
            </div>
        `;
        return;
    }

    container.innerHTML = savedProducts.map(createProductCard).join("");
}

/* ===================== PRODUCT CARDS ===================== */

function createProductCard(product) {
    const wished = isWishlisted(product.id);

    return `
        <article class="product-card">
            <a
                class="product-image"
                href="product.html?id=${product.id}"
                aria-label="View ${escapeHTML(product.name)}"
            >
                ${getProductImage(product)}
            </a>

            <div class="product-details">
                <p class="product-category">
                    ${escapeHTML(product.gender)} ·
                    ${escapeHTML(product.style)}
                </p>

                <h3>
                    <a href="product.html?id=${product.id}">
                        ${escapeHTML(product.name)}
                    </a>
                </h3>

                <p class="product-price">
                    ${formatPrice(product.price)}
                </p>

                <div class="product-actions">
                    <button
                        class="add-to-cart"
                        onclick="addToCart(${product.id})"
                    >Add to Cart</button>

                    <button
                        class="wishlist-btn"
                        onclick="toggleWishlist(${product.id})"
                        aria-label="Toggle wishlist"
                    >${wished ? "♥ Saved" : "♡ Wishlist"}</button>
                </div>

                <a
                    class="btn btn-secondary"
                    style="margin-top: 10px; width: 100%;"
                    href="product.html?id=${product.id}"
                >View Details</a>
            </div>
        </article>
    `;
}

/* ===================== HOME PAGE ===================== */

function renderFeaturedProducts() {
    const container = document.getElementById("featured-products");

    if (!container) {
        return;
    }

    const featured = products.slice(0, 8);

    container.innerHTML = featured.map(createProductCard).join("");
}

/* ===================== SHOP PAGE ===================== */

function renderShopProducts() {
    const container = document.getElementById("product-grid");

    if (!container) {
        return;
    }

    const searchInput = document.getElementById("shop-search");
    const genderFilter = document.getElementById("gender-filter");
    const styleFilter = document.getElementById("style-filter");
    const sortFilter = document.getElementById("sort-filter");
    const resultCount = document.getElementById("result-count");

    const params = new URLSearchParams(window.location.search);

    let search = (
        searchInput ? searchInput.value : params.get("search") || ""
    ).trim().toLowerCase();

    let gender = genderFilter ? genderFilter.value : "";
    let style = styleFilter ? styleFilter.value : "";

    if (!gender && !style) {
        const category = (params.get("category") || "").toLowerCase();

        if (category === "men" || category === "women") {
            gender = category;
        } else if (category === "casual" || category === "formal") {
            style = category;
        }
    }

    let filtered = products.filter(function (product) {
        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.gender.includes(search) ||
            product.style.includes(search);

        const matchesGender = !gender || product.gender === gender;
        const matchesStyle = !style || product.style === style;

        return matchesSearch && matchesGender && matchesStyle;
    });

    if (sortFilter) {
        if (sortFilter.value === "price-low") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortFilter.value === "price-high") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortFilter.value === "name") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    if (resultCount) {
        resultCount.textContent =
            filtered.length + " products found";
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-message">
                <h2>No products found</h2>
                <p>Try another search or change your filters.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(createProductCard).join("");
}

/* ===================== SEARCH ===================== */

function toggleSearch() {
    const container = document.getElementById("search-container");

    if (!container) {
        return;
    }

    container.classList.toggle("active");

    if (container.classList.contains("active")) {
        const input = document.getElementById("search-input");

        if (input) {
            input.focus();
        }
    }
}

function closeSearch() {
    const container = document.getElementById("search-container");

    if (container) {
        container.classList.remove("active");
    }
}

function searchProducts() {
    const input = document.getElementById("search-input");

    if (!input) {
        return;
    }

    if (window.location.pathname.endsWith("shop.html")) {
        const shopInput = document.getElementById("shop-search");

        if (shopInput) {
            shopInput.value = input.value;
        }

        renderShopProducts();
        return;
    }

    if (window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/")) {

        if (input.value.trim() === "") {
            renderFeaturedProducts();
        }
    }
}

function submitSearch(event) {
    if (event) {
        event.preventDefault();
    }

    const input = document.getElementById("search-input");

    if (input && input.value.trim()) {
        window.location.href =
            "shop.html?search=" +
            encodeURIComponent(input.value.trim());
    }
}

/* ===================== MOBILE MENU ===================== */

function toggleMenu() {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("active");
    }
}

/* ===================== PRODUCT DETAILS ===================== */

function renderProductDetails() {
    const container = document.getElementById("product-detail");

    if (!container) {
        return;
    }

    const product = getProduct(getParam("id"));

    if (!product) {
        container.innerHTML = `
            <div class="empty-message">
                <h2>Product not found</h2>
                <p>Please return to the shop and choose a product.</p>
                <a href="shop.html" class="btn btn-primary">Go to Shop</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="product-layout">
            <div class="product-detail-image">
                ${getProductImage(product)}
            </div>

            <div class="product-detail-info">
                <p class="product-category">
                    ${escapeHTML(product.gender)} ·
                    ${escapeHTML(product.style)}
                </p>

                <h1>${escapeHTML(product.name)}</h1>

                <p class="product-price">${formatPrice(product.price)}</p>

                <p>${escapeHTML(product.description)}</p>

                <div class="form-group">
                    <label for="product-size">Choose Size</label>
                    <select id="product-size" class="form-control">
                        ${product.sizes.map(size =>
                            `<option value="${size}">${size}</option>`
                        ).join("")}
                    </select>
                </div>

                <div class="form-group">
                    <label for="product-color">Choose Color</label>
                    <select id="product-color" class="form-control">
                        ${product.colors.map(color =>
                            `<option value="${color}">${color}</option>`
                        ).join("")}
                    </select>
                </div>

                <button
                    class="btn btn-primary"
                    onclick="addProductDetailsToCart(${product.id})"
                >Add to Cart</button>

                <button
                    class="btn btn-secondary"
                    onclick="toggleWishlist(${product.id})"
                >♡ Wishlist</button>

                <p style="margin-top: 20px;">
                    <a href="customize.html?id=${product.id}">
                        Customize this product →
                    </a>
                </p>
            </div>
        </div>
    `;
}

function addProductDetailsToCart(id) {
    const size = document.getElementById("product-size");
    const color = document.getElementById("product-color");

    addToCart(id, {
        size: size ? size.value : "M",
        color: color ? color.value : "Black"
    });
}

/* ===================== CUSTOMIZATION ===================== */

function renderCustomization() {
    const container = document.getElementById("customization-form");

    if (!container) {
        return;
    }

    const product = getProduct(getParam("id")) || products[0];

    container.innerHTML = `
        <div class="form-group">
            <label for="custom-product">Choose Clothing</label>
            <select id="custom-product" class="form-control">
                ${products.map(item => `
                    <option
                        value="${item.id}"
                        ${item.id === product.id ? "selected" : ""}
                    >${escapeHTML(item.name)} - ${formatPrice(item.price)}</option>
                `).join("")}
            </select>
        </div>

        <div class="form-group">
            <label for="custom-text">Your Text or Name</label>
            <input
                type="text"
                id="custom-text"
                maxlength="30"
                placeholder="Enter your text"
            >
        </div>

        <div class="form-group">
            <label for="custom-size">Size</label>
            <select id="custom-size" class="form-control">
                ${product.sizes.map(size =>
                    `<option value="${size}">${size}</option>`
                ).join("")}
            </select>
        </div>

        <div class="form-group">
            <label for="custom-color">Clothing Color</label>
            <select id="custom-color" class="form-control">
                ${product.colors.map(color =>
                    `<option value="${color}">${color}</option>`
                ).join("")}
            </select>
        </div>

        <button
            type="button"
            class="btn btn-primary"
            onclick="addCustomizedProductToCart()"
        >Add Customized Item to Cart</button>
    `;

    updateCustomizationPreview();
}

function updateCustomizationPreview() {
    const textInput = document.getElementById("custom-text");
    const preview = document.getElementById("custom-preview-text");
    const productSelect = document.getElementById("custom-product");
    const previewImage = document.getElementById("custom-preview-image");

    if (preview) {
        preview.textContent = textInput && textInput.value.trim()
            ? textInput.value.trim()
            : "YOUR STYLE";
    }

    if (productSelect && previewImage) {
        const product = getProduct(productSelect.value);

        if (product) {
            previewImage.textContent = product.emoji;
        }
    }
}

function addCustomizedProductToCart() {
    const productSelect = document.getElementById("custom-product");
    const textInput = document.getElementById("custom-text");
    const sizeSelect = document.getElementById("custom-size");
    const colorSelect = document.getElementById("custom-color");

    if (!productSelect) {
        return;
    }

    addToCart(productSelect.value, {
        customText: textInput ? textInput.value.trim() : "",
        size: sizeSelect ? sizeSelect.value : "M",
        color: colorSelect ? colorSelect.value : "Black"
    });
}

/* ===================== CHECKOUT ===================== */

function renderCheckout() {
    const container = document.getElementById("checkout-items");
    const totalElement = document.getElementById("checkout-total");

    if (container) {
        if (cart.length === 0) {
            container.innerHTML = `
                <p>Your cart is empty.</p>
                <a href="shop.html" class="btn btn-primary">Shop Now</a>
            `;
        } else {
            container.innerHTML = cart.map(function (item) {
                return `
                    <div class="summary-row">
                        <span>
                            ${escapeHTML(item.name)}
                            × ${item.quantity}
                        </span>
                        <strong>
                            ${formatPrice(item.price * item.quantity)}
                        </strong>
                    </div>
                `;
            }).join("");
        }
    }

    if (totalElement) {
        totalElement.textContent = formatPrice(getCartTotal());
    }
}

function placeOrder(event) {
    if (event) {
        event.preventDefault();
    }

    if (cart.length === 0) {
        alert("Your cart is empty. Add products before checkout.");
        return;
    }

    const form = document.getElementById("checkout-form");

    if (form && !form.reportValidity()) {
        return;
    }

    const order = {
        orderNumber: "SV" + Date.now(),
        items: cart,
        total: getCartTotal(),
        date: new Date().toISOString()
    };

    const previousOrders = readStorage("styleverseOrders", []);

    previousOrders.push(order);
    saveStorage("styleverseOrders", previousOrders);

    cart = [];
    saveCart();

    const container = document.getElementById("checkout-content");

    if (container) {
        container.innerHTML = `
            <div class="checkout-success">
                <h1>Thank You for Your Order!</h1>
                <p>Your demo order has been recorded in this browser.</p>
                <p>Order number: ${escapeHTML(order.orderNumber)}</p>
                <p>Total: ${formatPrice(order.total)}</p>
                <p>This is a frontend demonstration, not a real payment.</p>
                <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
    } else {
        alert(
            "Demo order placed! Order number: " +
            order.orderNumber +
            ". No payment was processed."
        );

        window.location.href = "index.html";
    }
}

/* ===================== INITIALIZATION ===================== */

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();

    renderFeaturedProducts();
    renderShopProducts();
    renderWishlist();
    renderCart();
    renderProductDetails();
    renderCustomization();
    renderCheckout();

    const shopSearch = document.getElementById("shop-search");
    const genderFilter = document.getElementById("gender-filter");
    const styleFilter = document.getElementById("style-filter");
    const sortFilter = document.getElementById("sort-filter");

    if (shopSearch) {
        const searchParam = getParam("search");

        if (searchParam) {
            shopSearch.value = searchParam;
        }

        shopSearch.addEventListener("input", renderShopProducts);
    }

    if (genderFilter) {
        const category = getParam("category");

        if (category === "men" || category === "women") {
            genderFilter.value = category;
        }

        genderFilter.addEventListener("change", renderShopProducts);
    }

    if (styleFilter) {
        const category = getParam("category");

        if (category === "casual" || category === "formal") {
            styleFilter.value = category;
        }

        styleFilter.addEventListener("change", renderShopProducts);
    }

    if (sortFilter) {
        sortFilter.addEventListener("change", renderShopProducts);
    }

    const customText = document.getElementById("custom-text");
    const customProduct = document.getElementById("custom-product");

    if (customText) {
        customText.addEventListener("input", updateCustomizationPreview);
    }

    if (customProduct) {
        customProduct.addEventListener("change", function () {
            const product = getProduct(customProduct.value);

            if (!product) {
                return;
            }

            const size = document.getElementById("custom-size");
            const color = document.getElementById("custom-color");

            if (size) {
                size.innerHTML = product.sizes.map(item =>
                    `<option value="${item}">${item}</option>`
                ).join("");
            }

            if (color) {
                color.innerHTML = product.colors.map(item =>
                    `<option value="${item}">${item}</option>`
                ).join("");
            }

            updateCustomizationPreview();
        });
    }

    const checkoutForm = document.getElementById("checkout-form");

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", placeOrder);
    }

    const searchInput = document.getElementById("search-input");

    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                submitSearch(event);
            }
        });
    }

    console.log("STYLEVERSE loaded successfully.");
    console.log("Total products:", products.length);
});
