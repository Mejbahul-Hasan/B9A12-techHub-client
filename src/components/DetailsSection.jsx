import { GiVote } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";
import { FaLink } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const DetailsSection = ({ productDetails }) => {

    const { _id, product_name, product_image, description, tags, external_links, upvote_count, product_owner } = productDetails || {};
    const { user } = useAuth();

    // handle Vote Button
    const { mutateAsync: mutateAsyncFunction1 } = useMutation({
        mutationFn: async ({ id }) => {
            const { data } = await axiosSecure.patch(`/product-vote/${id}`)
            // console.log(data)
            return data
        },
        onSuccess: () => {
            window.location.reload();
            Swal.fire("Thank you for your VOTE");
        },
    })
    
    const handleVote = async (id) => {
        await mutateAsyncFunction1({ id })
    }
    
    // handleReport Button
    const { mutateAsync } = useMutation({
        mutationFn: async ({ id }) => {
            const { data } = await axiosSecure.patch(`/reported-product/${id}`)
            // console.log(data)
            return data
        },
        onSuccess: () => {
            Swal.fire("Reported for Moderator Action");
        },
    })
    
    const handleReport = async (id) => {
        // console.log(id)
        await mutateAsync({ id })
    }

    return (
        <div className="lg:flex">
            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${product_image})` }}>
                    <div className="w-full h-full bg-black opacity-25"></div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 lg:text-4xl">{product_name}</h2>
                    <p className="mt-4 font-bold text-gray-500 dark:text-gray-400 lg:text-base">Tag: {tags}</p>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Description: {description}</p><br />
                    <div className="flex items-center">
                        <FaLink />
                        <p className="mx-3">{external_links}</p>
                    </div>
                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <button onClick={() => handleVote(_id)} disabled={user?.email === product_owner?.email} className="btn btn-outline border-orange-500 w-full lg:w-1/2"><GiVote />{upvote_count}<BiUpvote /></button>
                        <button onClick={() => handleReport(_id)} className="btn btn-outline border-orange-500 w-full lg:w-1/2 lg:ml-5">Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSection;


