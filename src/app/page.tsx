import HeroSection from './section/hero';
import Navbar from './section/navbar';
// import CapabilitiesSection from './section/capabilities';
import HighlightsSection from './section/highlights';
// import ToolsSection from './section/tools';
// import SkillsSection from './section/skills';
import PortofoliosSection from './section/portfolios';
import JourneySection from './section/journey';
// import TrustedBySection from './section/trusted-by';
import ContactSection from './section/contact';
// import QuestionsSection from './section/questions';

export default function Home() {
  return (
    <>
      <div className=" custom-container ">
        {/* <div className="bg-black -z-10 w-full h-full" /> */}
        <div>
          <Navbar />
          <HeroSection />
          {/* <CapabilitiesSection /> */}
          <HighlightsSection />
          {/* <ToolsSection /> */}
          {/* <SkillsSection /> */}
          <PortofoliosSection />
          <JourneySection />
          {/* <TrustedBySection /> */}
          {/* <QuestionsSection /> */}
          <ContactSection />
        </div>
      </div>
    </>
  );
}
