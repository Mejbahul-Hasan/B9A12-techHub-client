import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PostReview = () => {
    const { user } = useContext(AuthContext);

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

                <div className="flex items-center max-w-6xl mx-auto">
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
                                <input type="text" placeholder="Review" className="input w-full max-w-xs" />
                            </div>
                            <div>
                                <span className="label-text text-white">Your Rating</span><br />
                                <input type="text" placeholder="Rating" className="input w-full max-w-xs" />
                            </div>
                            <div className="mt-6">
                                <button className="btn btn-outline border-orange-500 text-white">Review Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostReview;