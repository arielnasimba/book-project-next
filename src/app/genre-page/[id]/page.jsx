import Footer from "../../../components/Footer/Footer";
import Maincomponent from "../../../components/MainComponent/Maincomponent";
import MainGenrePageComponent from "../../../components/MainGenrePageComponent/MainGenrePageComponent";
import MainGenrePageID from "../../../components/MainGenrePageID/MainGenrePageID";
import Navbar from "../../../components/Navbar/Navbar";

export default function GenrePageUnique() {

  return (
    <main className="w-[100dvw] h-[250dvh] flex flex-col ">

      <div className={`navbar-area w-full h-[5rem]`}>


      <Navbar />
      </div>

      <div className="main-area">

        {/* <MainGenrePageComponent /> */}
        <MainGenrePageID />
      </div>

      <div className="footer-area">


      </div>

      <Footer/>
    </main>
  );
}
