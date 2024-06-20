
import HeroSection from "../components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#282A36] text-[#f8f8f2]">
      <HeroSection />
      <Footer />
    </main>
  );
}
