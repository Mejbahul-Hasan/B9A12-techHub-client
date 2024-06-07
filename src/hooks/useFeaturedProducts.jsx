import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useFeaturedProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // const {data, isLoading} = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async ()=>{
    //         const {data} = await
    //     }
    // })

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products-feature`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, [])

    return [products, loading];
};

export default useFeaturedProducts;