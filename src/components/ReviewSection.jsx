import { useEffect, useState } from "react";

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            });
    }, [])

    // if(reviews.product_id=)

    return (
        <div>
            {
                reviews.map(review => (
                    <div key={review._id} className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={review.reviewer_image} />
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{review.reviewer_name}</h2>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{review.review_description}</p>

                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">John Doe</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ReviewSection;