import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Nav from "../components/SiteHeader";

export default function Home() {
  return (
    <>
      <Nav />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}
