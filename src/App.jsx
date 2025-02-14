import "./App.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Routings } from "./components/Routings";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routings />
      <Footer />
    </div>
  );
}

export default App;
