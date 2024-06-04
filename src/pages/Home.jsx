import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import SectionTitle from "../components/SectionTitle";
import TrendingProducts from "../components/TrendingProducts";

const Home = () => {
    return (
        <>
            <Carousel />
            < SectionTitle heading={"Featured Products"}/>
            <FeaturedProducts />
            < SectionTitle heading={"Trending Products"} />
            <TrendingProducts />
        </>
    );
};

export default Home;