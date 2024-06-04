import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import DetailsSection from "../components/DetailsSection";
import ReviewSection from "../components/ReviewSection";

const ProductDetails = () => {

    const productDetails = useLoaderData();

    return (
        <>
            <SectionTitle heading={'Product Details Section'} />
            <DetailsSection productDetails={productDetails} />
            <SectionTitle heading={'Review Section'} />
            <ReviewSection/>
            <SectionTitle heading={'New Review Section'} />
        </>
    );
};

export default ProductDetails;