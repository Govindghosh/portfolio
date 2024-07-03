
import Project from "@/components/Project";
import HeroSection from "../components/HeroSection";
import Footer from "@/components/Footer";
import Technological from "@/components/Technological";
import Approach from "@/components/Approach";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0F172A] text-[#f8f8f2] w-full dark:bg-[#0F172A]  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <HeroSection />
      <Technological />
      <Project />
      <Approach />
      <Footer />
    </main>
  );
}
