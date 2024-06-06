import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, [])

    return (
        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-3 xl:mt-10 max-w-7xl">
            {
                reviews.map(review => (
                    <TestimonialCard key={review._id} review={review}></TestimonialCard>
                ))
            }
        </div>
    );
};

export default Testimonials;