import HeroSection from './section/hero';
import Navbar from './section/navbar';
import CapabilitiesSection from './section/capabilities';
import HighlightsSection from './section/highlights';

export default function Home() {
  return (
    <>
      <div className=" w-full min-h-screen ">
        <Navbar />
        <HeroSection />
        <CapabilitiesSection />
        <HighlightsSection />
      </div>
    </>
  );
}
