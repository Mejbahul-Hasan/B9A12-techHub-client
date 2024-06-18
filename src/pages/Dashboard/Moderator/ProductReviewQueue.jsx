import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../components/LoadingSpinner";

const ProductReviewQueue = () => {

    const axiosSecure = useAxiosSecure();

    const { refetch, data: products = [], isLoading } = useQuery({
        queryKey: ['moderator-product'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/moderator-product')
            return data;
        },
    })

    const { mutateAsync: mutateAsyncFunction1 } = useMutation({
        mutationFn: async ({ id }) => {
            const { data } = await axiosSecure.patch(`/feature-product/${id}`)
            console.log(data)
            return data
        },
        onSuccess: () => {
            Swal.fire("Product was made Featured successfully");
            refetch()
        },
    })

    // handleFeatureProduct
    const handleFeatureProduct = async (id) => {
        await mutateAsyncFunction1({ id })
    }

    const { mutateAsync } = useMutation({
        mutationFn: async ({ id, status }) => {
            const { data } = await axiosSecure.patch(`/moderator-product/${id}`, { status })
            // console.log(data)
            return data
        },
        onSuccess: () => {
            Swal.fire("Product status changed successfully");
            refetch()
        },
    })

    // handleStatus
    const handleStatus = async (id, prevStatus, status) => {
        // console.log(id, prevStatus, status)
        await mutateAsync({ id, status })
    }

    if (isLoading) return <LoadingSpinner />

    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>Product Review Queue</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {products.length} products
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Product Name
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Product Details
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Make Product Featured
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Accept the Product
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Reject the Product
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    products.map(product => (
                                        <tbody key={product._id} className='bg-white divide-y divide-gray-200 '>
                                            <tr>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {product.product_name}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    <Link to={`/product-details/${product._id}`} className="btn border-orange-500 btn-outline btn-sm">View Details</Link>
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    <button onClick={() =>
                                                        handleFeatureProduct(product._id)
                                                    } className="btn border-orange-500 btn-outline btn-sm">Make Product Featured</button>
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {/* Accept Button: Pending */}
                                                    <button onClick={() =>
                                                        handleStatus(product._id, product.status, 'Accepted')
                                                    }
                                                        disabled={product.status === 'Accepted'} className="btn border-orange-500 btn-outline btn-sm">Accept</button>
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {/* Reject Button */}
                                                    <button onClick={() =>
                                                        handleStatus(product._id, product.status, 'Rejected')
                                                    }
                                                        disabled={product.status === 'Rejected'} className="btn border-orange-500 btn-outline btn-sm">Reject</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ProductReviewQueue;