import Header from "./(coming)/_components/header";
import Hero from "./(coming)/_components/hero";
import Contact from "./(coming)/_components/contact";
import Footer from "./(coming)/_components/footer";
import Countdown from "./(coming)/_components/countdown";

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
