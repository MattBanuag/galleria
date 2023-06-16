import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
  // DATA SETS
  const API_URL = 'https://fakestoreapi.com/products';
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json; charset=UTF-8',
             'access-control-allow-credentials': false},
    mode: 'cors'
  };

  // STATES
  const [allProducts, setAllProducts] = useState([]);
  const [unfilteredProducts, setUnfilteredProducts] = useState([]);
  const [sortMethod, setSortMethod] = useState('all');

  // FUNCTIONS
  const getData = async () => {
    try {
        const response = await fetch(API_URL, options);

        // Fetch Validation
        if(!response.ok) throw new Error(`${response.statusText} (${response.status})`);

        const data = await response.json();
        setAllProducts(data);
        setUnfilteredProducts(data);
    } catch(error) {
        console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    switch(sortMethod) {
        case 'all':
            setAllProducts([...unfilteredProducts]);
            break;
        case 'price':
            const priceFilteredProducts = [...allProducts].sort((a, b) => 
            a.price - b.price);
            setAllProducts([...priceFilteredProducts]);
            break;
        case 'rating':
            const ratingFilteredProducts = [...allProducts].sort((a, b) => 
            a.rating.rate < b.rating.rate);
            setAllProducts([...ratingFilteredProducts]);
            break;
    }
  }, [sortMethod]);

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Galleria | Home</title>
        </Helmet>
    </HelmetProvider>

    <section className="flex flex-col gap-24">
        <div className="flex justify-center items-center
        hero-container">
            <article className="flex flex-col justify-center 
            items-center gap-4">
                <h2 className="text-6xl text-white logo-text">
                    CHILL VIBES
                </h2>

                <p className="text-white">
                    Feel the vibes with casual sets 
                    desgined for comfort and style.
                </p>

                <button className="px-3 py-2 text-white bg-sky-500">
                    SHOP SALE
                </button>   
            </article>
        </div>

        <div className="flex flex-col justify-center items-center gap-12">
            <article className="w-1/2">
                <h2 className="text-3xl text-center">
                    "Galleria has everything I will ever need. 
                    Great clothes, tech and products" - Don Smith
                </h2>
            </article>

            <ul className="flex items-center gap-12">
                <li><i className="fa-brands fa-pinterest-p text-7xl text-gray-300"></i></li>
                <li><i className="fa-brands fa-amazon text-7xl text-gray-300"></i></li>
                <li><i className="fa-brands fa-yahoo text-7xl text-gray-300"></i></li>
                <li><i className="fa-brands fa-reddit-alien text-7xl text-gray-300"></i></li>
                <li><i className="fa-brands fa-ebay text-7xl text-gray-300"></i></li>
                <li><h2 className="text-6xl text-gray-300">500+ more</h2></li>
            </ul>
        </div>

        <div className="flex flex-col justify-center items-center
        gap-12">
            <article>
                <h2 className="text-4xl">Our featured items</h2>
            </article>

            <div>
                <select onChange={(e) => setSortMethod(e.target.value)} className="px-1 py-3 
                border-2 border-gray-300 rounded-md text-center bg-white">
                    <option value="all">
                            All Products
                    </option>
                    <option value="price">
                            Sort by Price
                    </option>
                    <option value="rating">
                            Sort by Rating
                    </option>
                </select>
            </div>

            <div className="mb-24 px-[5%] grid grid-cols-4 items-end gap-8">
                {allProducts.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            ID={product.id}
                            IMAGE={product.image}
                            RATE={product.rating.rate}
                            TITLE={product.title}
                            PRICE={product.price}
                        />
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Home;