import milionaireGameImage from "../assets/images/projects/milionaireGame.png";
import beerAppImage from "../assets/images/projects/beerApp.png";

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
];
