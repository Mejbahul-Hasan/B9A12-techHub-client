import { GiVote } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";
import useTrendingProducts from "../hooks/useTrendingProducts";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import LoadingSpinner from "./LoadingSpinner";
import useAuth from "../hooks/useAuth";


const TrendingProducts = () => {
    const [products, refetch, isLoading] = useTrendingProducts();
    const { user } = useAuth();

    const { mutateAsync } = useMutation({
        mutationFn: async ({ id }) => {
            const { data } = await axiosSecure.patch(`/product-vote/${id}`)
            console.log(data)
            return data
        },
        onSuccess: () => {
            Swal.fire("Thank you for your VOTE");
            refetch();
        },
    })

    // handleTrendingProduct
    const handleVote = async (id) => {
        await mutateAsync({ id })
    }

    if (isLoading) return <LoadingSpinner />

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    products.map(product => (
                        <div key={product._id} className="card w-96 bg-base-200 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.product_image} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <Link to={`/product-details/${product._id}`}>
                                    <h2 className="card-title">Product Name: {product.product_name}</h2>
                                </Link>
                                <p>Tags: {product.tags}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleVote(product._id)} disabled={user?.email === product.product_owner?.email} className="btn btn-outline border-orange-500 w-full"><GiVote />{product.upvote_count}<BiUpvote /></button>
                                </div>
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