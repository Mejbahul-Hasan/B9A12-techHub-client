import { GiVote } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import useFeaturedProducts from "../hooks/useFeaturedProducts";
import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from "react";


const ProductsPage = () => {
    const [products] = useFeaturedProducts();
    const [items, setItems] = useState(products);
    const [search, setSearch] = useState('');

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
    // console.log(search, items);


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
        </>
    );
};

export default ProductsPage;