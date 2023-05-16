import "./assets/style/style.css";
import { Header } from "./components/header.jsx";
import { InnerImages } from "./components/innerIMG.jsx";
import { ProgrammingLanguages } from "./components/progLang.jsx";
import { SinglePrice } from "./components/singlePrice.jsx";
import { UniqueDemos } from "./components/uniqueDemos.jsx";
import { BestUIUX } from "./components/uiux.jsx";
import { Other } from "./components/other.jsx";
import { Slider } from "./components/slider.jsx";
import { SupportTeam } from "./components/support-team.jsx";
import { MainBackground } from "./components/bgMain.jsx";
import { BlogStyle } from "./components/blogStyle.jsx";
import { NewFeatures } from "./components/newFeatures.jsx";
import { ResponsiveSection } from "./components/responsive.jsx";
import { EcommerceReadySection } from "./components/ecommerce.jsx";
import { Footer } from "./components/footer.jsx";
function App() {
  return (
    <>
      <Header />
      <InnerImages />
      <ProgrammingLanguages />
      <SinglePrice />
      <UniqueDemos />
      <BestUIUX />
      <Other />
      <Slider />
      <SupportTeam />
      <NewFeatures />
      <MainBackground />
      <BlogStyle />
      <ResponsiveSection />
      <EcommerceReadySection />
      <Footer />
    </>
  );
}

export default App;
