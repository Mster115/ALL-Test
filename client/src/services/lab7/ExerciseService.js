import API from '../API';

const endpoints = {
	SUBMIT_CHOICE: '/lab7/exercise/choice',
	CREATE_SIMULATION: '/lab7/exercise/AISimulation',
	CREATE_ROUND: '/lab7/exercise/round'
};

const ExerciseService = {
	createSimulation: () => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_EXERCISE);
	},
	createRound: () => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_ROUND);
	},
	submitChoice: (correct, question,selectedoption,
				   options) => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_CHOICE, {
			correct,
			question,
			selectedoption,
			options
		});
	}
};

export default ExerciseService;
