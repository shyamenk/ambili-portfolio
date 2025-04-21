import AboutMe from "./components/about";
import ArtWorks from "./components/ArtWorks";
import Awards from "./components/Awards";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import Exhibition from "./components/Exhibition";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Movies from "./components/Movies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Biography />
      <Awards />
      <Movies />
      <ArtWorks />
      <Exhibition />
      <Gallery />
      <AboutMe />
      <Contact />
    </main>
  );
}
