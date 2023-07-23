import './Cart_Item.css'

function Cart_Item(props){
    
    // console.log('Hello', props)
    return (
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
                    {props.price}
                </p>
                <p className='quantity'>
                    {props.quantity}
                </p>
            </div>
        </>

    );
}

export default Cart_Item;