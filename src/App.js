import "./App.css";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import TeamSection from "./components/TeamSection";
import FeaturesSection from "./components/FeaturesSection";
import DocumentationSection from "./components/DocumentationSection";

const App = () => {
	return (
		<div>
			<Navbar />

			<ProductSection />
			<FeaturesSection />
			<TeamSection />
			<DocumentationSection />
		</div>
	);
};

export default App;
