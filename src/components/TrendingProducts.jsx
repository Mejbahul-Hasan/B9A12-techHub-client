import { GiVote } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";
import useTrendingProducts from "../hooks/useTrendingProducts";
import { Link } from "react-router-dom";


const TrendingProducts = () => {
    const [products] = useTrendingProducts();

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    products.map(product => (
                        <div key={product._id} className="card w-96 bg-base-200 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Product Name: {product.name}</h2>
                                <p>Tags: {product.tags}</p>
                                <Link to={`/product-details/${product._id}`} className="card-actions">
                                    <button className="btn btn-outline border-orange-500 w-full"><GiVote />{product.upvote_count}<BiUpvote /></button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center my-7">
                <Link to="/product-page">
                    <button className="btn btn-outline border-orange-500 w-1/2">Show All Products</button>
                </Link>
            </div>
        </>
    );
};

export default TrendingProducts;