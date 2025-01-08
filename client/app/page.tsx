// Styles
import "@/public/css/views/IndexView.css"

// Company landing page components
import { HeaderCompany } from "./components/company/HeaderCompany";
import { TopBannerServices } from "./components/company/TopBannerServices";

export default function Home() {
  return (
    <>
      {/* Header component */}
      <HeaderCompany />

      <main className="content-page--company">
        <TopBannerServices />
      </main>
    </>
  );
}