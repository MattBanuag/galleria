import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Details() {
  // GETTING PARAMETER VALUE
  const { id } = useParams();

  // DATA SETS
  const API_URL = `https://fakestoreapi.com/products/${id}`;
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json; charset=UTF-8'},
    mode: 'cors'
  };

  // STATES and Rating Variable
  const [product, setProduct] = useState({});
  const [productRatingObj, setProductRatingObj] = useState({});
  let rating = Math.trunc(productRatingObj.rate);

  // FUNCTIONS
  const navigate = useNavigate();

  const getData = async () => {
    try {
        const response = await fetch(API_URL, options);

        // Fetch Validation
        if(!response.ok) throw new Error(`${response.statusText} (${response.status})`);

        const data = await response.json();
        setProduct(data);
        setProductRatingObj(data.rating);
    } catch(error) {
        console.log(error);

        // Navigate to the 4040 page
        navigate('*');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>{`Details | ${product.title}`}</title>
        </Helmet>
    </HelmetProvider>

    <section className="px-[5%] py-[2%] flex justify-center items-center">
        <figure>
            <img src={product.image} alt={product.title}
            className="w-3/4 h-[90%]"/>
        </figure>

        <article className="w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl">{product.title}</h2>
            <p>
                {[...Array(5)].map((star, i) => {
                    return (
                        <i key={i} className={`fa-solid fa-star
                        ${(rating >= i && 'text-yellow-400')}`}></i>
                    )
                })}
            </p>
            <p>$ {product.price}</p>
            <p>{product.description}</p>
            <p className={`bold ${productRatingObj.count >= 10 ?
               'text-green-400' : 'text-red-400'}`}>
                {productRatingObj.count} in stock
            </p>
            <button className="w-1/4 px-3 py-2 text-white 
            bg-sky-500">Add to cart</button>
        </article>
    </section>
    </>
  )
}

export default Details;