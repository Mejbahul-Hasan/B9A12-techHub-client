// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTrendingProducts = () => {

    const axiosSecure = useAxiosSecure();

    const { refetch, data: products = [], isLoading } = useQuery({
        queryKey: ['trend-product'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/trend-product')
            return data;
        },
    })

    return [products, refetch, isLoading];

};

export default useTrendingProducts;