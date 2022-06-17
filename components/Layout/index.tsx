import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

export default function Layout(props: { children: any }) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
