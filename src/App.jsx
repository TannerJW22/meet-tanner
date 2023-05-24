// :::| Descriptions for Works / Experience / Contact Form

import { BrowserRouter } from "react-router-dom";

import { Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Capstone } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<Navbar />
				<div className="bg-[#050817] md:bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Hero />
				</div>
				<Tech />
				<Capstone />
				<Works />
				<Experience />
			</div>
		</BrowserRouter>
	);
};

export default App;
