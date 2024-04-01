import Footer from "../components/Footer/Footer"
import Login from "../components/Login/Login";
import Maincomponent from "../components/MainComponent/Maincomponent";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {

  return (
    <main className="w-[100dvw] h-[250dvh] flex flex-col ">

      <div className={`navbar-area w-full h-[5rem]`}>


      <Navbar />
      </div>

      <div className="main-area">

        <Maincomponent />
      </div>

      <Footer/>

    </main>
  );
}
