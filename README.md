# SnacPack - Food Packaging E-commerce Website

SnacPack is a comprehensive e-commerce website for selling food packaging products to cafes and restaurants in India. The website features a modern, responsive design with a focus on eco-friendly and sustainable packaging solutions.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Catalog**: Browse through various categories of food packaging products
- **Product Details**: Detailed information about each product with specifications
- **Shopping Cart**: Add products to cart, update quantities, and remove items
- **Checkout Process**: Multi-step checkout with shipping and payment information
- **Order Confirmation**: Confirmation page with order details and next steps
- **About Us Page**: Information about the company, mission, values, and team

## Pages

1. **Home Page** (index.html)
   - Hero section with call-to-action
   - Featured products
   - Product categories
   - Testimonials
   - Contact form

2. **Products Page** (products.html)
   - Product grid with filtering options
   - Quick view functionality
   - Add to cart buttons

3. **Product Details Page** (product-details.html)
   - Product images gallery
   - Detailed description
   - Specifications
   - Related products

4. **Checkout Page** (checkout.html)
   - Cart review
   - Shipping information form
   - Payment method selection

5. **Payment Confirmation Page** (payment.html)
   - Order summary
   - Shipping details
   - Next steps information

6. **About Us Page** (about.html)
   - Company story
   - Mission and values
   - Team members
   - Timeline of company growth

## Technologies Used

- HTML5
- CSS3 (with custom variables for theming)
- JavaScript (vanilla JS, no frameworks)
- Responsive design with CSS Grid and Flexbox
- Font Awesome for icons

## How to Use

1. Open the website by running the `open-website.sh` script:
   ```
   ./open-website.sh
   ```

2. Navigate through the website using the navigation menu
   - Home
   - Products
   - About Us
   - Contact (scrolls to contact section on home page)

3. Explore product pages and add items to your cart
   - Click on a product to view details
   - Adjust quantity and add to cart
   - View cart by clicking the cart icon in the header

4. Proceed to checkout
   - Review cart items
   - Fill in shipping information
   - Select payment method
   - Place order

## Notes

- This is a front-end only demonstration. No actual backend functionality is implemented.
- The shopping cart uses localStorage to persist cart data between page refreshes.
- Some images (partner logos and UPI logo) are empty placeholder files.

## File Structure

```
SnacPack/
├── index.html              # Home page
├── products.html           # Products listing page
├── product-details.html    # Product details page
├── checkout.html           # Checkout page
├── payment.html            # Payment confirmation page
├── about.html              # About us page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── script.js           # Main JavaScript file
├── images/                 # Image assets
├── README.md               # This documentation
└── open-website.sh         # Script to open the website
```

## Customization

To customize the website:

1. **Colors and Theme**: Edit the CSS variables at the top of `css/styles.css`
2. **Products**: Modify the product data in the JavaScript files
3. **Images**: Replace the placeholder images in the `images` directory
4. **Content**: Update the text content in the HTML files

## License

This project is created for demonstration purposes only.
