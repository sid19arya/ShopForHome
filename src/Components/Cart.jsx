import { useEffect, useState } from "react";
import { getCart } from "../api";
import Cart_Item from "./Cart_Item";

function Cart(props){
    // props.user.username ig

    const user = props.user;

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getUserCart(){
            const cart_items = await getCart(user.username, user.access_token);
            console.log(cart_items)
            setItems(cart_items.cart_products)
        }

        if (user){
            getUserCart();
            
        } else {
            alert("Please login to access Cart")
        }
        
    }, [])

    return (
        <div>
            <h1>User Cart</h1>
            <div className='Main'>
                        {items.map(item => {
                            return <Cart_Item
                                img={item.imageurl}
                                title={item.title} 
                                price={item.price}
                            ></Cart_Item>
                        })}
                </div>
        </div>
    );  
}

export default Cart;