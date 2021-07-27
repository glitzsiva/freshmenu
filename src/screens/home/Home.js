

import CupponTopbar from "../../components/CupponTopbar";
import BannerSlider from "../../components/BannerSlider";
import QuickLinks from "../../components/QuickLinks";
import CategoryTitle from "../../components/CategoryTitle";
import FoodCard from "../../components/FoodCard";
import Footer from "../../components/Footer";


const Home = () => (
    <>
        <CupponTopbar />
        <QuickLinks />
        <BannerSlider />
        <CategoryTitle />
        <div className='container'>
            <div className='d-flex flex-wrap'>
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
        </div>

        <Footer />
    </>
);


export default Home;