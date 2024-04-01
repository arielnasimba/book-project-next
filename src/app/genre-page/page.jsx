import Footer from "../../components/Footer/Footer";
import Maincomponent from "../../components/MainComponent/Maincomponent";
import MainGenrePageComponent from "../../components/MainGenrePageComponent/MainGenrePageComponent";
import Navbar from "../../components/Navbar/Navbar";

export default function GenrePage() {

  return (
    <main className="w-[100dvw] h-[250dvh] flex flex-col ">

      <div className={`navbar-area w-full h-[5rem]`}>


      <Navbar />
      </div>

      <div className="main-area">

        <MainGenrePageComponent />
      </div>


      <Footer/>
    </main>
  );
}
