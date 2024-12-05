import Header from "./_components/header";
import Hero from "./_components/hero";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import Countdown from "./_components/countdown";

export default function ComingHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Countdown />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
