import { FcRating } from "react-icons/fc";

const TestimonialCard = ({ review }) => {
    
    return (
        <div >
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-600 md:p-8">
                <div className="flex items-center my-5">
                    <img className="object-cover rounded-full w-14 h-14" src={review.image} alt="" />

                    <div className="mx-4">
                        <h1 className="font-semibold text-blue-500">{review.reviewer_name}</h1>
                    </div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                    {review.review_description}
                </p>
                <div className="mt-5">
                    <span className="text-l text-gray-500 dark:text-gray-300">Product Rating: {review.rating}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;