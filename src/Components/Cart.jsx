import { useEffect, useState } from "react";
import { getCart } from "../api";
import Cart_Item from "./Cart_Item";
import './Cart.css'

function Cart(props){
    // props.user.username ig

    const user = props.user;

    const [items, setItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [recalc, setRecalc] = useState(true);

    const items_sale_report = item => {
        return (
            <div>
                <p>{item.title}</p>
                <p>x{item.quantity}</p>
                <p>${item.price * item.quantity}</p>
            </div>
        );
    }


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
        
    }, [recalc])

    useEffect(() => {
        let temp_subtotal = 0; 
        items.forEach(item => {
            temp_subtotal += item.price * item.quantity
        })
        setSubtotal(temp_subtotal);
        // discount...
        // shipping...
        setTotal(temp_subtotal - discount + shipping)
    }, [items])

    return (
        <div>
            <h1>User Cart</h1>
            
            <div className='cart-body'>
                <div className='cart-board'>
                    {items.map(item => {
                            return <Cart_Item
                                recalc={recalc}
                                setRecalc={setRecalc}
                                user={user}
                                img={item.imageurl}
                                title={item.title} 
                                price={item.price}
                                quantity={item.quantity}
                            ></Cart_Item>
                        })}
                </div>
                <div className="checkout">
                    <div className="sales-report">
                        <h2>Sales Report</h2>
                        <h3>Items</h3>
                        {items.map(items_sale_report)}
                        --------------------------------
                        <div>
                            <p>Subtotal</p>
                            <p>${subtotal}</p>
                        </div>
                        <div>
                            <p>Discount/Coupons</p>
                            <p>-${discount}</p>
                        </div>
                        <div>
                            <p>Shipping</p>
                            <p>${shipping}</p>
                        </div>
                        <div>
                            <p><b>TOTAL</b></p>
                            <p>${total}</p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );  
}

export default Cart;