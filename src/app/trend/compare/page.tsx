import NOSSR from "@/components/common/NOSSR";
import Footer from "@/components/footer/Footer";
import ComparePage from "@/components/trend/ComparePage";

const Compare = async () => {
  return (
    <NOSSR>
      <ComparePage />
      <Footer />
    </NOSSR>
  );
};

export default Compare;
