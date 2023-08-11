import milionaireGameImage from "../assets/images/projects/milionaireGame.png";
import beerAppImage from "../assets/images/projects/beerApp.png";
import storeAppImage from "../assets/images/projects/storeApp.png";
import carsAppImage from "../assets/images/projects/carsApp.png";
import weatherAppImage from "../assets/images/projects/weatherApp.png";
import travelBlogImage from "../assets/images/projects/travelBlog.png";
import musicAppImage from "../assets/images/projects/musicApp.png";

export type Project = {
	id: number;
	name: string;
	image: string;
	description: string;
	code: string;
	demo: string;
};

export const projetcsList: Project[] = [
	{
		id: 0,
		name: "Who wants to be a Millionaire",
		image: milionaireGameImage,
		description:
			"Who wants to be a Millionaire is a web-based quiz game built using React and TypeScript. It utilizes Redux Toolkit and Redux-Persist for managing the state and persisting data, while React Router handles navigation within the application. The user interface is designed to be clean and responsive, achieved through the use of Bootstrap for styling. It also utilizes Vite as the development server and build tool for faster development and optimized builds.",
		code: "https://github.com/hristoz2020/milionaire-game-app",
		demo: "https://hristoz2020.github.io/milionaire-game-app/",
	},
	{
		id: 1,
		name: "Beer App",
		image: beerAppImage,
		description:
			"React-based application that displays a list of beers which includes an image and a short description about. Users can select their favorite beers and create own list of favorite beers. Application allows users to search for beers by specific keywords. Another interesting feature is the ability to generate a random beer and view its details.",
		code: "https://github.com/hristoz2020/beer-app",
		demo: "https://hristoz2020.github.io/beer-app/",
	},
	{
		id: 2,
		name: "Store App",
		image: storeAppImage,
		description:
			"Online shop that enables users to create an account and log in. Products page displays all products from different categories with option for search a product by specific keyword. Users can add products to their cart and after that edit selected products or purchase them. The categories page makes it easy for users to find products by category.",
		code: "https://github.com/hristoz2020/store-app",
		demo: "https://hristoz2020.github.io/store-app/",
	},
	{
		id: 3,
		name: "Cars App",
		image: carsAppImage,
		description:
			"This is a React-based application that enables users to create an account and log in. Once logged in, users are redirected to their personal home page which displays a table. This table allows users to add rows with details about cars such as their make, model, color, price, horsepower and others.",
		code: "https://github.com/hristoz2020/cars",
		demo: "",
	},
	{
		id: 4,
		name: "Music App",
		image: musicAppImage,
		description:
			"It is a web-based application that works like an online music catalog that allows users to buy albums. It has keyword search option, admin panel to create albums and user registration. The main pages include Home, Catalog, Search, Create Album, Register, Login and Buy Album. Users can browse and buy albums, while administrators manage content.",
		code: "https://github.com/hristoz2020/music-app",
		demo: "",
	},
	{
		id: 5,
		name: "Weather App",
		image: weatherAppImage,
		description:
			"This React-based web application provides users with real-time weather updates and forecasts for selected cities. It employs components like Search for city lookup, CurrentWeather to display present conditions, and potentially Forecast for upcoming predictions. The app interacts with weather APIs, utilizing fetch for data retrieval.",
		code: "https://github.com/hristoz2020/Weather-App",
		demo: "https://hristoz2020.github.io/Weather-App/",
	},
	{
		id: 6,
		name: "Travel-Blog",
		image: travelBlogImage,
		description:
			"This HTML and CSS code represents a travel blog website. The webpage features a header with a navigation menu, a captivating title, and a call-to-action button. The design is clean and modern, utilizing a background image and font styles for a visually appealing experience.",
		code: "https://github.com/hristoz2020/Travel-Blog",
		demo: "https://hristoz2020.github.io/Travel-Blog/",
	},
];
