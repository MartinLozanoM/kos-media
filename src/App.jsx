import "./App.css";
import { NavbarPagination } from "./components/Navbar.jsx";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";
import { ContactForm } from "./components/Form";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutsUs.jsx";
import { ClientsSection } from "./components/Clients.jsx";

function App() {
  return (
    <>
      <NavbarPagination />
      <Presentation />
      <Services />
      <AboutUs />
      <ContactForm />
      <ClientsSection />
      <Footer />
    </>
  );
}

export default App;
