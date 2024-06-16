import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const AddProduct = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { mutateAsync } = useMutation({
        mutationFn: async productData => {
            const { data } = await axiosSecure.post(`/add-product`, productData)
            return data
        },
        onSuccess: () => {
            // console.log('Data Saved Successfully')
            Swal.fire({
                title: 'Success!',
                text: 'Your product added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            navigate('/dashboard/my-products')
        },
    })

    const handleFormSubmission = async e => {
        e.preventDefault()
        const form = e.target;
        const product_name = form.product_name.value;
        const product_image = form.product_image.value;
        const description = form.description.value;
        const tags = form.tags.value;
        const external_links = form.tags.value;
        const upvote_count = 0;
        const product_owner = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }
        const productData = { product_name, product_image, description, tags, external_links, upvote_count, product_owner }
        // console.table(productData)
        form.reset();

        try {
            //   Post request to server
            await mutateAsync(productData)
        } catch (err) {
            console.log(err)
            console.log("Hi, i am error", err.message)
        }
    }



    // try {
    //     const { data } = await axiosSecure.post(`/add-product`, productData)
    //     console.log(data)
    //     if (data.insertedId) {
    //         Swal.fire({
    //             title: 'Success!',
    //             text: 'Your product added successfully',
    //             icon: 'success',
    //             confirmButtonText: 'Cool'
    //         })
    //     }
    //     navigate('/dashboard/my-products')
    // } catch (err) {
    //     console.log(err)
    //     console.log("Hi, i am error", err.message)
    // }
    // }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-600">

            <div className="flex gap-8 items-center justify-center mt-8">
                <img className="object-cover rounded-full w-14 h-14" src={user?.photoURL} alt="" />
                <div className="mt-4 text-center">
                    <h1 className="font-semibold text-gray-800 dark:text-white">{user?.displayName || "User name not found"}</h1>
                    <h1 className=" text-gray-800 dark:text-white">{user?.email || "User email not found"}</h1>
                </div>
            </div>

            <h2 className="my-7 text-lg font-semibold text-gray-700 capitalize dark:text-white">Please fill-up the following form to add your product</h2>

            <form onSubmit={handleFormSubmission}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Product Name</label>
                        <input name="product_name" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Product Image URL</label>
                        <input name="product_image" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Product Description</label>
                        <input name="description" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Tags</label>
                        <input name="tags" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">External Links</label>
                        <input name="external_links" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>

                <div className="mt-6">
                    <button className="btn w-full btn-outline border-orange-500 text-white">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;