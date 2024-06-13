import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const PostReview = ({productDetails}) => {

    const { user } = useContext(AuthContext);

    const handleReviewSubmission = async e => {
        e.preventDefault()
        const form = e.target;
        const product_id = productDetails._id;
        const reviewer_name = user?.displayName;
        const reviewer_image = user?.photoURL;
        const review_description = form.description.value;
        const rating = form.rating.value;
        const addReview = { product_id, reviewer_name, reviewer_image, review_description, rating }
        form.reset();
        console.log(addReview);

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/addReviews`, addReview)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your review posted successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        } catch (err) {
            console.log(err)
            console.log("Hi, i am error", err.message)
        }
    }

    

    return (
        <section className="bg-white dark:bg-gray-700 rounded-lg">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What clients saying
                </h1>

                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>

                <form onSubmit={handleReviewSubmission} className="flex items-center max-w-6xl mx-auto">
                    <div className="lg:flex lg:gap-20 justify-stretch">
                        <div className="flex flex-col items-center justify-center mt-8">
                            <img className="object-cover rounded-full w-14 h-14" src={user?.photoURL} alt="" />

                            <div className="mt-4 text-center">
                                <h1 className="font-semibold text-gray-800 dark:text-white">{user?.displayName || "User name not found"}</h1>
                            </div>
                        </div>

                        <div className="lg:flex lg:gap-10 lg:mt-5">
                            <div>
                                <span className="label-text text-white">Your Review Description</span><br />
                                <input type="text" name="description" placeholder="Review" className="input w-full max-w-xs" />
                            </div>
                            <div>
                                <span className="label-text text-white">Your Rating</span><br />
                                <input type="text" name="rating" placeholder="Rating" className="input w-full max-w-xs" />
                            </div>
                            <div className="mt-6">
                                <button className="btn btn-outline border-orange-500 text-white">Review Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PostReview;