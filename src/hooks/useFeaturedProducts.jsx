import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFeaturedProducts = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: products = [], isLoading } = useQuery({
        queryKey: ['feature-product'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/feature-product/${product}')
            return data;
        },
    })

    return [products, refetch, isLoading];

};

export default useFeaturedProducts;