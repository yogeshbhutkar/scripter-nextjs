import Footer from "@/components/Footer";
import FeaturePage from "@/components/feature-page/FeaturePage";
import LandingPage from "@/components/landing-page/LandingPage";
import Navbar from "@/components/landing-page/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <FeaturePage />
      <Footer />
    </main>
  );
}
