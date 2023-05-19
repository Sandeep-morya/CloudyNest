# CloudyNest

An Online Shopping Website

## Overview

CloudyNest is an online shopping prototype website.
This website is made by taking litte bit insperation from Meesho.com.
Which is famous as India's largest and most trusted marketplace for Resellers, who sell products online through WhatsApp and Facebook.

## Features

- Online Products sell and purchase
- Cart and Filter Options avialable
- Full Stack website (MERN used)
- Using Custom API server
- Manupulate Order Status
- Supplier & user can see their orders

## Tech Stack

- HTML 5
- CSS 3
- TypeScript
- React
- NextJS
- Chakra UI
- Node JS
- Express
- Mongoose
- MongoDB


## Folder Structure

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┗ 📜SignUp.tsx
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ 📜Cart.tsx
 ┃ ┃ ┣ 📜CartItem.tsx
 ┃ ┃ ┣ 📜CartNav.tsx
 ┃ ┃ ┣ 📜CartPrice.tsx
 ┃ ┃ ┣ 📜ProgressSteps.tsx
 ┃ ┃ ┣ 📜StepBar.tsx
 ┃ ┃ ┗ 📜StepIcon.tsx
 ┃ ┣ 📂Checkout
 ┃ ┃ ┣ 📜AdressForm.tsx
 ┃ ┃ ┣ 📜Loader.tsx
 ┃ ┃ ┣ 📜PaymentForm.tsx
 ┃ ┃ ┗ 📜Summary.tsx
 ┃ ┣ 📂Content
 ┃ ┃ ┣ 📂All_Catagories
 ┃ ┃ ┃ ┣ 📜AAge.tsx
 ┃ ┃ ┃ ┣ 📜ACategroy.tsx
 ┃ ┃ ┃ ┣ 📜AColor.tsx
 ┃ ┃ ┃ ┣ 📜ADiscount.tsx
 ┃ ┃ ┃ ┣ 📜AGender.tsx
 ┃ ┃ ┃ ┣ 📜AMisc.tsx
 ┃ ┃ ┃ ┣ 📜APrice.tsx
 ┃ ┃ ┃ ┣ 📜ARating.tsx
 ┃ ┃ ┃ ┣ 📜ASize.tsx
 ┃ ┃ ┃ ┣ 📜ASpecial.tsx
 ┃ ┃ ┃ ┗ 📜AUser.tsx
 ┃ ┃ ┣ 📜Advertisments.tsx
 ┃ ┃ ┣ 📜Carousel.tsx
 ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜ItemCard.tsx
 ┃ ┃ ┗ 📜Pagination.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜data.ts
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜MenuTabs.tsx
 ┃ ┃ ┣ 📜Navbar.tsx
 ┃ ┃ ┣ 📜SolidButton.tsx
 ┃ ┃ ┣ 📜TabData.tsx
 ┃ ┃ ┗ 📜TabDataItem.tsx
 ┃ ┣ 📂Misc
 ┃ ┃ ┣ 📜BannerHeading.tsx
 ┃ ┃ ┣ 📜Logo.tsx
 ┃ ┃ ┣ 📜NoResults.tsx
 ┃ ┃ ┣ 📜Nothing.tsx
 ┃ ┃ ┣ 📜Pill.tsx
 ┃ ┃ ┣ 📜ProfileCard.tsx
 ┃ ┃ ┣ 📜ResultsLoader.tsx
 ┃ ┃ ┗ 📜ServerError.tsx
 ┃ ┣ 📂Order
 ┃ ┃ ┗ 📜OrderCard.tsx
 ┃ ┣ 📂Product
 ┃ ┃ ┣ 📜MiniProductCard.tsx
 ┃ ┃ ┣ 📜ProductCard.tsx
 ┃ ┃ ┣ 📜Products.tsx
 ┃ ┃ ┣ 📜ProductView.tsx
 ┃ ┃ ┗ 📜Recommendation.tsx
 ┃ ┣ 📂Seller
 ┃ ┃ ┣ 📜AllOrders.tsx
 ┃ ┃ ┣ 📜AllProducts.tsx
 ┃ ┃ ┣ 📜Dashboard.tsx
 ┃ ┃ ┣ 📜SellerCard.tsx
 ┃ ┃ ┣ 📜SellerLogin.tsx
 ┃ ┃ ┣ 📜SellerNav.tsx
 ┃ ┃ ┗ 📜SellerSpecCard.tsx
 ┃ ┣ 📜Layout.tsx
 ┃ ┗ 📜Loader.tsx
 ┣ 📂functions
 ┃ ┣ 📜originalPriceBeforeDiscount.ts
 ┃ ┣ 📜validataEmail.ts
 ┃ ┣ 📜validateAddress.ts
 ┃ ┣ 📜validateGstNumeber.ts
 ┃ ┣ 📜validateInputArray.ts
 ┃ ┣ 📜validateInputString.ts
 ┃ ┣ 📜validateMobile.ts
 ┃ ┣ 📜validateNames.ts
 ┃ ┣ 📜validatePassword.ts
 ┃ ┗ 📜validateRangeInput.ts
 ┣ 📂hooks
 ┃ ┣ 📜useBuyNow.tsx
 ┃ ┣ 📜useDate.tsx
 ┃ ┣ 📜useDebounce.tsx
 ┃ ┣ 📜useGetCookie.tsx
 ┃ ┣ 📜useLogout.tsx
 ┃ ┣ 📜useRemoveCookie.tsx
 ┃ ┣ 📜useSetCookie.tsx
 ┃ ┣ 📜useThrottle.tsx
 ┃ ┣ 📜useToastalert.tsx
 ┃ ┗ 📜useToggle.tsx
 ┣ 📂pages
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂product
 ┃ ┃ ┗ 📜[id].tsx
 ┃ ┣ 📂supplier
 ┃ ┃ ┣ 📂add_product
 ┃ ┃ ┃ ┗ 📜[id].tsx
 ┃ ┃ ┣ 📂dashboard
 ┃ ┃ ┃ ┗ 📜[id].tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂user
 ┃ ┃ ┣ 📂cart
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜checkout.tsx
 ┃ ┃ ┗ 📜dashboard.tsx
 ┃ ┣ 📜admin.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜_document.tsx
 ┣ 📂styles
 ┃ ┣ 📜footer.css
 ┃ ┗ 📜globals.css
 ┗ 📜Types.ts
```
