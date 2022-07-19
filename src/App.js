import Navbar from "./components/Navbars/Navbar";
import Landing from "./pages/Landing";
import "./styles/home.css";

function App() {
  return (
    <main className="HomePage">
      <Navbar />
      <Landing />
    </main>
  );
}

export default App;
