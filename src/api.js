async function uploadProducts(results, api_key){
    // console.log(results);

    const Promises = results.map(async element => {
        const raw_results = await fetch('http://localhost:3020/product', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization':  `Bearer ${api_key}`
            },
            body: JSON.stringify({
                title: element.title,
                price: element.price,
                catergories: [],
                stock: element.stock,
                imageurl: element.imageurl
            })
        })

        const results = raw_results.json();
        return results;
    });

    const results_array = await Promise.all(Promises);
    // console.log(results_array);
    
};

async function getProducts(){
    const raw_results = await fetch('http://localhost:3020/product');
    const results = raw_results.json();
    return results;
}

async function loginUser(given_username, given_password){
    const raw_results = await fetch('http://localhost:3020/user/login', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: given_username,
                password: given_password
            })
        })
    const results = raw_results.json();
    return results;
}   

async function signupUser(given_username, given_password){
    const raw_results = await fetch('http://localhost:3020/user/signup', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: given_username,
                password: given_password
            })
        })
    const results = raw_results.json();
    return results;
}

async function getCart(given_username, access_token){
    const raw_results = await fetch(`http://localhost:3020/user/${given_username}/cart`, {
        headers: {
            'Authorization':  `Bearer ${access_token}`
        }
    })
    const results = raw_results.json();
    
    return results;
}

async function getWishlist(given_username, access_token){
    const raw_results = await fetch(`http://localhost:3020/user/${given_username}/wishlist`, {
        headers: {
            'Authorization':  `Bearer ${access_token}`
        }
    })
    const results = raw_results.json();
    
    return results;
}

async function addProdtoCart(given_username, access_token, product_title, val){
    const raw_results = await fetch(`http://localhost:3020/user/${given_username}/cart`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json', 
                'Authorization':  `Bearer ${access_token}`
            },
            body: JSON.stringify({
                title: product_title,       
                quantity: val,
                setquantity: null
            })
        })
    const results = raw_results.json();
    return results;
}
async function addProdtoWishlist(given_username, access_token, product_title){
    const raw_results = await fetch(`http://localhost:3020/user/${given_username}/wishlist`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json', 
                'Authorization':  `Bearer ${access_token}`
            },
            body: JSON.stringify({
                title: product_title
            })
        })
    const results = raw_results.json();
    return results;
}

export {uploadProducts, getProducts, loginUser, signupUser, getCart, getWishlist, addProdtoCart, addProdtoWishlist}