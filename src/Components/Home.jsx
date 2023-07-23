import { useEffect, useState } from 'react';
import './Home.css'
import Product_Card from './Product_Card';
import { getProducts } from '../api';

function Home(props){
    const [products, setProducts] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    const updateSearchParam = (event) => {
        event.preventDefault();
        setSearchVal(event.target.value);
    }

    useEffect(() => {
        const new_List = products.filter(prod => {
            return prod.title.includes(searchVal);
        })
        setFilteredList(new_List);
    }, [searchVal, products])

    const user = props.user;
    
    const products_offline = [
        {
            img: '',
            title: "PRODUCT 1",
            price: "$12"
        }, 
        {
            img: '',
            title: "Product2",
            price: "100"
        }
    ]

    useEffect(() => {
        async function x(){
            const prods = await getProducts();
            setProducts(prods.posts);
        }

        async function x_offline(){
            setProducts(products_offline);
        }
        x();   
        // x_offline();    
    }, [])

    return (
        <div className='Home'>
            <div className="search-layer">
                    <form className='search-form'>
                        <div className='search-form-wrapper'>
                            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                            <input className='search-bar' onChange={updateSearchParam}></input>
                            {/* <p>{searchVal}</p> */}
                        </div>
                        
                    </form>
            </div>
            <div className='temp'></div> {/* potentially something here, maybe a categories layer*/ }
            <div className='Product_Zone'>
                <div className='Top'>
                    {user ? `${user.username} is currently logged in`: "No one has logged in yet"}
                </div>
                <div className='Main'>
                        {filteredList.map(product => {
                            return <Product_Card 
                                        user={user}
                                        img={product.imageurl}
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