'use client';

import { useReducedMotion } from "@utils";
import AccessibleContent from "./components/common/AccessibleContent";
import CanvasLoader from "./components/common/CanvasLoader";
import ScrollWrapper from "./components/common/ScrollWrapper";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";

const Home = () => {
  // The whole site is a scroll-driven camera flythrough — there's no partial
  // version of that which respects "reduce motion". Swap to a plain static
  // page instead of trying to tame the 3D scene into stillness.
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <AccessibleContent visible />;
  }

  return (
    <>
      <AccessibleContent />
      <CanvasLoader>
        <ScrollWrapper>
          <Hero/>
          <Experience/>
          <Footer/>
        </ScrollWrapper>
      </CanvasLoader>
    </>
  );
};
export default Home;
