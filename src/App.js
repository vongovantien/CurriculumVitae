import About from "./pages/About";
import "./App.css";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />
       <Blog />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
