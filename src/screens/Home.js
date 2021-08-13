
import Header from "../components/Header";
import CupponTopbar from "../components/CupponTopbar";
import BannerSlider from "../components/BannerSlider";
import QuickLinks from "../components/QuickLinks";
import CategoryTitle from "../components/CategoryTitle";
import FoodCardLists from "../components/FoodCardLists";
import Footer from "../components/Footer";
// import CartInfo from "../components/CartInfo";

const Home = () => (
    <>
        <Header />
        <CupponTopbar />
        <QuickLinks />
        <BannerSlider />
        <CategoryTitle />
        <FoodCardLists />
        <Footer />
        {/* <CartInfo /> */}
    </>
);


export default Home;