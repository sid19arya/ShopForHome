import { addProdtoCart, addProdtoWishlist } from '../api';
import './Product_Card.css'

function Product_Card(props){

    const user = props.user

    const addToWishlist = async (event) => {
        event.preventDefault();
        if (user){
            const result = await addProdtoWishlist(user.username, user.access_token, props.title);
            console.log(result);
        } else {
            alert("Please log in to add products to your wishlist");
        }
        // alert('added to wishlist')
    }
    const addToCart = async (event) => {
        event.preventDefault();
        if (user){
            const result = await addProdtoCart(user.username, user.access_token, props.title, 1);
            console.log(result);
        } else {
            alert("Please log in to add products to your cart");
        }
        // alert('added to Cart')
    }
    
    // console.log('Hello', props)
    return (
        <>
            <div className="card">
                <div className='image'>
                    <img src={props.img}></img>
                    {/* <img src='https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img> */}
                    {/* <img src='https://images.pexels.com/photos/1321290/pexels-photo-1321290.jpeg'></img> */}
                </div>
                <p className='name'>
                    <u><b>{props.title}</b></u>
                </p>
                <p>
                    Some Description for product
                </p>
                <p className='price'>
                    ${props.price}
                </p>
                <div className='icons'>
                    <i className="fa-solid fa-heart fa-lg" onClick={addToWishlist}>
                        <div className="tooltip"> Click to add this product to wishlist</div>
                    </i>
                    <i className="fa-solid fa-cart-shopping fa-lg" onClick={addToCart}>
                        <div className="tooltip">Click to add this product to cart</div>    
                    </i>                  
                </div>
            </div>
        </>

    );
}

export default Product_Card