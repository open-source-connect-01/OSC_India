import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsRow from "@/components/StatsRow";
import MissionSection from "@/components/MissionSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsRow />
        <MissionSection />
      </main>
    </div>
  );
}
