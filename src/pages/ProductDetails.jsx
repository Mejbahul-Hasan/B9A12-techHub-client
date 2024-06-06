import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import DetailsSection from "../components/DetailsSection";
import Testimonials from "../components/Testimonials";
import PostReview from "../components/PostReview";

const ProductDetails = () => {

    const productDetails = useLoaderData();

    return (
        <>
            <SectionTitle heading={'Product Details Section'} />
            <DetailsSection productDetails={productDetails} />
            <SectionTitle heading={'Review Section'} />
            <Testimonials/>
            <SectionTitle heading={'Post Review Section'} />
            <PostReview/>
        </>
    );
};

export default ProductDetails;