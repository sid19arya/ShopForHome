import { useEffect, useState } from "react";
import { getCart, getWishlist } from "../api";
import Cart_Item from "./Cart_Item";

function Wishlist(props){
    // props.user.username ig

    const user = props.user;

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getUserWishlist(){
            const wishlist_items = await getWishlist(user.username, user.access_token);
            console.log(wishlist_items)
            setItems(wishlist_items.wishlist_products)
        }

        if (user){
            getUserWishlist();
            
        } else {
            alert("Please login to access wishlist")
        }
        
    }, [])

    return (
        <div>
            <h1>User Wishlist {'<3'}</h1>
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

export default Wishlist;