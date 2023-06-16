import { Link } from "react-router-dom";

function ProductCard(props) {
  // DATA SET
  let rating = Math.trunc(props.RATE);

  return (
    <div className="flex flex-col justify-center items-center
    gap-4 text-center">
        <figure className="w-52 h-auto">
            <img src={props.IMAGE} alt="Product"/>
        </figure>

        <article>
            <p>
                {[...Array(5)].map((star, i) => {
                    return (
                        <i key={i} className={`fa-solid fa-star
                        ${(rating >= i && 'text-yellow-400')}`}></i>
                    )
                })}
            </p>
            <p>${props.PRICE}</p>
            <Link to={`/details/product/${props.ID}`}>
                <h2>{props.TITLE}</h2>
            </Link>
        </article>
    </div>
  )
}

export default ProductCard;