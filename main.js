// ShoeZone Store - Main JavaScript Functionality
// Updated for WhatsApp Direct Purchasing

class ShoeZoneStore {
    constructor() {
        this.products = this.initializeShoeProducts();
        this.filteredProducts = [...this.products];
        this.selectedSize = {};
        this.whatsappNumber = '03195985750'; // Your WhatsApp number
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.renderProducts();
        this.setupScrollAnimations();
        this.initializeCarousels();
    }

    // Ladies Shoe Product Data
    initializeShoeProducts() {
        return [
            // Heels & Pumps
            { 
                id: 1, 
                name: 'Classic Patent Pumps', 
                category: 'heels', 
                subcategory: 'pumps', 
                price: 185, 
                originalPrice: 220, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/8455ca84ebd70e0879ae7ed3e6028def52ace4d9.jpg', 
                description: 'Timeless elegance meets modern comfort in these essential patent leather pumps', 
                featured: true,
                heelHeight: '3.5 inches',
                material: 'Patent Leather',
                occasion: 'Formal'
            },
            { 
                id: 2, 
                name: 'Suede Kitten Heels', 
                category: 'heels', 
                subcategory: 'kitten-heels', 
                price: 165, 
                color: 'nude', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'], 
                image: 'https://kimi-web-img.moonshot.cn/img/www.styleatacertainage.com/2cd96f7d58ae239f9ff310a0c8dfb46cc1a6c9f3.jpg', 
                description: 'Sophisticated kitten heels in soft suede, perfect for all-day wear', 
                featured: false,
                heelHeight: '2 inches',
                material: 'Suede',
                occasion: 'Office'
            },
            { 
                id: 3, 
                name: 'Block Heel Sandals', 
                category: 'heels', 
                subcategory: 'block-heels', 
                price: 145, 
                color: 'tan', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/3a59e50f6ce73f6d83c57310f0f8c50780475272.jpg', 
                description: 'Comfortable block heel sandals with ankle strap for secure fit', 
                featured: true,
                heelHeight: '2.5 inches',
                material: 'Leather',
                occasion: 'Casual'
            },
            { 
                id: 4, 
                name: 'Strappy Stiletto Heels', 
                category: 'heels', 
                subcategory: 'stilettos', 
                price: 195, 
                color: 'red', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'], 
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/79d509808f55318c7a229943b49ac1aba167b40c.jpg', 
                description: 'Dramatic strappy stilettos that command attention', 
                featured: false,
                heelHeight: '4 inches',
                material: 'Suede',
                occasion: 'Evening'
            },
            { 
                id: 5, 
                name: 'Platform Pumps', 
                category: 'heels', 
                subcategory: 'platforms', 
                price: 175, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'], 
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/d567885ec6fdff9a1e9af113dd3c3ad022f04986.jpg', 
                description: 'Vintage-inspired platform pumps with modern comfort', 
                featured: false,
                heelHeight: '4.5 inches',
                material: 'Leather',
                occasion: 'Party'
            },

            // Flats
            { 
                id: 6, 
                name: 'Classic Ballet Flats', 
                category: 'flats', 
                subcategory: 'ballet-flats', 
                price: 125, 
                color: 'nude', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'], 
                image: 'https://kimi-web-img.moonshot.cn/img/alohas.com/aad8649d6c10e87342b0d91885464fa5781b306b.jpg', 
                description: 'Essential ballet flats crafted from premium leather', 
                featured: true,
                heelHeight: 'Flat',
                material: 'Leather',
                occasion: 'Everyday'
            },
            { 
                id: 7, 
                name: 'Pointed Toe Flats', 
                category: 'flats', 
                subcategory: 'pointed-toe', 
                price: 135, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/us.ballerette.com/0244f690964403f09e0027518535887c687224a2.jpg', 
                description: 'Sophisticated pointed toe flats perfect for the office', 
                featured: false,
                heelHeight: 'Flat',
                material: 'Patent Leather',
                occasion: 'Office'
            },
            { 
                id: 8, 
                name: 'Mary Jane Flats', 
                category: 'flats', 
                subcategory: 'mary-jane', 
                price: 140, 
                color: 'burgundy', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'], 
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/df6b1544c765ff189de6daf1381873dbf5d3b597.jpg', 
                description: 'Vintage-inspired Mary Jane flats with modern twist', 
                featured: false,
                heelHeight: 'Flat',
                material: 'Leather',
                occasion: 'Casual'
            },
            { 
                id: 9, 
                name: 'Loafers', 
                category: 'flats', 
                subcategory: 'loafers', 
                price: 155, 
                color: 'brown', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/shoesmentor.com/988786daa38df9239a8c452d9a72705d36ad3aee.jpg', 
                description: 'Classic penny loafers with timeless appeal', 
                featured: true,
                heelHeight: 'Flat',
                material: 'Leather',
                occasion: 'Office'
            },
            { 
                id: 10, 
                name: 'Espadrille Flats', 
                category: 'flats', 
                subcategory: 'espadrilles', 
                price: 115, 
                color: 'natural', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/media1.popsugar-assets.com/07fab3aeb21aa1e6f67cb8da0f4211b0c9fe9b34.jpg', 
                description: 'Summer-ready espadrille flats with jute sole', 
                featured: false,
                heelHeight: 'Flat',
                material: 'Canvas/Jute',
                occasion: 'Summer'
            },

            // Boots
            { 
                id: 11, 
                name: 'Ankle Boots', 
                category: 'boots', 
                subcategory: 'ankle-boots', 
                price: 195, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/media.karousell.com/fc392ff43c3f6829bc9b0b122f179a0a73588c01.jpg', 
                description: 'Versatile leather ankle boots with side zipper', 
                featured: true,
                heelHeight: '2 inches',
                material: 'Leather',
                occasion: 'Fall/Winter'
            },
            { 
                id: 12, 
                name: 'Knee-High Boots', 
                category: 'boots', 
                subcategory: 'knee-high', 
                price: 245, 
                color: 'brown', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'], 
                image: 'https://kimi-web-img.moonshot.cn/img/images.bauerhosting.com/f2cf32ae1f7c6a04d96d95cfb397b71355a623e9.jpeg', 
                description: 'Classic knee-high boots in rich brown leather', 
                featured: true,
                heelHeight: '2.5 inches',
                material: 'Leather',
                occasion: 'Fall/Winter'
            },
            { 
                id: 13, 
                name: 'Chelsea Boots', 
                category: 'boots', 
                subcategory: 'chelsea-boots', 
                price: 175, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'], 
                image: 'https://kimi-web-img.moonshot.cn/img/media.karousell.com/6be0f52beea3d582c4222a1a163894e6def2bc86.jpg', 
                description: 'Effortless Chelsea boots with elastic side panels', 
                featured: false,
                heelHeight: '1.5 inches',
                material: 'Leather',
                occasion: 'Casual'
            },
            { 
                id: 14, 
                name: 'Combat Boots', 
                category: 'boots', 
                subcategory: 'combat-boots', 
                price: 185, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'], 
                image: 'https://kimi-web-img.moonshot.cn/img/www.simplybe.co.uk/d69c1ef8ca88e1667e6a915bffbe5c1572423614.jpg', 
                description: 'Edgy combat boots with lug sole', 
                featured: false,
                heelHeight: '1.5 inches',
                material: 'Leather',
                occasion: 'Casual'
            },
            { 
                id: 15, 
                name: 'Western Boots', 
                category: 'boots', 
                subcategory: 'western-boots', 
                price: 215, 
                color: 'tan', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/www.vogue.com/2cd96f7d58ae239f9ff310a0c8dfb46cc1a6c9f3.jpg', 
                description: 'Authentic western boots with traditional stitching', 
                featured: false,
                heelHeight: '2 inches',
                material: 'Leather',
                occasion: 'Casual'
            },

            // Sandals
            { 
                id: 16, 
                name: 'Strappy Sandals', 
                category: 'sandals', 
                subcategory: 'strappy-sandals', 
                price: 135, 
                color: 'gold', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/www.brit.co/d69c1ef8ca88e1667e6a915bffbe5c1572423614.jpg', 
                description: 'Elegant strappy sandals perfect for summer events', 
                featured: true,
                heelHeight: 'Flat',
                material: 'Leather',
                occasion: 'Summer'
            },
            { 
                id: 17, 
                name: 'Gladiator Sandals', 
                category: 'sandals', 
                subcategory: 'gladiator-sandals', 
                price: 125, 
                color: 'brown', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'], 
                image: 'https://kimi-web-img.moonshot.cn/img/www.fashionactivation.com/85707362319c5bbf16d2cdc75f1bcdca0bbd0aea.jpg', 
                description: 'Bohemian gladiator sandals with intricate straps', 
                featured: false,
                heelHeight: 'Flat',
                material: 'Leather',
                occasion: 'Summer'
            },
            { 
                id: 18, 
                name: 'Slide Sandals', 
                category: 'sandals', 
                subcategory: 'slide-sandals', 
                price: 95, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'], 
                image: 'https://kimi-web-img.moonshot.cn/img/i1.wp.com/f3bccfeb0c470d72867ce3affa96b7f948fc1ce2.jpg', 
                description: 'Comfortable slide sandals with cushioned footbed', 
                featured: false,
                heelHeight: 'Flat',
                material: 'Synthetic',
                occasion: 'Casual'
            },
            { 
                id: 19, 
                name: 'Wedge Sandals', 
                category: 'sandals', 
                subcategory: 'wedge-sandals', 
                price: 145, 
                color: 'natural', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/3a59e50f6ce73f6d83c57310f0f8c50780475272.jpg', 
                description: 'Comfortable wedge sandals with espadrille details', 
                featured: true,
                heelHeight: '3 inches',
                material: 'Canvas/Jute',
                occasion: 'Summer'
            },
            { 
                id: 20, 
                name: 'Slingback Sandals', 
                category: 'sandals', 
                subcategory: 'slingback-sandals', 
                price: 155, 
                color: 'nude', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'], 
                image: 'https://kimi-web-img.moonshot.cn/img/www.frillystyle.com/ddbc15864b4f60a67e8e529d7f26b2e9be6c3fd0.png', 
                description: 'Sophisticated slingback sandals with low heel', 
                featured: false,
                heelHeight: '2 inches',
                material: 'Leather',
                occasion: 'Dressy'
            },

            // Sneakers
            { 
                id: 21, 
                name: 'White Leather Sneakers', 
                category: 'sneakers', 
                subcategory: 'fashion-sneakers', 
                price: 135, 
                color: 'white', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'], 
                image: 'https://kimi-web-img.moonshot.cn/img/www.jetsetmag.com/2cd96f7d58ae239f9ff310a0c8dfb46cc1a6c9f3.jpg', 
                description: 'Classic white leather sneakers for everyday style', 
                featured: true,
                heelHeight: 'Flat',
                material: 'Leather',
                occasion: 'Casual'
            },
            { 
                id: 22, 
                name: 'Platform Sneakers', 
                category: 'sneakers', 
                subcategory: 'platform-sneakers', 
                price: 155, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/79d509808f55318c7a229943b49ac1aba167b40c.jpg', 
                description: 'Trendy platform sneakers with hidden height boost', 
                featured: false,
                heelHeight: '2 inches',
                material: 'Canvas',
                occasion: 'Casual'
            },

            // Mules
            { 
                id: 23, 
                name: 'Backless Mules', 
                category: 'mules', 
                subcategory: 'flat-mules', 
                price: 125, 
                color: 'black', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'], 
                image: 'https://kimi-web-img.moonshot.cn/img/imgix.theurbanlist.com/cc0eca7730358f5982197c5a6ae1cc4f64efdefc.jpg', 
                description: 'Chic backless mules with pointed toe design', 
                featured: false,
                heelHeight: 'Flat',
                material: 'Leather',
                occasion: 'Casual'
            },
            { 
                id: 24, 
                name: 'Heeled Mules', 
                category: 'mules', 
                subcategory: 'heeled-mules', 
                price: 165, 
                color: 'nude', 
                sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'], 
                image: 'https://kimi-web-img.moonshot.cn/img/imgix.theurbanlist.com/cc0eca7730358f5982197c5a6ae1cc4f64efdefc.jpg', 
                description: 'Elegant heeled mules perfect for dressy occasions', 
                featured: true,
                heelHeight: '3 inches',
                material: 'Suede',
                occasion: 'Dressy'
            }
        ];
    }

    // Event Listeners Setup
    setupEventListeners() {
        document.addEventListener('click', (e) => {
            // WhatsApp Buy Now functionality
            if (e.target.matches('.buy-now-btn') || e.target.closest('.buy-now-btn')) {
                const productId = parseInt(e.target.dataset.productId || e.target.closest('.buy-now-btn').dataset.productId);
                this.buyNow(productId);
            }
            
            // Size selection
            if (e.target.matches('.size-option')) {
                const productId = parseInt(e.target.dataset.productId);
                const size = e.target.dataset.size;
                this.selectSize(productId, size, e.target);
            }
            
            // Quick view
            if (e.target.matches('.quick-view-btn') || e.target.closest('.quick-view-btn')) {
                const productId = parseInt(e.target.dataset.productId || e.target.closest('.quick-view-btn').dataset.productId);
                this.openQuickView(productId);
            }
            
            // Close modal
            if (e.target.matches('.close-modal') || e.target.closest('.close-modal')) {
                this.closeModal();
            }
            
            // Mobile menu toggle
            if (e.target.matches('.mobile-menu-toggle') || e.target.closest('.mobile-menu-toggle')) {
                document.querySelector('.mobile-menu').classList.toggle('hidden');
            }
        });

        // Filter functionality
        document.addEventListener('change', (e) => {
            if (e.target.matches('.filter-checkbox') || e.target.matches('.price-range') || e.target.matches('.color-filter')) {
                this.applyFilters();
            }
        });

        // Search functionality
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchProducts(e.target.value);
            });
        }
    }

    // WhatsApp Buy Now Functionality
    selectSize(productId, size, element) {
        this.selectedSize[productId] = size;
        
        // Update UI
        const sizeOptions = element.parentNode.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            option.classList.remove('bg-sage-green', 'text-white');
            option.classList.add('bg-gray-100', 'text-gray-700');
        });
        
        element.classList.remove('bg-gray-100', 'text-gray-700');
        element.classList.add('bg-sage-green', 'text-white');
    }

    getDefaultSize(productId) {
        const product = this.products.find(p => p.id === productId);
        return product ? product.sizes[2] : '7'; // Default to size 7
    }

    buyNow(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const selectedSize = this.selectedSize[productId] || this.getDefaultSize(productId);
        const message = this.generateWhatsAppMessage(product, selectedSize);
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Show purchase notification
        this.showPurchaseNotification(product.name, selectedSize);
    }

    generateWhatsAppMessage(product, size) {
        return `Hi! I'm interested in purchasing the following item:

👠 *${product.name}*
📏 Size: ${size}
💰 Price: $${product.price}${product.originalPrice ? ` (was $${product.originalPrice})` : ''}
🎨 Color: ${product.color}
📐 Heel Height: ${product.heelHeight}
🧵 Material: ${product.material}

Please let me know about:
• Availability
• Payment methods
• Delivery options

Thank you! 😊`;
    }

    showPurchaseNotification(productName, size) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.innerHTML = `
            <div class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <span>Redirecting to WhatsApp for ${productName} (Size ${size})</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Enhanced Product Filtering for Shoes
    applyFilters() {
        const categoryFilters = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
        const colorFilters = Array.from(document.querySelectorAll('.color-filter:checked')).map(cb => cb.value);
        const priceRange = document.querySelector('.price-range')?.value || 300;
        const occasionFilters = Array.from(document.querySelectorAll('.occasion-filter:checked')).map(cb => cb.value);
        
        this.filteredProducts = this.products.filter(product => {
            const categoryMatch = categoryFilters.length === 0 || categoryFilters.includes(product.category);
            const colorMatch = colorFilters.length === 0 || colorFilters.includes(product.color);
            const priceMatch = product.price <= priceRange;
            const occasionMatch = occasionFilters.length === 0 || occasionFilters.includes(product.occasion);
            
            return categoryMatch && colorMatch && priceMatch && occasionMatch;
        });

        this.renderProducts();
    }

    searchProducts(query) {
        if (!query.trim()) {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase()) ||
                product.subcategory.toLowerCase().includes(query.toLowerCase()) ||
                product.occasion.toLowerCase().includes(query.toLowerCase())
            );
        }
        
        this.renderProducts();
    }

    // Enhanced Product Rendering with WhatsApp Buy Now
    renderProducts() {
        const productGrid = document.querySelector('.product-grid');
        if (!productGrid) return;

        productGrid.innerHTML = this.filteredProducts.map(product => `
            <div class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
                    ${product.originalPrice ? `<div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">Sale</div>` : ''}
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
                    <p class="text-gray-600 text-sm mb-3">${product.description}</p>
                    
                    <!-- Size Selection -->
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Size</label>
                        <div class="flex flex-wrap gap-2">
                            ${product.sizes.map((size, index) => `
                                <button class="size-option px-3 py-1 text-sm border rounded ${index === 2 ? 'bg-sage-green text-white' : 'bg-gray-100 text-gray-700'} hover:bg-sage-green hover:text-white transition-colors" 
                                        data-product-id="${product.id}" 
                                        data-size="${size}">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center space-x-2">
                            <span class="text-xl font-bold text-gray-900">$${product.price}</span>
                            ${product.originalPrice ? `<span class="text-sm text-gray-500 line-through">$${product.originalPrice}</span>` : ''}
                        </div>
                        <div class="flex space-x-1">
                            ${Array.from({length: 5}, (_, i) => `
                                <svg class="w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Product Details -->
                    <div class="text-sm text-gray-600 mb-3">
                        <div class="flex justify-between">
                            <span>Heel Height:</span>
                            <span>${product.heelHeight}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Material:</span>
                            <span>${product.material}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Occasion:</span>
                            <span>${product.occasion}</span>
                        </div>
                    </div>
                    
                    <div class="flex space-x-2">
                        <button class="flex-1 btn-primary text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors buy-now-btn" 
                                data-product-id="${product.id}">
                            Buy Now
                        </button>
                        <button class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors quick-view-btn" 
                                data-product-id="${product.id}">
                            Quick View
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Initialize size selection for each product
        this.filteredProducts.forEach(product => {
            this.selectedSize[product.id] = this.getDefaultSize(product.id);
        });
    }

    // Enhanced Quick View Modal with WhatsApp Buy Now
    openQuickView(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                <div class="flex justify-between items-center p-6 border-b">
                    <h2 class="text-2xl font-bold">${product.name}</h2>
                    <button class="close-modal text-gray-500 hover:text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src="${product.image}" alt="${product.name}" class="w-full h-96 object-cover rounded-lg">
                        </div>
                        <div>
                            <p class="text-gray-600 mb-4">${product.description}</p>
                            <div class="mb-4">
                                <span class="text-3xl font-bold text-gray-900">$${product.price}</span>
                                ${product.originalPrice ? `<span class="text-lg text-gray-500 line-through ml-2">$${product.originalPrice}</span>` : ''}
                            </div>
                            
                            <!-- Size Selection in Modal -->
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-2">Size</label>
                                <div class="flex flex-wrap gap-2">
                                    ${product.sizes.map(size => `
                                        <button class="size-option-modal px-3 py-2 text-sm border rounded bg-gray-100 text-gray-700 hover:bg-sage-green hover:text-white transition-colors" 
                                                data-product-id="${product.id}" 
                                                data-size="${size}">
                                            ${size}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <!-- Product Details -->
                            <div class="mb-6 space-y-2 text-sm text-gray-600">
                                <div class="flex justify-between">
                                    <span>Heel Height:</span>
                                    <span>${product.heelHeight}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Material:</span>
                                    <span>${product.material}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Occasion:</span>
                                    <span>${product.occasion}</span>
                                </div>
                            </div>
                            
                            <div class="flex space-x-4">
                                <button class="flex-1 btn-primary text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors buy-now-btn" 
                                        data-product-id="${product.id}">
                                    Buy Now via WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Add size selection functionality to modal
        const sizeButtons = modal.querySelectorAll('.size-option-modal');
        sizeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const size = e.target.dataset.size;
                const productId = parseInt(e.target.dataset.productId);
                this.selectSize(productId, size, e.target);
            });
        });
        
        this.setupEventListeners();
    }

    closeModal() {
        const modal = document.querySelector('.fixed.inset-0');
        if (modal) {
            document.body.removeChild(modal);
        }
    }

    // Animation Initialization
    initializeAnimations() {
        if (typeof anime !== 'undefined') {
            anime({
                targets: '.hero-title',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 1000,
                delay: 500,
                easing: 'easeOutQuart'
            });

            anime({
                targets: '.product-card',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                delay: anime.stagger(100),
                easing: 'easeOutQuart'
            });
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    initializeCarousels() {
        if (typeof Splide !== 'undefined') {
            const featuredCarousel = document.querySelector('.featured-carousel');
            if (featuredCarousel) {
                new Splide(featuredCarousel, {
                    type: 'loop',
                    perPage: 4,
                    perMove: 1,
                    gap: '1rem',
                    autoplay: true,
                    interval: 4000,
                    breakpoints: {
                        1024: { perPage: 3 },
                        768: { perPage: 2 },
                        640: { perPage: 1 }
                    }
                }).mount();
            }
        }
    }
}

// Initialize the store when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.ShoeZoneStore = new ShoeZoneStore();
});

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}