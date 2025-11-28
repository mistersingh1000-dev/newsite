// Load Header and Footer
document.addEventListener('DOMContentLoaded', async function() {
    // Load Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        const headerHTML = `
<!-- Top Mini Bar -->
<div class="top-mini-bar">
    <div class="container">
        <div class="mini-bar-content">
            <div class="mini-bar-right">
                <a href="https://wa.me/917009732517" class="mini-contact" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp / Call: +91 7009732517
                </a>
                <a href="https://t.me/digialmarketing" class="mini-contact" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Telegram: t.me/digialmarketing
                </a>
                <a href="mailto:codecraftm@gmail.com" class="mini-contact">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Email: codecraftm@gmail.com
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Main Header -->
<header class="main-header" id="mainHeader">
    <div class="container">
        <div class="header-content">
            <!-- Logo -->
            <div class="logo">
                <a href="/">
                    <div class="logo-icon">CC</div>
                    <span class="logo-text">CodeCraft Marketing</span>
                </a>
            </div>

            <!-- Navigation Menu -->
            <nav class="main-nav" id="mainNav">
                <ul class="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/digital-marketing">Digital Marketing</a></li>
                    <li><a href="/apps-subscriptions">Apps Subscriptions</a></li>
                    <li><a href="/otts">OTT's</a></li>
                    <li><a href="/packages">Packages</a></li>
                    <li><a href="/marketing-bundles">Marketing Bundles</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>

            <!-- Header Actions -->
            <div class="header-actions">
                <a href="/login" class="header-link">Login</a>
                <a href="/register" class="header-link header-link-register">Register</a>

                <a href="/wishlist" class="header-icon" title="Wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </a>

                <a href="/compare" class="header-icon" title="Compare">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                </a>

                <a href="/cart" class="header-icon cart-icon" title="Cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    <span class="cart-count" id="cartCount">0</span>
                </a>

                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</header>

<!-- Search Bar -->
<div class="search-bar">
    <div class="container">
        <form class="search-form" action="/search" method="GET">
            <select name="category" class="search-category">
                <option value="">All Categories</option>
                <option value="whatsapp-marketing">Whatsapp Marketing Solutions</option>
                <option value="telegram-marketing">Telegram Marketing Solutions</option>
                <option value="instagram-marketing">Instagram Marketing Solution</option>
                <option value="apps-subscriptions">Apps Subscriptions</option>
                <option value="otts">OTT's</option>
                <option value="marketing-bundles">Marketing Bundles</option>
                <option value="source-codes">Source Codes</option>
                <option value="editing-apps">Editing Apps</option>
            </select>
            <input type="text" name="q" class="search-input" placeholder="Search products, tools, courses…" required>
            <button type="submit" class="search-button">Search</button>
        </form>
    </div>
</div>
`;
        headerContainer.innerHTML = headerHTML;
    }

    // Load Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        const footerHTML = `
<!-- Footer -->
<footer class="main-footer">
    <div class="footer-top">
        <div class="container">
            <div class="footer-columns">
                <!-- Column 1 - About -->
                <div class="footer-column">
                    <h3 class="footer-heading">About Us</h3>
                    <p class="footer-description">Code Craft Marketing is a digital marketplace website to buy or sell digital products online.</p>
                    <div class="footer-contact">
                        <p class="footer-location">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            Chandigarh, Haryana, India
                        </p>
                        <p class="footer-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            Phone / WhatsApp: <a href="https://wa.me/917009732517">+91 7009732517</a>
                        </p>
                        <p class="footer-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            Email: <a href="mailto:codecraftm@gmail.com">codecraftm@gmail.com</a>
                        </p>
                        <p class="footer-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                            Telegram: <a href="https://t.me/digialmarketing" target="_blank">t.me/digialmarketing</a>
                        </p>
                    </div>
                </div>

                <!-- Column 2 - Products -->
                <div class="footer-column">
                    <h3 class="footer-heading">Products</h3>
                    <ul class="footer-links">
                        <li><a href="/products/html">HTML</a></li>
                        <li><a href="/products/whmcs">WHMCS</a></li>
                        <li><a href="/products/source-code">Source Code</a></li>
                        <li><a href="/products/wordpress">WordPress</a></li>
                    </ul>
                </div>

                <!-- Column 3 - More -->
                <div class="footer-column">
                    <h3 class="footer-heading">More..</h3>
                    <ul class="footer-links">
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/refund-policy">Refund Policy</a></li>
                        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 4 - Quick Links -->
                <div class="footer-column">
                    <h3 class="footer-heading">Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop All Products</a></li>
                        <li><a href="/promotions">Promotions</a></li>
                        <li><a href="/delivery-return">Delivery & Return</a></li>
                        <li><a href="/wishlist">Wishlist</a></li>
                        <li><a href="/compare">Compare</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <p class="copyright">Copyright © 2025 CodeCraftMarketing.in – All Rights Reserved.</p>
        </div>
    </div>
</footer>
`;
        footerContainer.innerHTML = footerHTML;
    }

    // Load header.js functionality after header is loaded
    const script = document.createElement('script');
    script.src = '/assets/js/header.js';
    document.body.appendChild(script);
});
