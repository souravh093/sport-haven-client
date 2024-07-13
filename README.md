## Project Name: Sport Haven Client

# Introduction

Sport Haven server to is server the frontend data. There are manage Product data Like: Create product, delete product, update product, delete product. Same like Order management.

This project i using for handle Error, good maintainable code and good structure code.

# Features

* Product Management
* Featured Product
* Add Cart Functionality
* Checkout system
* Contact to Admin
* Filter, Sort, Search system for product page


# Technology Stack

* React.js
* React Router Dom
* React Hook Form
* Shadcn
* Redux Toolkit with RTKQuery
* Lucid Icon

## Installation Guideline

# Prerequisites

* Node.js 18.00 version upper

# Installation Steps

1. First create a react project using vite 
```js
npm create vite@latest
```
2. Install all dependent packages
```js
npm i react-router-dom react-icons  @reduxjs/toolkit react-redux 
```
3. Install tailwindcss
```js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
4. Configure template paths for tailwindcss
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
5. Add the tailwind directives to your ./src/index.css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Run the project
```
npm run dev
```

# Usage 

First see the home page and you want to make purchase product then click the all product page nad click one product view details then there see all information. Then you are interested then click add to card button and see cart if interested then checkout and fill your billing information and place order ok






