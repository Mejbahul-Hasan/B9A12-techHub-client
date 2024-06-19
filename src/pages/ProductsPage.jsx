import { GiVote } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const ProductsPage = () => {
        
    const axiosSecure = useAxiosSecure();

    const { refetch, data: products = [], isLoading } = useQuery({
        queryKey: ['accepted-product'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/accepted-product/${status}')
            return data;
        },
    })

        // handle Vote
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
            window.location.reload();
        },
    })

    const handleVote = async (id) => {
        await mutateAsync({ id })
    }
    
    const [items, setItems] = useState(products);
    const [search, setSearch] = useState('');
    // console.log(products, items)

    // items search by tags
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/search?search=${search}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [search]);

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text)
    }
    // console.log(search);

    if (isLoading) return <LoadingSpinner />

    return (
        <>
            < SectionTitle heading={"All Accepted Products"} />

            <form onSubmit={handleSearch}>
                <label className="input input-bordered flex items-center gap-2 w-96 my-5 mx-auto ">
                    <input type="text" name="search" className="grow" placeholder="Search by 'Tags'" />
                    <input type="submit" value="Search" className="btn btn-sm btn-outline border-orange-500" />
                </label>
            </form>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {
                items.map(product => (
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
        </>
    );
};

export default ProductsPage;