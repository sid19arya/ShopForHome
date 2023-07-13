import './Product_Card.css'

function Product_Card(props){
    
    console.log('Hello', props)
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
                    {props.price}
                </p>
            </div>
        </>

    );
}

export default Product_Card