// Styles
import "@/public/css/views/IndexView.css"

// Company landing page components
import { HeaderCompany } from "./components/company/HeaderCompany";
import { TopBannerServices } from "./components/company/TopBannerServices";
import { AppMainFeatures } from "./components/company/AppMainFeatures";
import { ChooseYourPlan } from "./components/company/ChooseYourPlan";

export default function Home() {
  return (
    <>
      {/* Header component */}
      <HeaderCompany />

      <main className="content-page--company">
        <TopBannerServices />
        <AppMainFeatures />
        <ChooseYourPlan />
      </main>
    </>
  );
}