import Herosection from "./components/Herosection";
import '../../styles/home/Home.css'
import Whatyouget from "./components/Whatyouget";
import Storesonafiari from "./components/Storesonafiari";
import Howtoshop from "./components/Howtoshop";
import Faq from "./components/Faq";
import Slide from "./components/Slide";


const Homepage = () => {
  return (
    <div className="Homepage">
      <Herosection />
      <Whatyouget />
      <Storesonafiari />
      <Howtoshop />
      <Slide />
      <Faq />
    </div>
  );
};

export default Homepage;
