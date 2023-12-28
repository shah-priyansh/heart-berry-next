import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import ScrolltopButton from "./ScrolltopButton/ScrolltopButton";

export default function Layout({ children }) {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrolltopButton />
    </>
  );
}
