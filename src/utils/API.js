import axios from 'axios';

/**
 * 
 * Hacker News API
 * https://hn.algolia.com/api
 * http://hn.algolia.com/api/v1/
 */

const URL = 'http://hn.algolia.com/api/v1/search?query=';
const SUFFICES = {
	story: '&tags=story'
};

let data = [];
export const getStories = function(param) {
	return axios
		.get(URL + param + SUFFICES.story)
		.then((res) => {
			return res.data.hits;
		})
		.catch((err) => {
			console.error(err);
		});
};

getStories('Yarn').then((data) => {
	// console.log(data);
});
