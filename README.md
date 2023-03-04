# CloudyNest
### An online shopping Website

[Live URL](https://cloudynest.vercel.app/)

` Server API Links`


----> USER <---


- [POST]- 	http://localhost:7717/user/register/  		//register-api
- [POST]- 	http://localhost:7717/user/login/  			//login-api
- [GET]- 	http://localhost:7717/user/profile/  		//user-details-api
- [GET]- 	http://localhost:7717/user/orders/  		//user-orders-api
- [PATCH]- 	http://localhost:7717/user/addmore/  		//user-details-change-api

---> SELLER <---


- [POST]- 	http://localhost:7717/seller/register/  	//register-api
- [POST]- 	http://localhost:7717/seller/login/  		//login-api
- [GET]- 	http://localhost:7717/seller/profile/  		//seller-details-api
- [GET]- 	http://localhost:7717/seller/orders/  		//seller-orders-api
- [GET]- 	http://localhost:7717/seller/products/  	//seller-products-api
- [PATCH]- 	http://localhost:7717/seller/addmore/  		//seller-details-change-api

---> PRODUCT <---


- [GET]- 	http://localhost:7717/product/all/  		//get-all-products-api
- [POST]- 	http://localhost:7717/product/add/  		//add-a-product-api
-  [PATCH]- 	http://localhost:7717/product/:id/			//update-product-api
- [DELETE]- 	http://localhost:7717/product/:id/			//delete-product-api

---> CART <---


- [GET]- 	http://localhost:7717/cart/  				//get-all-cart-items-api
- [PATCH]- 	http://localhost:7717/cart/					//add-to-cart-api
- [DELETE]- 	http://localhost:7717/cart/					//delete-cart-item-api

---> ORDER <---

- [POST]- 	http://localhost:7717/orders/  				//book-a-order-api
- [PATCH]- 	http://localhost:7717/orders/:id/			//update-the-order-api

