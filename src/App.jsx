import Hero from "./sections/Hero";
import Feautured from "./sections/Feautured";
import GreatTea from "./sections/GreatTea";
import SuperClient from "./sections/SuperClient";
import NewsEvent from "./sections/NewsEvent";
import Footer from "./sections/Footer";
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto md:px-10  px-4 space-y-20 md:space-y-32.5 my-20 md:my-32.5">
        <Feautured />
        <GreatTea />
        <SuperClient />
        <NewsEvent />
      </main>
      <Footer />



      <ScrollToTop />
    </>
  );
};

export default App;
