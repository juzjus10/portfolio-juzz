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

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

      {/* Main Content Grid */}
      <section className="relative z-10 h-[100vh] container mx-auto my-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <FeaturedWork />
          <Services />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

      {/* Work Experience Section */}
      <section className="relative z-10 w-full border-t border-white/5">
        <WorkExperience />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-white/10"></div>

      {/* Education Section */}
      <section className="relative z-10 w-full">
        <Education />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-white/10"></div>

      {/* Contact Form Section */}
      <section className="relative z-10 w-full">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
