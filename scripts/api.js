const API = {
	getPhotographers: () => {
		return fetch("../../data/photographers.json").then((res) => res.json());
	},
};
