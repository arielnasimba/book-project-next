import Footer from "../../components/Footer/Footer";
import Maincomponent from "../../components/MainComponent/Maincomponent";
import MainGenrePageComponent from "../../components/MainGenrePageComponent/MainGenrePageComponent";
import Navbar from "../../components/Navbar/Navbar";

async function getProduct(){
  const res = await fetch('https:/example-data.draftbit.com/books')
  return res.json()
}

export default async function GenrePage() {
  const products = await getProduct()

  return (
    <main className="w-[100dvw] h-[250dvh] flex flex-col ">

      <div className={`navbar-area w-full h-[5rem]`}>


      <Navbar />
      </div>

      <div className="main-area">

        <MainGenrePageComponent products={products}  />
      </div>


      <Footer/>
    </main>
  );
}
