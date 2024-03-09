import NOSSR from "@/components/common/NOSSR";
import Footer from "@/components/footer/Footer";
import PeoplePage from "@/components/trend/PeoplePage";

const Trend = async () => {
  return (
    <NOSSR>
      <PeoplePage />
      <Footer />
    </NOSSR>
  );
};

export default Trend;
