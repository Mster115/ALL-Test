import {EXERCISE_IDLE} from '../../constants/lab7/index';

export const types = {
    UPDATE_STATE: '@accessibility-lab/lab7/exercise/update_state',
    ENABLE_END: '@accessibility-lab/lab7/exercise/enable_end',
    RESET: '@accessibility-lab/lab7/exercise/reset',
    INCREMENT_SCORE: '@accessibility-lab/lab7/exercise/increment_score',
    INCREMENT_INTRUSIONS: '@accessibility-lab/lab7/exercise/increment_intrusions',
    INCREMENT_PROTECTED: '@accessibility-lab/lab7/exercise/increment_protected',
    INCREMENT_INCORRECT: '@accessibility-lab/lab7/exercise/increment_incorrect',
    START_NEW_ROUND: '@accessibility-lab/lab7/exercise/start_new_round',
    UPDATE_THREAT_LEVEL: '@accessibility-lab/lab7/exercise/update_threat_level',
};

export const initialState = {
    state: EXERCISE_IDLE,
    end: false,
    score: 0,
    roundNumber: 0,
    intrusions: 0,
    protected: 0,
    incorrect: 0,
    threatLvl: 0,

};

const ExerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_STATE:
            return {
                ...state,
                state: action.state
            };
        case types.RESET:
            return {
                ...state,
            };
        case types.INCREMENT_SCORE:
            return {
                ...state,
                score: state.score + action.score
            };
        case types.INCREMENT_INTRUSIONS:
            return {
                ...state,
                intrusions: state.intrusions + 1
            };
        case types.INCREMENT_PROTECTED:
            return {
                ...state,
                protected: state.protected + 1
            };
        case types.INCREMENT_INCORRECT:
            return {
                ...state,
                incorrect: state.incorrect + 1
            };
        case types.START_NEW_ROUND:
            return {
                ...state,
                roundNumber: state.roundNumber + 1,
            };
        case types.UPDATE_THREAT_LEVEL:
            return {
                ...state,
                threatLvl: action.threatLvl
            }
        case types.ENABLE_END:
            return {
                ...state,
                end: action.state
            };
        default:
            return state;
    }
};

export const actions = {
    updateState: (state) => ({type: types.UPDATE_STATE, state}),
    enableEnd: () => ({type: types.ENABLE_END}),
    reset: () => ({type: types.RESET}),
    incrementScore: (score) => ({type: types.INCREMENT_SCORE, score}),
    incrementIntrusions: () => ({type: types.INCREMENT_INTRUSIONS}),
    incrementProtected: () => ({type: types.INCREMENT_PROTECTED}),
    incrementIncorrect: () => ({type: types.INCREMENT_INCORRECT}),
    startNewRound: () => ({type: types.START_NEW_ROUND}),
    updateThreatLevel: (threatLvl) => ({type: types.UPDATE_THREAT_LEVEL, threatLvl}),

};

export default ExerciseReducer;

