import HeroSection from './section/hero';
import Navbar from './section/navbar';
import CapabilitiesSection from './section/capabilities';
import HighlightsSection from './section/highlights';
import ToolsSection from './section/tools';
import SkillsSection from './section/skills';
import PortofoliosSection from './section/portfolios';
import JourneySection from './section/journey';
import TrustedBySection from './section/trusted-by';
import ContactUsSection from './section/testcontact';
import QuestionsSection2 from './section/questions2';

export default function Home() {
  return (
    <>
      <div className=" custom-container  min-h-screen ">
        <Navbar />
        <HeroSection />
        <CapabilitiesSection />
        <HighlightsSection />
        <ToolsSection />
        <SkillsSection />
        <PortofoliosSection />
        <JourneySection />
        <TrustedBySection />
        <QuestionsSection2 />
        <ContactUsSection />
      </div>
    </>
  );
}
