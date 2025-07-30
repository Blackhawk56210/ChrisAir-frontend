import Banner from "../components/main-page/Banner.jsx";
import New from "../components/main-page/NewInventory.jsx";
import Bio from "../components/main-page/CompanyBio.jsx";
import CompanySection from "../components/Contact.jsx";

export default function Home() {
  return (
    <div className="p-15 pt-20">
      <Banner />
      <New />
      <Bio />
      <CompanySection />
    </div>
  );
}
