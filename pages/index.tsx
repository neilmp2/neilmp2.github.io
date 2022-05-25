import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Nav from "../components/SiteHeader";

export default function Home() {
  return (
    <>
      <Nav />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
