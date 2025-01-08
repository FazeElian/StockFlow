// Company landing page components
import { HeaderCompany } from "./components/company/HeaderCompany";

export default function Home() {
  return (
    <>
      {/* Header component */}
      <HeaderCompany />

      <main className="content-page--company">
        <h1 className="color-white font-inter">Main view company</h1>
      </main>
    </>
  );
}