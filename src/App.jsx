import "./App.css";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./pages/home/homePage";
import Footer from './components/footer/Footer';


const App = () => (
  <div className="App">
    <NavBar />
    <HomePage />
    <Footer />
  </div>
);

export default App;
