import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Intro />
			<Services />
			<Experience />
			<Works />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
