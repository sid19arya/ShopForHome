import { useState } from 'react';
import './Cart_Item.css'
import { addProdtoCart} from '../api';

function Cart_Item(props){

    const w_flag = props.wishlist_flag;
    const user = props.user;
    
    const increment_item = async (event) => {
        event.preventDefault();
        if (user){
            const result = await addProdtoCart(user.username, user.access_token, props.title, 1);
            console.log(result);
            props.setRecalc(!props.recalc);
        } else {
            alert("Please log in to add products to your cart");
        }
    }
    
    const decrement_item = async (event) => {
        event.preventDefault();
        if (user){
            const result = await addProdtoCart(user.username, user.access_token, props.title, -1);
            console.log(result);
            props.setRecalc(!props.recalc);
        } else {
            alert("Please log in to add products to your cart");
        }
    }

    const wishlist_card = (
        <>
            <div className="card">
                <div className='image'>
                    <img src={props.img}></img>
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
                <p className='quantity'>
                    {props.quantity ? `Quantity in cart: x${props.quantity}` : null}
                </p>
            </div>
        </>
    );

    const cart_card = (
        <>
            <div className="card">
                <div className='image'>
                    <img src={props.img}></img>
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
                <p className='quantity'>
                    <button onClick={decrement_item}>-</button>
                    {`In cart: x${props.quantity}`}
                    <button onClick={increment_item}>+</button>
                </p>
            </div>
        </>
    )
    
    // console.log('Hello', props)
    return (w_flag ? wishlist_card : cart_card)
}

export default Cart_Item;