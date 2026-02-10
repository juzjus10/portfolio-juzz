import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <main className="relative z-10 overflow-hidden">
        <section id="work" className="relative">
          <FeaturedWork />
        </section>

        <div className="section-divider" />

        <section id="services" className="relative">
          <Services />
        </section>

        <div className="section-divider" />

        <section id="experience" className="relative">
          <WorkExperience />
        </section>

        <div className="section-divider" />

        <section id="education" className="relative">
          <Education />
        </section>

        <div className="section-divider" />

        <section id="contact" className="relative">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
