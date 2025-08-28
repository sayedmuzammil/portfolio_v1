import HeroSection from './section/hero';
import Navbar from './section/navbar';
import CapabilitiesSection from './section/capabilities';
import HighlightsSection from './section/highlights';
import ToolsSection from './section/tools';
import SkillsSection from './section/skills';
import PortofoliosSection from './section/portfolios';
import JourneySection from './section/journey';
import TrustedBySection from './section/trusted-by';
import ContactUsSection from './section/contact';
import QuestionsSection2 from './section/faq';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" custom-container  min-h-screen ">
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
