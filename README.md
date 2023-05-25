# Virtual Store

## An online shopping portal for a fictional store

## Deployed Store (Netlify)

[https://nates-store.netlify.app/](https://nates-store.netlify.app/)

### Business Requirements

Our application will power an online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase

Live Example (Reference)

[https://virtual-web-store.netlify.app/](https://virtual-web-store.netlify.app/)

![Live Example Landing Page Screenshot](./img/readme/storefront_sample_landing_page.png)

The core requirements and functionality are as follows:

- Display a list of our product categories
- Display a listing of products for each category, when the category is selected
- From the product listings:
  - Click to view a full detail page about the product
  - Add the product to your shopping cart
- Shopping cart (simple version) always visible on screen
- Full shopping cart and check out screen available from main navigation

### Technical Requirements

The application will be created with the following overall architecture and methodologies

React  
ES6 Classes  
Redux Store for Application State  
Deployed API with MongoDB storage for storing categories and products  
Superagent or Axios for performing API Requests  
Material UI for layout and styling  
Test Driven Development, using Jest  
Deployment to a cloud provider (Netlify, Amplify, or GitHub Pages)  

``` bash
Application Structure (proposed)
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── app.test.js
│   ├── cart.test.js
├── src
│   ├── index.js
│   ├── app.js
│   ├── store
│   │   ├── index.js
│   │   ├── categories.js
│   │   ├── products.js
│   │   ├── cart.js
│   ├── components
│   │   ├── storefront
│   │   │   └── categories.js
│   │   │   └── current-category.js
│   │   │   └── products.js
│   │   │   └── storefront.js
│   │   ├── products
│   │   │   └── details.js
│   │   ├── cart
│   │   │   └── simplecart.js
│   │   │   └── checkout.js
│   │   ├── header
│   │   │   └── header.js
│   │   ├── footer
│   │   │   └── footer.js
└── package.json
```

### Development Process, Milestones

#### Phase 1: Application Setup

Basic React Application  
Redux State Management  
State managed in memory  
Material UI Components & Styling  

#### Phase 2: Shopping Cart

Add items to a shopping cart  
Update quantities  
Remove items from the cart  
Show the cart in real-time on the UI  

#### Phase 3: Live Data

Connect the application a live API  
Persist changes to products based on cart activity.  

#### Phase 4: Checkout & Detail Pages

Refactor the store to use the latest Redux design pattern (Redux Toolkit)  
Add a cart checkout page  
Add a product details page  
