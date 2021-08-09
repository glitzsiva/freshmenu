
import Header from "../components/Header";
import CupponTopbar from "../components/CupponTopbar";
import BannerSlider from "../components/BannerSlider";
import QuickLinks from "../components/QuickLinks";
import CategoryTitle from "../components/CategoryTitle";
import FoodCardLists from "../components/FoodCardLists";
import Footer from "../components/Footer";


const Home = () => (
    <>
        <Header />
        <CupponTopbar />
        <QuickLinks />
        <BannerSlider />
        <CategoryTitle />
        <FoodCardLists />
        <Footer />
    </>
);


export default Home;