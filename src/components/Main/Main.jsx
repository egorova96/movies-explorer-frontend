import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return (
    <>
<Promo />
<AboutProject />
<Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
};

export default Main;