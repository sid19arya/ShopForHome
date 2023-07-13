import './Home.css'
import Product_Card from './Product_Card';

function Home(){
    let products = [
        {
            img: 'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: "PRODUCT 1",
            price: "$12"
        }, 
        {
            img: 'https://images.pexels.com/photos/1321290/pexels-photo-1321290.jpeg',
            title: "Product2",
            price: "100"
        }
    ]

    return (
        <div className='Home'>
            <div className="search-layer">
                    <form className='search-form'>
                        <div className='search-form-wrapper'>
                            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                            <input className='search-bar'></input>
                        </div>
                        
                    </form>
            </div>
            <div className='temp'></div> {/* potentially something here, maybe a categories layer*/ }
            <div className='Product_Zone'>
                <div className='Top'>
                    This is the top layer
                </div>
                <div className='Main'>
                        {products.map(product => {
                            return <Product_Card 
                                        img={product.img}
                                        title={product.title} 
                                        price={product.price}>
                                    </Product_Card>
                        })}
                </div>
            </div>
        </ div>
    );
} 

export default Home;