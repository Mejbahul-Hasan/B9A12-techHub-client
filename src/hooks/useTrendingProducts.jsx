// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTrendingProducts = () => {

    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const { refetch, data: products = [], isLoading } = useQuery({
        queryKey: ['trend-product'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/trend-product')
            return data;
        },
    })

    return [products, refetch, isLoading];

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/trend-product`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             setLoading(false);
    //         });
    // }, [])

    // return [products, loading];
};

export default useTrendingProducts;