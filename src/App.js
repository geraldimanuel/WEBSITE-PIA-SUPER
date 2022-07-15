import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Product" element={<Product />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
