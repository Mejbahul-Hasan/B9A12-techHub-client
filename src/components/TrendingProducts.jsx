import { GiVote } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";
import useTrendingProducts from "../hooks/useTrendingProducts";


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
                                <div className="card-actions">
                                    <button className="btn btn-outline w-full"><GiVote />{product.upvote_count}<BiUpvote /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center my-7">
                <button className="btn btn-outline w-1/2">Show All Products</button>
            </div>
        </>
    );
};

export default TrendingProducts;