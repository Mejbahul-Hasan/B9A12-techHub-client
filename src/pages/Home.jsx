import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
    return (
        <>
            <Carousel />
            < SectionTitle heading={"Featured Products"}></SectionTitle>
            <FeaturedProducts/>
        </>
    );
};

export default Home;