import Navbar from "./components/Navbars/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import "./styles/home.css";

function App() {
  return (
    <main className="HomePage">
      <Navbar />
      <Landing />
      <About />
    </main>
  );
}

export default App;
