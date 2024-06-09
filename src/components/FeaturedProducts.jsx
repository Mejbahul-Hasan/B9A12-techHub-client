import useFeaturedProducts from "../hooks/useFeaturedProducts";
import { GiVote } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";


const FeaturedProducts = () => {
    const [products] = useFeaturedProducts();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {
                products.map(product => (
                    <div key={product._id} className="card w-96 bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.product_image} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Product Name: {product.product_name}</h2>
                            <p>Tags: {product.tags}</p>
                            <Link to={`/product-details/${product._id}`} className="card-actions">
                                    <button className="btn btn-outline border-orange-500 w-full"><GiVote />{product.upvote_count}<BiUpvote /></button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default FeaturedProducts;