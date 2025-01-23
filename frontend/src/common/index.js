const urlApi = "http://localhost:8080"

const SummaryApi = {
    signUp : {
        url : `${urlApi}/api/signup`,
        method : "post" 
    },
    signIn : {
        url : `${urlApi}/api/signin`,
        method : "post" 
    },
    current_user : {
        url : `${urlApi}/api/user-details`,
        method : 'get'
    },
    logout_user : {
        url : `${urlApi}/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${urlApi}/api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${urlApi}/api/update-user`,
        method : 'post'
    },
    uploadProduct : {
        url : `${urlApi}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${urlApi}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${urlApi}/api/update-product`,
        method : 'post'
    },
    categoryProduct : {
        url : `${urlApi}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${urlApi}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${urlApi}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${urlApi}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${urlApi}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${urlApi}/api/view-card-product`,
        method : `get`
    },
    updateCartProduct : {
        url : `${urlApi}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${urlApi}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${urlApi}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${urlApi}/api/filter-product`,
        method : 'post'
    }

}

export default SummaryApi