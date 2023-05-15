import Herosection from "./components/Herosection";
import '../../styles/home/Home.css'
import Whatyouget from "./components/Whatyouget";
import Storesonafiari from "./components/Storesonafiari";


const Homepage = () => {
  return (
    <div className="Homepage">
      <Herosection />
      <Whatyouget />
      <Storesonafiari />
    </div>
  );
};

export default Homepage;
