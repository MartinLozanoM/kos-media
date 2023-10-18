import "./App.css";
import { NavbarPagination } from "./components/Navbar.jsx";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";
import { ContactForm } from "./components/Form";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavbarPagination />
      <Presentation />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
