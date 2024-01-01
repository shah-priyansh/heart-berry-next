import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import ScrolltopButton from "./ScrolltopButton";

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
